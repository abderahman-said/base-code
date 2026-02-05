'use client';

import { Button } from '@/components/ui/button';
import { Compass, Github } from 'lucide-react';
import { SECTION_PADDING, HEADING_1, BODY_LARGE } from '@/styles/constants';
import { cn } from '@/utils/cn';

export function HeroSection() {
    return (
        <section className={cn(SECTION_PADDING, 'text-center')}>
            <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Senior-Level Architecture
            </div>
            <h1 className={cn(HEADING_1, 'text-black dark:text-white mb-6')}>
                Base Code Project
            </h1>
            <p className={cn(BODY_LARGE, 'text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-8')}>
                مشروع Next.js احترافي يوضح الـ Feature-Based Architecture<br />
                مع React Query و TypeScript
            </p>
            <div className="flex gap-4 justify-center">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={() => window.scrollTo({ top: document.getElementById('architecture')?.offsetTop || 0, behavior: 'smooth' })}
                >
                    <Compass className="w-5 h-5 mr-2" />
                    استكشف الهيكل
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('https://github.com/abderahman-said/base-code', '_blank')}
                >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                </Button>
            </div>
        </section>
    );
}
