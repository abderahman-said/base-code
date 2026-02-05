'use client';

import { Button } from '@/components/ui/button';
import { Compass, Github } from 'lucide-react';
import { SECTION_PADDING, HEADING_1, BODY_LARGE } from '@/styles/constants';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';

export function HeroSection() {
    const t = useTranslations('HomePage.hero');

    return (
        <section className={cn(SECTION_PADDING, 'text-center')}>
            <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                {t('badge')}
            </div>
            <h1 className={cn(HEADING_1, 'text-black dark:text-white mb-6')}>
                {t('title')}
            </h1>
            <p className={cn(BODY_LARGE, 'text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-8')}>
                {t('description')}
            </p>
            <div className="flex gap-4 justify-center">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={() => window.scrollTo({ top: document.getElementById('architecture')?.offsetTop || 0, behavior: 'smooth' })}
                >
                    <Compass className="w-5 h-5 me-2" />
                    {t('cta_explore')}
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('https://github.com/abderahman-said/base-code', '_blank')}
                >
                    <Github className="w-5 h-5 me-2" />
                    {t('cta_github')}
                </Button>
            </div>
        </section>
    );
}
