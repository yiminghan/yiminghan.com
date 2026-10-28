import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Engineering Consulting";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ title: "Engineering Consulting" });
}
