// Webhook queue and fallback storage abstraction
import { logEvent } from "./monitoring";

export interface IWebhookStorage {
  saveFailedPayload(payload: any, errorReason: string): Promise<void>;
  // Future methods: getFailedPayloads(), retryAll() etc.
}

// 1. Local Fallback (Development Only)
class LocalFallbackStorage implements IWebhookStorage {
  async saveFailedPayload(payload: any, errorReason: string): Promise<void> {
    // In serverless, memory is ephemeral, but this is a stub for development
    logEvent("webhookFailed", { 
      reason: errorReason, 
      note: "Saved to LocalFallbackStorage (Ephemeral)",
      payloadType: payload?.leadType
    });
  }
}

// 2. Production Storage (Upstash Redis / Vercel KV / Supabase)
class ProductionKVStorage implements IWebhookStorage {
  async saveFailedPayload(payload: any, errorReason: string): Promise<void> {
    // TODO: Implement actual KV or Redis saving logic here.
    // e.g. await kv.lpush('failed_webhooks', JSON.stringify({ payload, errorReason, date: Date.now() }));
    
    logEvent("webhookFailed", { 
      reason: errorReason, 
      note: "Production KV Storage not yet fully initialized. Falling back to stdout.",
      payloadType: payload?.leadType
    });
  }
}

// Select storage adapter based on environment
export const webhookStorage: IWebhookStorage = 
  process.env.NODE_ENV === "production" 
    ? new ProductionKVStorage() 
    : new LocalFallbackStorage();
