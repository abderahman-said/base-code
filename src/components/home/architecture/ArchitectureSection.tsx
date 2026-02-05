'use client';

import { FlowDiagram } from './FlowDiagram';
import { SECTION_PADDING, HEADING_2 } from '@/styles/constants';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';

export function ArchitectureSection() {
    const t = useTranslations('HomePage.architecture');

    return (
        <section id="architecture" className={SECTION_PADDING}>
            <h2 className={cn(HEADING_2, 'text-black dark:text-white mb-8 text-center')}>
                {t('title')}
            </h2>
            <FlowDiagram />
        </section>
    );
}
