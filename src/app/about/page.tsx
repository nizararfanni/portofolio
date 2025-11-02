"use client";
import React from "react";
import AboutHero from "@/components/sections/AboutHero";
import AboutInfo from "@/components/sections/AboutInfo";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import LangauageLearned from "@/components/sections/LanguageLearned";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />
      <AboutInfo />
      <LangauageLearned />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
};

export default AboutPage;
