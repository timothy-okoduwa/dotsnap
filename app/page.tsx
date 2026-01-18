"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import InstallMethods from "@/components/home/InstallMethods";
import Features from "@/components/home/Features";
import Security from "@/components/home/Security";

export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/tool");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-950 via-black to-black pointer-events-none bg-grid" />

      <div className="relative z-10">
        <Header />
        <Hero onGetStarted={handleGetStarted} />
        <InstallMethods onGetStarted={handleGetStarted} />
        <Features />
        <Security />
        <Footer />
      </div>
    </div>
  );
}
