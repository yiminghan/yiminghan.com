import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Senior software architect & independent consultant";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    title: "Senior software architect & independent consultant",
  });
}
