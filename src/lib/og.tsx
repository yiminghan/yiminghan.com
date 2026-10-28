import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const fontDir = join(process.cwd(), "src/assets/fonts");

export async function renderOgImage({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow?: string;
}) {
  const [regular, bold] = await Promise.all([
    readFile(join(fontDir, "SpaceMono-Regular.ttf")),
    readFile(join(fontDir, "SpaceMono-Bold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#ffffff",
          backgroundImage:
            "linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          color: "#1e293b",
          fontFamily: "Space Mono",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#64748b" }}>
          {eyebrow ?? "YiMing Han"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 40 ? 64 : 80,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
          }}
        >
          <span style={{ color: "#3b82f6" }}>yiminghan.com</span>
          <div
            style={{
              display: "flex",
              width: 120,
              height: 8,
              backgroundColor: "#1e293b",
            }}
          />
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Space Mono", data: regular, weight: 400, style: "normal" },
        { name: "Space Mono", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
