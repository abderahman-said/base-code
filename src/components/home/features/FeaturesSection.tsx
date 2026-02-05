'use client';

import { SECTION_PADDING, HEADING_2, GRID_3_COLS } from '@/styles/constants';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';
import { FolderTree, Palette, Zap, ShieldCheck, Target, Box } from 'lucide-react';

export function FeaturesSection() {
    const t = useTranslations('HomePage.features');

    const features = [
        {
            icon: <FolderTree className="w-8 h-8 text-blue-600" />,
            title: t('items.structure.title'),
            description: t('items.structure.description'),
            code: 'src/features/users/',
        },
        {
            icon: <Palette className="w-8 h-8 text-purple-600" />,
            title: t('items.ui.title'),
            description: t('items.ui.description'),
            code: 'src/components/ui/',
        },
        {
            icon: <Zap className="w-8 h-8 text-amber-500" />,
            title: t('items.query.title'),
            description: t('items.query.description'),
            code: 'useUsers(), useAuth()',
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
            title: t('items.ts.title'),
            description: t('items.ts.description'),
            code: 'interface User {...}',
        },
        {
            icon: <Target className="w-8 h-8 text-rose-500" />,
            title: t('items.soc.title'),
            description: t('items.soc.description'),
            code: 'Component → Hook → Service',
        },
        {
            icon: <Box className="w-8 h-8 text-indigo-600" />,
            title: t('items.scalable.title'),
            description: t('items.scalable.description'),
            code: 'features/new-feature/',
        },
    ];

    return (
        <section className={SECTION_PADDING}>
            <h2 className={cn(HEADING_2, 'text-black dark:text-white mb-8 text-center')}>
                {t('title')}
            </h2>
            <div className={GRID_3_COLS}>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 hover:shadow-lg transition-shadow"
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
                            {feature.title}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                            {feature.description}
                        </p>
                        <code className="text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded block">
                            {feature.code}
                        </code>
                    </div>
                ))}
            </div>
        </section>
    );
}
