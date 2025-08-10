import { z } from "zod";

const newYapRequest = z.object({
  author: z.string().optional().nullish(),
  title: z.string().optional().nullish(),
  content: z.string(),
});

export type NewYapRequest = z.infer<typeof newYapRequest>;

function formaMdx(r: NewYapRequest) {
  return (
    (r.title
      ? `# ${r.title}

`
      : "") +
    (r.author ? `**By ${r.author}**\n\n` : "") +
    `**${new Date().toDateString()}**\n\n` +
    "\n\n" +
    r.content
  );
}

export async function PUT(req: Request) {
  const result = newYapRequest.safeParse(await req.json());

  if (!result.success) {
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const validatedData = result.data;
  const today = new Date();
  const postName =
    `${today.toISOString()}-${validatedData.title ?? "Untitled-Post"}`.replace(
      /\s+/g,
      "-",
    );

  const response = await fetch(
    `https://api.github.com/repos/yiminghan/yiminghan.com/contents/src/app/yap/(posts)/${postName}/page.md`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `New file from API - ${postName}`,
        content: Buffer.from(formaMdx(validatedData)).toString("base64"),
        branch: "main",
      }),
    },
  );

  if (!response.ok) {
    const error = (await response.json()) as Error;
    throw new Error(error.message || "Failed to create file");
  }

  return new Response("OK", { status: 200 });
}
