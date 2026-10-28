import { InterestForm } from "./interest-form";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Engineering Consulting",
  description:
    "We build and ship production AI. Hands-on engineering training and AI applications for teams.",
  path: "/consulting",
});


const textClass =
  "w-full text-sm sm:w-11/12 sm:text-base md:w-10/12 md:text-lg lg:w-9/12 lg:text-xl xl:w-8/12";

const caseStudies = [
  {
    client: "Private Equity Firm",
    title: "Hands-on Engineering AI Training",

    work: "4-week, hands-on program for 4 cohorts, built around their own stack",
    result:
      "2x productivity on PRs merged. 12x ROI against the training cost",
  },
  {
    client: "MedTech Startup",
    title: "Intake AI Application",
    work: "Whatsapp intake app that reads referral packets, extracts structured patient and clinical fields, flags gaps, and writes clean records into their existing system.",
    result:
      "Intake went from a multi-day backlog to same-day processing.",
  },
];

export default function ConsultingPage() {
  return (
    <>
      <div className={textClass}>
        <p>Engineering Consulting</p>
        <p className="mt-2">
          We build and ship production AI. Bring a roadmap or a stuck problem
          — we&apos;ll start there.
        </p>
        <p className="mt-4">What we can help with</p>
        <ul className="mt-2 list-disc pl-5">
          <li>Custom RAG &amp; Agentic Applications</li>
          <li>Internal Enterprise-grade AI Tooling</li>
          <li>Traditional Workflow Automation</li>
          <li>Executive Workshops & Hands-on Training</li>
        </ul>
      </div>

      <div className={textClass}>
        Case Studies
        {caseStudies.map((c) => (
          <div key={c.title} className="mt-4">
            <p className="font-bold">{c.title}</p>
            <p className="text-slate-500 dark:text-stone-400">{c.client}</p>
            <p>Work - {c.work}</p>
            <p>Result - {c.result}</p>
          </div>
        ))}
      </div>

      <div className={textClass}>
        <p className="mb-3">Work With Us</p>
        <InterestForm />
      </div>
    </>
  );
}
