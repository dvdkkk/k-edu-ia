import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustMetricsSection } from './components/TrustMetricsSection';
import { MarketInsightSection } from './components/MarketInsightSection';
import { KeyPointsSection } from './components/KeyPointsSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { EmploymentShowcaseSection } from './components/EmploymentShowcaseSection';
import { CareerSupportSection } from './components/CareerSupportSection';
import { CurriculumSection } from './components/CurriculumSection';
import { StudentInterviewsSection } from './components/StudentInterviewsSection';
import { FaqSection } from './components/FaqSection';
import { FastInquirySection } from './components/FastInquirySection';
import { FooterSection } from './components/FooterSection';
import { ApplicationModal } from './components/ApplicationModal';
import { StipendCalculatorModal } from './components/StipendCalculatorModal';

import { StickyBottomBar } from './components/StickyBottomBar';
import { CustomCursor } from './components/CustomCursor';
import { AiCourseAssistant } from './components/AiCourseAssistant';

export default function App() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleOpenApplication = () => {
    setIsApplicationOpen(false);
    setIsCalculatorOpen(false);
    const formElement = document.getElementById('fast-inquiry-form');
    const sectionElement = document.getElementById('fast-inquiry');

    if (window.innerWidth < 1024 && formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#0a0b0d] text-gray-100 flex flex-col font-sans selection:bg-[#c5a47e] selection:text-black relative">
      {/* Top Navbar */}
      <Navbar
        onOpenApplication={handleOpenApplication}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden pb-20 sm:pb-24">
        {/* SECTION 1: Hero Header & Main Info Card */}
        <HeroSection
          onOpenApplication={handleOpenApplication}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />

        {/* SECTION 2: Key Trust Metrics */}
        <TrustMetricsSection />

        {/* SECTION 3: Market Problem & Insight */}
        <MarketInsightSection />

        {/* SECTION 4: Key Points (4 Core Advantages) */}
        <KeyPointsSection />

        {/* SECTION 5: Target Audience */}
        <TargetAudienceSection />

        {/* SECTION 6: Alumni Employment Showcase */}
        <EmploymentShowcaseSection />

        {/* SECTION 7: Career Support System */}
        <CareerSupportSection />

        {/* SECTION 8: Curriculum Roadmap */}
        <CurriculumSection />

        {/* SECTION 9: Student Interviews */}
        <StudentInterviewsSection />

        {/* SECTION 10: FAQ */}
        <FaqSection
          onOpenApplication={handleOpenApplication}
        />

        {/* SECTION 11: Fast Inquiry / Counseling */}
        <FastInquirySection
          onOpenApplication={handleOpenApplication}
        />
      </main>

      {/* SECTION 11: Footer Information */}
      <FooterSection />

      {/* Floating Bottom Bar for Conversion */}
      <StickyBottomBar
        onOpenApplication={handleOpenApplication}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Modals */}
      <ApplicationModal
        isOpen={isApplicationOpen}
        onClose={() => setIsApplicationOpen(false)}
      />

      <StipendCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onApply={handleOpenApplication}
      />

      {/* Floating AI Course Assistant chatbot */}
      <AiCourseAssistant onOpenApplication={handleOpenApplication} />

      {/* Red Cursor Pointer for PC desktop users */}
      <CustomCursor />
    </div>
  );
}
