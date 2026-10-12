import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/interactive";
import { Footer } from "@/components/sections";
export const metadata: Metadata = {
  title: {
    default: "Grid & Logic — Design meets engineering",
    template: "%s | Grid & Logic",
  },
  description:
    "Independent digital product studio building 3D configurators, ecommerce and memorable web experiences.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
