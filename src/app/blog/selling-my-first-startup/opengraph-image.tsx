import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Selling My First Startup";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    title: "Selling My First Startup",
    eyebrow: "Blog · Feb 6 2025",
  });
}
