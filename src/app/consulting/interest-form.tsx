"use client";

import { useState } from "react";
import { type InterestRequest } from "@/app/api/consulting/route";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full border border-slate-300 bg-white px-2 py-1 text-slate-800 outline-none focus:border-blue-500 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-200 dark:[color-scheme:dark]";

export function InterestForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as InterestRequest;

    setStatus("submitting");
    try {
      const res = await fetch("/api/consulting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p>Thanks! I&apos;ll get back to you within a couple of days.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex max-w-xl flex-col gap-3">
      <label className="flex flex-col gap-1">
        Name *
        <input name="name" required className={inputClass} />
      </label>
      <label className="flex flex-col gap-1">
        Email *
        <input name="email" type="email" required className={inputClass} />
      </label>
      <label className="flex flex-col gap-1">
        Company
        <input name="company" className={inputClass} />
      </label>
      <label className="flex flex-col gap-1">
        Budget
        <select name="budget" defaultValue="" className={inputClass}>
          <option value="">Not sure yet</option>
          <option value="< $5k">&lt; $5k</option>
          <option value="$5k - $15k">$5k - $15k</option>
          <option value="$15k - $50k">$15k - $50k</option>
          <option value="$50k+">$50k+</option>
        </select>
      </label>
      <label className="flex flex-col gap-1">
        What are you working on? *
        <textarea name="message" required rows={5} className={inputClass} />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start text-blue-500 hover:text-blue-700 hover:underline disabled:opacity-50"
      >
        {status === "submitting" ? "[sending...]" : "[send]"}
      </button>
      {status === "error" && (
        <p className="text-red-500">
          Something went wrong. Email me at{" "}
          <a className="underline" href="mailto:hanyiming1995@gmail.com">
            hanyiming1995@gmail.com
          </a>{" "}
          instead.
        </p>
      )}
    </form>
  );
}
