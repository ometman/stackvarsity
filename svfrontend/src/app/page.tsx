"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CoursesSection } from "@/components/home/CoursesSection";
import { TestimonialsSection } from "@/components/home/TestimonialSection";
import { CTASection } from "@/components/home/CTASection";

function HomePage() {
 
  return (
  <>
   <Header />
   <div className="min-h-screen">
    <HeroSection />
    <FeaturesSection />
    <CoursesSection />
    <TestimonialsSection /> 
    <CTASection />
    </div>
    <Footer />
    <style jsx>{`
    .min-h-screen {
      min-height: 100vh;
    }`
    }</style>
  </>
  );
}

export default HomePage;

