"use client";

import BehindTheScenes from "@/components/BehindTheScenes";
import BluePrint from "@/components/BluePrint";
import Established from "@/components/Established";
import MostTrusted from "@/components/MostTrusted";
import OurPhilosophy from "@/components/OurPhilosophy";
import Procactive from "@/components/Procactive";
import ReadyToBegin from "@/components/ReadyToBegin";
import VideoGrid from "@/components/VideoGrid";
import VideoSection from "@/components/VideoSection";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const target = searchParams.get("scrollTo");

    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [searchParams]);

  return (
    <>
      <VideoSection />
      <Established />
      <MostTrusted />
      <OurPhilosophy />
      <BluePrint />
      <Procactive />
      <VideoGrid />
      <BehindTheScenes />
      <ReadyToBegin />
    </>
  );
}
