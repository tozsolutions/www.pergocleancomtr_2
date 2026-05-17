// Simple Centralized Monitoring

export const MonitoringEvents = {
  WEBHOOK_SUCCESS: "webhookSuccess",
  WEBHOOK_FAILED: "webhookFailed",
  WEBHOOK_RETRIED: "webhookRetried",
  LEAD_SUBMITTED: "leadSubmitted",
  VALIDATION_FAILED: "validationFailed",
} as const;

export type MonitoringEvent = typeof MonitoringEvents[keyof typeof MonitoringEvents];

export function logEvent(event: MonitoringEvent, details: any = {}) {
  // Mask sensitive info before logging
  const safeDetails = { ...details };
  
  if (safeDetails.phone) {
    safeDetails.phone = safeDetails.phone.replace(/.(?=.{4})/g, '*');
  }
  if (safeDetails.email) {
    safeDetails.email = safeDetails.email.replace(/(.{2})(.*)(?=@)/, '$1***');
  }
  if (safeDetails.message && typeof safeDetails.message === "string") {
    // Truncate long messages in logs to avoid log bloat and limit PII exposure
    safeDetails.message = safeDetails.message.substring(0, 100) + (safeDetails.message.length > 100 ? "..." : "");
  }
  if (safeDetails.ip) {
    safeDetails.ip = "[REDACTED]"; // IP is already hashed usually, but just in case
  }
  
  // In a real production app, this would send data to Sentry, Datadog, Axiom, etc.
  const logMessage = `[MONITORING] [${new Date().toISOString()}] EVENT: ${event} | DETAILS: ${JSON.stringify(safeDetails)}`;
  
  if (event === MonitoringEvents.WEBHOOK_FAILED || event === MonitoringEvents.VALIDATION_FAILED) {
    console.error(logMessage);
  } else {
    console.log(logMessage);
  }
}
