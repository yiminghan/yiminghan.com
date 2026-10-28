import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Blog";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ title: "Blog" });
}
