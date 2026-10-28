import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "I booked a one way ticket to Taipei";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    title: "I booked a one way ticket to Taipei",
    eyebrow: "Blog · Dec 25 2025",
  });
}
