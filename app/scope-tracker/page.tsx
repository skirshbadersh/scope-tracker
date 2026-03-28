import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import WaitlistForm from "@/components/WaitlistForm";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Scope Tracker — Stop Doing Free Work for Your Clients",
  description:
    "Track every revision. Enforce your scope. Bill for every change request. The scope creep tracker built for freelancers.",
};

const faqItems = [
  {
    question: "When does it launch?",
    answer:
      "We're building right now. Founding members get early access within weeks.",
  },
  {
    question: "What if I don't like it?",
    answer: "Cancel anytime. No contracts, no commitments.",
  },
  {
    question: "Does my client need an account?",
    answer:
      "No. Clients see a shareable link — no login required on their end.",
  },
  {
    question:
      "What's the difference between founding member and regular pricing?",
    answer:
      "Founding members pay $15/mo forever, even when the price goes to $29/mo. It's our way of rewarding early supporters who help us build the right tool.",
  },
  {
    question: "Do I need to use the AI features?",
    answer:
      'No. The AI features (scope creep detection, auto-drafted change requests) are optional add-ons. The core tool works perfectly without them.',
  },
];

const steps = [
  {
    title: "Define your scope",
    desc: "Set project deliverables and included revision count. Your client acknowledges the baseline.",
  },
  {
    title: "Track revisions automatically",
    desc: 'Every change is logged. Your client sees "3 of 5 included revisions used" in real time.',
  },
  {
    title: "Generate change orders in one click",
    desc: "When scope expands, the system drafts a professional change request with cost estimate.",
  },
  {
    title: "Get paid for every extra",
    desc: "Clients approve changes before work begins. No more awkward conversations.",
  },
];

const features = [
  "Project scope baselines with client acknowledgment",
  "Revision counter visible to you AND your client",
  "Change request workflow (submit → estimate → approve → work)",
  "Client-facing portal via shareable link (no login needed for clients)",
  'AI-powered scope creep detection (flags "can you also..." language in client messages)',
  "Financial impact dashboard (see exactly how much you've saved from billed change orders)",
  "Works for designers, developers, copywriters, photographers, and agencies",
];

export default function ScopeTrackerPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-[720px] px-6 py-20 text-center sm:py-28">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
          Stop Doing Free Work for Your Clients
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-light sm:text-lg">
          Track every revision. Enforce your scope. Bill for every change
          request. The scope creep tracker built for freelancers who are tired of
          working for free.
        </p>
        <a href="#waitlist">
          <Button className="mt-8 text-base px-8 py-4">
            Join the Waitlist — Founding Members Get $15/mo Forever
          </Button>
        </a>
        <p className="mt-3 text-xs text-ink-light">
          Only 30 founding member spots available
        </p>
      </section>

      {/* The Problem */}
      <section className="bg-surface-2">
        <div className="mx-auto max-w-[720px] px-6 py-16 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            The Scope Creep Problem
          </h2>
          <div className="mt-10 space-y-8">
            {[
              {
                stat: "57% of agencies lose $1,000–$5,000 every month to scope creep",
                detail:
                  "That's revenue walking out the door because extra work never gets billed.",
              },
              {
                stat: "Only 1% of freelancers successfully bill for all out-of-scope work",
                detail:
                  "The awkward conversation kills it every time — so most freelancers just eat the cost.",
              },
              {
                stat: "The average web project exceeds its original scope by 25–50%",
                detail:
                  "\"Can you also...\" is the most expensive phrase in freelancing.",
              },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-lg font-semibold">{item.stat}</p>
                <p className="mt-1 text-sm text-ink-light">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-[720px] px-6 py-16 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          How It Works
        </h2>
        <div className="mt-10 space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {i + 1}
              </div>
              <div>
                <p className="font-semibold">{step.title}</p>
                <p className="mt-1 text-sm text-ink-light">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Spreadsheets and Emails Fail */}
      <section className="bg-surface-2">
        <div className="mx-auto max-w-[720px] px-6 py-16 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Why Spreadsheets and Emails Fail
          </h2>
          <div className="mt-10 space-y-8">
            <div>
              <p className="text-lg font-semibold">
                Your client has no idea they&apos;re on revision 7.
              </p>
              <p className="mt-1 text-sm text-ink-light">
                You track it in your head or a spreadsheet. They track nothing. The tool
                shows both of you the same revision count in real time — no more &quot;I
                didn&apos;t realize I&apos;d asked for that many changes.&quot;
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">
                Nothing stops work from starting before it&apos;s approved.
              </p>
              <p className="mt-1 text-sm text-ink-light">
                Right now, a client says &quot;can you also...&quot; and you just do it.
                The tool requires them to approve the cost of out-of-scope work before you
                touch it. No approval, no work.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">
                You can&apos;t prove what was agreed to 3 months ago.
              </p>
              <p className="mt-1 text-sm text-ink-light">
                Email threads get buried. The tool keeps a timestamped record of your
                original scope, every revision, and every change request — the full paper
                trail if a client disputes what they owe.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">
                You have no idea how much free work you actually did last year.
              </p>
              <p className="mt-1 text-sm text-ink-light">
                The dashboard tracks every billed change order. After 3 months, you see
                the exact dollar amount the tool saved you — most freelancers are shocked
                by the number.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section>
        <div className="mx-auto max-w-[720px] px-6 py-16 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            What You Get
          </h2>
          <ul className="mt-10 space-y-4">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 text-success font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-[720px] px-6 py-16 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Founding Member Pricing — Limited to 30 Spots
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border-2 border-accent p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Solo
            </p>
            <p className="mt-3 text-4xl font-extrabold">
              $15<span className="text-lg font-medium text-ink-light">/mo</span>
            </p>
            <p className="mt-1 text-sm text-ink-light line-through">$29/mo</p>
            <p className="mt-1 text-xs font-medium text-success">
              Locked in forever
            </p>
          </div>
          <div className="rounded-lg border border-border p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-light">
              Team (up to 3)
            </p>
            <p className="mt-3 text-4xl font-extrabold">
              $25<span className="text-lg font-medium text-ink-light">/mo</span>
            </p>
            <p className="mt-1 text-sm text-ink-light line-through">$49/mo</p>
            <p className="mt-1 text-xs font-medium text-success">
              Locked in forever
            </p>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-ink-light">
          Your rate is locked in for life. No price increases, ever.
        </p>
        <div className="mt-6 text-center">
          <a href="#waitlist">
            <Button>Claim Your Founding Member Spot</Button>
          </a>
        </div>
      </section>

      {/* Video Placeholder */}
      <section className="bg-surface-2">
        <div className="mx-auto max-w-[720px] px-6 py-16 sm:py-20">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            See It In Action
          </h2>
          <div className="mx-auto mt-8 flex aspect-video max-w-[640px] items-center justify-center rounded-lg border border-border bg-surface-3">
            <p className="text-sm text-ink-light">Demo video coming soon</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[720px] px-6 py-16 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10">
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="bg-surface-2">
        <div className="mx-auto max-w-[720px] px-6 py-16 text-center sm:py-20">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to Stop Working for Free?
          </h2>
          <div className="mx-auto mt-8 max-w-md">
            <WaitlistForm />
          </div>
          <p className="mt-4 text-xs text-ink-light">
            No credit card required. We&apos;ll email you when it&apos;s ready.
          </p>
        </div>
      </section>

      {/* Extra footer links for this page */}
      <div className="mx-auto max-w-[720px] px-6 py-8 text-center text-sm text-ink-light">
        <Link href="/calculator" className="underline hover:text-ink">
          Find out how much scope creep is costing you →
        </Link>
      </div>
    </div>
  );
}
