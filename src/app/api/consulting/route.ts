import { z } from "zod";

const interestRequest = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(200).optional(),
  budget: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1).max(5000),
});

export type InterestRequest = z.infer<typeof interestRequest>;

function formatMessage(r: InterestRequest) {
  return [
    "New consulting inquiry",
    `Name: ${r.name}`,
    `Email: ${r.email}`,
    r.company ? `Company: ${r.company}` : null,
    r.budget ? `Budget: ${r.budget}` : null,
    "",
    r.message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export async function POST(req: Request) {
  const result = interestRequest.safeParse(await req.json());

  if (!result.success) {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const webhookUrl = process.env.CONSULTING_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("CONSULTING_WEBHOOK_URL is not set", result.data);
    return Response.json({ error: "Form is not configured" }, { status: 500 });
  }

  const text = formatMessage(result.data);
  // `text` is read by Slack webhooks, `content` by Discord webhooks.
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, content: text }),
  });

  if (!response.ok) {
    console.error("Consulting webhook failed", response.status);
    return Response.json({ error: "Failed to submit" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
