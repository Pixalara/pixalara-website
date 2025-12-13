import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers", // Will become: "Request a Quote | Pixalara"
  description: "Start your project with Pixalara. Tell us about your goals, budget, and vision.",
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}