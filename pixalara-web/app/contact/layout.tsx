import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's Talk", // Will become: "Let's Talk | Pixalara"
  description: "Contact Pixalara. We help ambitious brands build high-end digital products. Reach out for Web Design, App Dev, and Branding.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}