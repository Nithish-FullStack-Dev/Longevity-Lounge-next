import "./globals.css";
import "./app.css";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LayoutClient from "@/components/LayoutClient";

export const metadata: Metadata = {
  title: "Best Cancer Hospital in Jabalpur | Omega Hospitals Advanced Care",
  description:
    "Leading cancer & multispecialty hospital in Jabalpur with AI-powered treatment, expert oncologists, 24/7 emergency care.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutClient>
          <Navbar />
          {children}
          <Footer />

          <div className="copyright">
            <p>© Copyright 2025 - Longevity Lounge All Rights Reserved.</p>
          </div>
        </LayoutClient>
      </body>
    </html>
  );
}
