import type { Metadata } from "next";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Scope Creep Cost Calculator — How Much Are You Losing?",
  description:
    "Most freelancers lose $5,000–$15,000 per year to unbilled work. Find your number in 30 seconds.",
};

export default function CalculatorPage() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          How Much Is Scope Creep Actually Costing You?
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-light">
          Most freelancers lose $5,000–$15,000 per year to unbilled work. Find
          your number in 30 seconds.
        </p>
      </div>

      <div className="mt-12">
        <Calculator />
      </div>
    </div>
  );
}
