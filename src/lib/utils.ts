export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export async function postWebhook(url: string | undefined, payload: unknown) {
  if (!url) {
    return { ok: true, skipped: true };
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Webhook error: ${response.status}`);
  }

  return { ok: true, skipped: false };
}
