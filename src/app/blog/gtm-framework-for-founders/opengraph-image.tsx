import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "GTM Framework for Founders With 0 Customers";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    title: "GTM Framework for Founders With 0 Customers",
    eyebrow: "Blog · Feb 24 2026",
  });
}
