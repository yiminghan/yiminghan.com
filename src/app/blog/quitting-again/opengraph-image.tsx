import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Quitting, Again";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    title: "Quitting, Again",
    eyebrow: "Blog · Aug 30 2025",
  });
}
