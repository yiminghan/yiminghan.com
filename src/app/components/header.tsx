"use client";

import { useTheme } from "@/hooks/useTheme";
import { usePathname } from "next/navigation";
import { use } from "react";

function NavLink({ href, text }: { href: string; text: string }) {
  const path = usePathname();
  const selected = path === href;

  if (selected) {
    return (
      <span className="text-slate-700 underline dark:text-slate-100">
        {"->"}
        {text}
      </span>
    );
  }
  return (
    <a
      className="text-blue-500 hover:text-blue-700 hover:underline"
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {text}
    </a>
  );
}

export function Header() {
  const [_, toggleTheme] = useTheme();
  return (
    <header className="flex w-full flex-col items-start justify-start bg-white px-[2.5rem] py-4 text-slate-800 dark:bg-stone-800 dark:text-stone-200">
      <div className="flex items-end gap-[1.25rem]">
        <h1>YiMing Han </h1>
        <button
          onClick={() => {
            toggleTheme();
          }}
          id="theme-toggle"
          aria-label="Toggle theme"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-[1.25rem] w-[1.25rem]"
          >
            <path
              fillRule="evenodd"
              d="M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm5.657 3.343a1 1 0 011.414 0l1.414 1.414a1 1 0 11-1.414 1.414l-1.414-1.414a1 1 0 010-1.414zM21 11a1 1 0 110 2h-2a1 1 0 110-2h2zm-3.343 5.657a1 1 0 010 1.414l-1.414 1.414a1 1 0 11-1.414-1.414l1.414-1.414a1 1 0 011.414 0zM13 21a1 1 0 11-2 0v-2a1 1 0 112 0v2zm-5.657-3.343a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 111.414-1.414l1.414 1.414a1 1 0 010 1.414zM3 13a1 1 0 110-2h2a1 1 0 110 2H3zm3.343-7.657a1 1 0 010 1.414L4.93 8.171a1 1 0 11-1.414-1.414L4.93 5.343a1 1 0 011.414 0zM12 6a6 6 0 100 12 6 6 0 000-12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <nav className="flex items-center gap-[1ch] font-normal">
        <NavLink href="/" text="About" />
        <NavLink href="/readings" text="Readings" />
        <NavLink href="/collections" text="Collections" />
        <NavLink href="https://github.com/yiminghan" text="Github" />
        <NavLink href="https://x.com/yimingdothan" text="Twitter" />
      </nav>
    </header>
  );
}
