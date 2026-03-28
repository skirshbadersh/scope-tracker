"use client";

import { useState } from "react";

type FAQItem = { question: string; answer: string };

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border rounded-lg border border-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-semibold text-ink hover:bg-surface-3 transition-colors"
          >
            {item.question}
            <span className="ml-4 shrink-0 text-ink-light">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 text-sm leading-relaxed text-ink-light">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
