import { SEO } from '../components/SEO';
import { Hero } from '../components/home/Hero';
import { QuickHighlights } from '../components/home/QuickHighlights';
import { AboutPreview } from '../components/home/AboutPreview';
import { HeadmasterHighlight } from '../components/home/HeadmasterHighlight';
import { StatisticsSection, FacilitiesSection } from '../components/home/InfoSections';
import { AcademicExcellence } from '../components/home/AcademicExcellence';
import { GalleryPreview, TeacherPreview, CallToAction } from '../components/home/ExtraSections';
import { motion } from 'motion/react';

export function Home() {
  return (
    <>
      <SEO />
      <div className="w-full">
        <Hero />
        <QuickHighlights />
        <AboutPreview />
        <HeadmasterHighlight />
        <StatisticsSection />
        <FacilitiesSection />
        <AcademicExcellence />
        <GalleryPreview />
        <TeacherPreview />
        <CallToAction />
      </div>
    </>
  );
}
