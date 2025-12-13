import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services", // Shows as: "Our Services | Pixalara"
  description: "End-to-end digital solutions: Web Design, Mobile App Development, Branding, Marketing, and Cloud/DevOps. We build scalable products for global brands.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}