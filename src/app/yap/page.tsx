import fs from "fs";
import path from "path";
import Link from "next/link";
import NoteRecorderDialog from "@/components/note-recorder-dialog";
import { Toaster } from "@/components/ui/sonner";

async function getDirectories() {
  const appDir = path.join(process.cwd(), "src/app/yap/(posts)");

  try {
    const items = fs.readdirSync(appDir, { withFileTypes: true });

    const posts = items
      .filter((item) => {
        if (!item.isDirectory()) return false;

        // Check if directory has a page.tsx file
        const pagePath = path.join(appDir, item.name, "page.md");
        return fs.existsSync(pagePath);
      })
      .map((item) => ({
        name: item.name.split("Z-")[1],
        href: `/yap/${item.name}`,
        date: new Date(item.name.split("Z-")[0]! + "Z"),
        displayName: item.name.split("Z-")[1]?.replaceAll("-", " "),
      }))
      .sort((a, b) => b.date.getTime() - a.date.getTime());

    return posts;
  } catch (error) {
    console.error("Error reading directories:", error);
    return [];
  }
}

export default async function DirectoryPage() {
  const directories = await getDirectories();

  return (
    <div className="gap-sm flex flex-col">
      <Toaster />
      <NoteRecorderDialog />
      {directories.map((dir) => (
        <Link key={dir.name} href={dir.href} className="hover:underline">
          {dir.date.toLocaleDateString()} {dir.date.toLocaleTimeString()}{" "}
          {dir.displayName}
        </Link>
      ))}
    </div>
  );
}
