import Link from "next/link";
import { HeroRoute } from "@/components/HeroRoute";
import { LogoMark } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

const steps = [
  {
    title: "Resolve the artist",
    body: "The agent finds the artist's entity in Qloo's taste graph, so everything after is anchored to real data, not a name match.",
    icon: "M12 3a6 6 0 1 1 0 12a6 6 0 0 1 0-12Zm4.5 10.5L21 18",
  },
  {
    title: "Find where the audience lives",
    body: "Geographic affinity shows which cities over-index on this audience. Those become the ranked tour stops.",
    icon: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Zm0-8.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z",
  },
  {
    title: "Pick openers who share the crowd",
    body: "Similar artists are scored on audience overlap, so the support act sells tickets to the same people.",
    icon: "M8 11a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Zm8 0a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7ZM2 20c0-3.3 2.7-6 6-6s6 2.7 6 6M12 20c0-3.3 1.8-6 4-6s6 2.7 6 6",
  },
  {
    title: "Plan the activation",
    body: "Cross-domain taste covers the food, fashion and film this crowd loves, so the pop-up and merch fit them.",
    icon: "M4 8h16l-1.5 12h-13L4 8Zm4 0V6a4 4 0 0 1 8 0v2",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-8">
      <header className="flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-3 rounded-lg">
          <LogoMark />
          <span className="font-display text-lg font-semibold tracking-tight">Support Act</span>
        </Link>
        <ThemeToggle />
      </header>

      <section className="grid items-center gap-10 pb-20 pt-10 sm:pt-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="rise font-mono text-xs uppercase tracking-[0.2em] text-accent">Tour intelligence · Qloo taste graph</p>
          <h1
            className="rise mt-5 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl"
            style={{ animationDelay: "0.08s" }}
          >
            Route the tour your audience is already asking for.
          </h1>
          <p className="rise mt-6 max-w-xl text-lg text-ink-soft" style={{ animationDelay: "0.16s" }}>
            Enter an artist. An agent reads real audience taste data to rank cities, choose local support acts whose fans genuinely
            overlap, and plan activations around what that crowd eats, wears and watches. Every recommendation shows the Qloo call
            behind it.
          </p>
        </div>
        <div className="rise rounded-3xl border border-rule bg-paper-raised p-4 shadow-card sm:p-6" style={{ animationDelay: "0.2s" }}>
          <HeroRoute />
        </div>
      </section>

      <section aria-labelledby="how" className="border-t border-rule py-20">
        <h2 id="how" className="font-display text-3xl font-semibold tracking-tight">
          How the agent plans a tour
        </h2>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="rise group rounded-2xl border border-rule bg-paper-raised p-6 transition duration-300 hover:-translate-y-1 hover:border-rule-strong hover:shadow-card"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent transition group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path d={s.icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="font-mono text-sm text-ink-faint">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-[0.95rem] text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="flex flex-col gap-2 border-t border-rule py-10 text-sm text-ink-faint sm:flex-row sm:justify-between">
        <p>Built for the Qloo Agentic Hackathon. Audience data from the Qloo Taste AI API.</p>
        <a href="https://github.com/sja-thedude/Support-Act" className="underline-offset-4 hover:text-ink hover:underline">
          Source on GitHub · MIT
        </a>
      </footer>
    </main>
  );
}
