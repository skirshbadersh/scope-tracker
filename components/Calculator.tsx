"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

type Results = {
  annualLoss: number;
  monthlyLoss: number;
  perClientLoss: number;
  freeHoursPerWeek: number;
  hourlyRate: number;
  unbilledPct: number;
};

function formatCurrency(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function Calculator() {
  const [hourlyRate, setHourlyRate] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [unbilledPct, setUnbilledPct] = useState(20);
  const [numClients, setNumClients] = useState("");

  const [showEmailGate, setShowEmailGate] = useState(false);
  const [email, setEmail] = useState("");
  const [results, setResults] = useState<Results | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setShowEmailGate(true);
  }

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    // Capture email
    const leads = JSON.parse(localStorage.getItem("waitlist_emails") || "[]");
    leads.push({
      email,
      tag: "calculator-lead",
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("waitlist_emails", JSON.stringify(leads));
    console.log("[calculator-lead] Email captured:", email);

    // Calculate results
    const rate = parseFloat(hourlyRate) || 75;
    const hours = parseFloat(hoursPerWeek) || 40;
    const pct = unbilledPct;
    const clients = parseInt(numClients) || 5;

    const unbilledHoursPerWeek = hours * (pct / 100);
    const weeklyLoss = unbilledHoursPerWeek * rate;
    const monthlyLoss = weeklyLoss * 4.33;
    const annualLoss = weeklyLoss * 52;
    const perClientLoss = annualLoss / clients;

    setResults({
      annualLoss,
      monthlyLoss,
      perClientLoss,
      freeHoursPerWeek: unbilledHoursPerWeek,
      hourlyRate: rate,
      unbilledPct: pct,
    });
    setShowEmailGate(false);
  }

  // Results view
  if (results) {
    return (
      <div>
        <div className="rounded-lg border border-danger/20 bg-danger/5 p-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-danger/80">
            You&apos;re Losing
          </p>
          <p className="mt-2 text-5xl font-extrabold text-danger sm:text-6xl">
            {formatCurrency(results.annualLoss)}
          </p>
          <p className="mt-1 text-lg font-medium text-danger/80">Per Year to Scope Creep</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border p-5 text-center">
            <p className="text-2xl font-bold text-danger">
              {formatCurrency(results.monthlyLoss)}
            </p>
            <p className="mt-1 text-sm text-ink-light">Lost per month</p>
          </div>
          <div className="rounded-lg border border-border p-5 text-center">
            <p className="text-2xl font-bold text-danger">
              {formatCurrency(results.perClientLoss)}
            </p>
            <p className="mt-1 text-sm text-ink-light">Lost per client/year</p>
          </div>
          <div className="rounded-lg border border-border p-5 text-center">
            <p className="text-2xl font-bold text-danger">
              {results.freeHoursPerWeek.toFixed(1)} hrs
            </p>
            <p className="mt-1 text-sm text-ink-light">Free work per week</p>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-surface-2 p-6 text-sm leading-relaxed text-ink-light">
          At {formatCurrency(results.hourlyRate)}/hr with {results.unbilledPct}% unbilled
          time, you&apos;re working{" "}
          <span className="font-semibold text-ink">
            {results.freeHoursPerWeek.toFixed(1)} hours per week
          </span>{" "}
          for free. That&apos;s like giving away{" "}
          <span className="font-semibold text-ink">
            {formatCurrency(results.monthlyLoss)}
          </span>{" "}
          every single month.
        </div>

        {/* CTA to Scope Tracker */}
        <div className="mt-12 rounded-lg border border-accent/20 bg-accent/5 p-8 text-center">
          <h2 className="text-xl font-bold">Stop Losing Money to Unbilled Work</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-light">
            We&apos;re building a tool that tracks every revision, enforces scope boundaries
            with clients, and generates change orders with one click. Founding members get
            $15/mo locked in forever.
          </p>
          <Link href="/scope-tracker">
            <Button className="mt-6">Join the Waitlist</Button>
          </Link>
        </div>

        <button
          onClick={() => {
            setResults(null);
            setEmail("");
          }}
          className="mx-auto mt-8 block text-sm text-ink-light underline hover:text-ink"
        >
          Calculate again
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <form onSubmit={handleCalculate} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-ink">
            Hourly Rate ($)
          </label>
          <input
            type="number"
            min="1"
            step="1"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            placeholder="75"
            required
            className="mt-1.5 w-full rounded-md border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ink">
            Hours Worked Per Week
          </label>
          <input
            type="number"
            min="1"
            max="168"
            step="1"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(e.target.value)}
            placeholder="40"
            required
            className="mt-1.5 w-full rounded-md border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-ink">
            Estimated % of Time on Unbilled Work:{" "}
            <span className="font-bold text-accent">{unbilledPct}%</span>
          </label>
          <input
            type="range"
            min="5"
            max="50"
            step="1"
            value={unbilledPct}
            onChange={(e) => setUnbilledPct(parseInt(e.target.value))}
            className="mt-3 w-full accent-accent"
          />
          <div className="mt-1 flex justify-between text-xs text-ink-light">
            <span>5%</span>
            <span>50%</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-ink">
            Number of Active Clients
          </label>
          <input
            type="number"
            min="1"
            step="1"
            value={numClients}
            onChange={(e) => setNumClients(e.target.value)}
            placeholder="5"
            required
            className="mt-1.5 w-full rounded-md border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>

        <Button type="submit" fullWidth>
          Calculate My Losses
        </Button>
      </form>

      {/* Email gate modal */}
      {showEmailGate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
            <h3 className="text-lg font-bold">See Your Results</h3>
            <p className="mt-2 text-sm text-ink-light">
              We&apos;ll send your personalized scope creep report — plus tips to
              stop the bleeding.
            </p>
            <form onSubmit={handleEmailSubmit} className="mt-6 space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                autoFocus
                className="w-full rounded-md border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
              <Button type="submit" fullWidth>
                Show My Results
              </Button>
            </form>
            <button
              onClick={() => setShowEmailGate(false)}
              className="mx-auto mt-4 block text-sm text-ink-light underline hover:text-ink"
            >
              Go back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
