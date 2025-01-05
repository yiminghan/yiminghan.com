import "@/styles/globals.css";

import { type Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { Header } from "./components/header";

export const metadata: Metadata = {
  title: "YiMing's Site",
  description: "Collections by YiMing Han",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body>
        <Header />

        <main className="flex min-h-screen w-full flex-col items-center bg-white text-slate-800 dark:bg-stone-800 dark:text-stone-200">
          <hr className="my-4 w-full"></hr>
          <div className="flex w-full flex-col justify-center gap-12 px-8 py-12">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
