import { logEvent, MonitoringEvents } from "./monitoring";
import { webhookStorage } from "./webhook-queue";

const WEBHOOK_TIMEOUT_MS = process.env.WEBHOOK_TIMEOUT_MS ? parseInt(process.env.WEBHOOK_TIMEOUT_MS) : 8000;
const MAX_RETRIES = process.env.WEBHOOK_MAX_RETRIES ? parseInt(process.env.WEBHOOK_MAX_RETRIES) : 3;

// Helper to fetch with timeout and proper cleanup
async function fetchWithTimeout(resource: string, options: RequestInit & { timeout: number }) {
  const { timeout = 8000 } = options;
  const controller = new AbortController();
  let id: NodeJS.Timeout | undefined;
  
  try {
    id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal  
    });
    return response;
  } finally {
    if (id) clearTimeout(id);
  }
}

export async function sendWebhookWithRetry(url: string | undefined, payload: any): Promise<boolean> {
  if (!url) {
    logEvent(MonitoringEvents.WEBHOOK_FAILED, { reason: "No webhook URL provided", payloadType: payload?.leadType });
    await webhookStorage.saveFailedPayload(payload, "No URL configured");
    return false; 
  }

  let attempt = 0;
  let lastError: Error | null = null;
  let isNonRetryable = false;

  while (attempt < MAX_RETRIES && !isNonRetryable) {
    try {
      if (attempt > 0) {
        logEvent(MonitoringEvents.WEBHOOK_RETRIED, { attempt, payloadType: payload?.leadType });
        // Exponential backoff: 1s, 2s, 4s...
        await new Promise(res => setTimeout(res, Math.pow(2, attempt - 1) * 1000));
      }

      const response = await fetchWithTimeout(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        timeout: WEBHOOK_TIMEOUT_MS
      });

      if (response.ok) {
        logEvent(MonitoringEvents.WEBHOOK_SUCCESS, { payloadType: payload?.leadType });
        return true;
      } else {
        // Handle 4xx errors (non-retryable client errors like 400 Bad Request, 401 Unauthorized)
        if (response.status >= 400 && response.status < 500) {
          isNonRetryable = true;
          throw new Error(`Non-retryable HTTP Error: ${response.status}`);
        }
        throw new Error(`HTTP Error: ${response.status}`);
      }
    } catch (error: any) {
      lastError = error;
      attempt++;
    }
  }

  // All retries failed or it was a non-retryable error
  const errorReason = lastError?.name === 'AbortError' ? "Timeout" : lastError?.message || "Unknown error";
  
  logEvent(MonitoringEvents.WEBHOOK_FAILED, { 
    reason: `Failed after ${attempt} attempts. Last error: ${errorReason}`, 
    payloadType: payload?.leadType 
  });
  
  await webhookStorage.saveFailedPayload(payload, errorReason);
  
  return false;
}
