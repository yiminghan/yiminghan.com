import { InterestForm } from "./interest-form";

const textClass =
  "w-full text-sm sm:w-11/12 sm:text-base md:w-10/12 md:text-lg lg:w-9/12 lg:text-xl xl:w-8/12";

// TODO: replace with real case studies
const caseStudies = [
  {
    client: "Seed-stage B2B SaaS",
    title: "Shipping an MVP in 6 weeks",
    problem: "Non-technical founders with a validated idea and no product.",
    work: "Scoped the MVP, built the web app and billing, set up analytics.",
    result: "Launched to 40 design partners, first paying customer in week 8.",
  },
  {
    client: "Series A sales tech startup",
    title: "Voice AI agent for outbound calls",
    problem: "SDR team spending most of their day on unqualified dials.",
    work: "Designed and built a voice AI qualification flow integrated with the CRM.",
    result: "3x more qualified meetings per SDR per week.",
  },
  {
    client: "Consumer mobile app",
    title: "Growth & onboarding overhaul",
    problem: "Strong downloads, weak day-7 retention.",
    work: "Instrumented the funnel, rebuilt onboarding, ran paywall experiments.",
    result: "Day-7 retention up 22%, trial-to-paid up 15%.",
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
          <li>Custom RAG &amp; agentic applications</li>
          <li>Enterprise tool configuration &amp; integration</li>
          <li>Secure internal AI environments</li>
          <li>Production deployment, evaluation &amp; monitoring</li>
        </ul>
      </div>

      <div className={textClass}>
        Case Studies
        {caseStudies.map((c) => (
          <div key={c.title} className="mt-4">
            <p className="font-bold">{c.title}</p>
            <p className="text-slate-500 dark:text-stone-400">{c.client}</p>
            <p className="mt-1">Problem - {c.problem}</p>
            <p>Work - {c.work}</p>
            <p>Result - {c.result}</p>
          </div>
        ))}
      </div>

      <div className={textClass}>
        <p className="mb-3">Work With Me</p>
        <InterestForm />
      </div>
    </>
  );
}
