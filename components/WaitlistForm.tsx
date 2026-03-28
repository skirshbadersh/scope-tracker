"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function WaitlistForm({ tag = "scope-tracker-waitlist" }: { tag?: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    // Store locally for now — Kit integration can come later
    const leads = JSON.parse(localStorage.getItem("waitlist_emails") || "[]");
    leads.push({ email, tag, timestamp: new Date().toISOString() });
    localStorage.setItem("waitlist_emails", JSON.stringify(leads));
    console.log(`[${tag}] Email captured:`, email);

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-success/30 bg-success/5 p-6 text-center">
        <p className="font-semibold text-success">You&apos;re on the list!</p>
        <p className="mt-1 text-sm text-ink-light">
          We&apos;ll email you when it&apos;s ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 sm:flex-row flex-col">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="flex-1 rounded-md border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
      <Button type="submit">Join the Waitlist</Button>
    </form>
  );
}
