import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Readings";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ title: "Readings" });
}
