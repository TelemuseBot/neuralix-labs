import Hero from '@/components/sections/Hero';
import PositioningStrip from '@/components/sections/PositioningStrip';
import WhatWeBuild from '@/components/sections/WhatWeBuild';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import FeaturedWork from '@/components/sections/FeaturedWork';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PositioningStrip />
      <WhatWeBuild />
      <FeaturedProducts />
      <FeaturedWork />
      <Testimonials />
      <CTASection />
    </>
  );
}
