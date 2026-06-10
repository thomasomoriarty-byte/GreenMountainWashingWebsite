import React from 'react';
import SideDockNav from '@/components/gmw/SideDockNav';
import HeroRefresh from '@/components/gmw/HeroRefresh';
import FloatingEstimateBar from '@/components/gmw/FloatingEstimateBar';
import TrustStrip from '@/components/gmw/TrustStrip';
import ServiceSuite from '@/components/gmw/ServiceSuite';
import ResultsGallery from '@/components/gmw/ResultsGallery';
import Testimonials from '@/components/gmw/Testimonials';
import QuoteConcierge from '@/components/gmw/QuoteConcierge';
import RainFooter from '@/components/gmw/RainFooter';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SideDockNav />
      <HeroRefresh />
      <FloatingEstimateBar />
      <TrustStrip />
      <ServiceSuite />
      <ResultsGallery />
      <Testimonials />
      <QuoteConcierge />
      <RainFooter />
    </main>
  );
}