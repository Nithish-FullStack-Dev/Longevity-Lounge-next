import type { Metadata } from "next";
import "./globals.css";
import "./app.css";
import "aos/dist/aos.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import AOSProvider from "@/components/providers/AOSProvider";

export const metadata: Metadata = {
  title: "Best Cancer Hospital in Jabalpur | Omega Hospitals Advanced Care",
  description:
    "Leading cancer & multispecialty hospital in Jabalpur with AI-powered treatment, expert oncologists, 24/7 emergency care. Book appointment: 0261-226-5552",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AOSProvider />
        <Toaster />

        <ReactQueryProvider>
          <Navbar />
          {children}
          <Footer />

          <div className="copyright">
            <p>© Copyright 2025 - Longevity Lounge All Rights Reserved.</p>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
