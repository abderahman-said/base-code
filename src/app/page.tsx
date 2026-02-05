'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/hero";
import { FeaturesSection } from "@/components/home/features";
import { ArchitectureSection } from "@/components/home/architecture";

// Performance optimization: Lazy load heavy sections
const CodeExampleSection = dynamic(
  () => import('@/components/home/code-example').then(mod => ({ default: mod.CodeExampleSection })),
  { ssr: false }
);

const StructureSection = dynamic(
  () => import('@/components/home/structure').then(mod => ({ default: mod.StructureSection })),
  { ssr: false }
);

const DemoSection = dynamic(
  () => import('@/components/home/demo').then(mod => ({ default: mod.DemoSection })),
  { ssr: true }
);

/**
 * Home Page
 * Pure composition - no logic
 * Heavy sections are lazy loaded for better performance
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ArchitectureSection />

        <Suspense fallback={<div className="py-24 text-center">Loading...</div>}>
          <CodeExampleSection />
        </Suspense>

        <Suspense fallback={<div className="py-24 text-center">Loading...</div>}>
          <StructureSection />
        </Suspense>

        <Suspense fallback={<div className="py-24 text-center">Loading...</div>}>
          <DemoSection />
        </Suspense>
      </main>
    </div>
  );
}
