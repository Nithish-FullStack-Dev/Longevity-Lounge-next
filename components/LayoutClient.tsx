"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import IntroAnimation from "./IntroAnimation";
import ScrollToTop from "@/helpers/ScrollToTop";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem("played");
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

      <ScrollToTop />

      {children}
    </>
  );
}
