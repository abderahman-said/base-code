'use client';

import { SECTION_PADDING, HEADING_2, GRID_3_COLS } from '@/styles/constants';
import { cn } from '@/utils/cn';

const features = [
    {
        icon: '📁',
        title: 'Feature-Based Structure',
        description: 'كل ميزة في مجلد منفصل مع components, hooks, services, types',
        code: 'src/features/users/',
    },
    {
        icon: '🎨',
        title: 'Shared Components',
        description: 'مكونات UI قابلة لإعادة الاستخدام مع variants و sizes',
        code: 'src/components/ui/',
    },
    {
        icon: '⚡',
        title: 'React Query',
        description: 'إدارة احترافية للبيانات مع caching و auto-refetch',
        code: 'useUsers(), useAuth()',
    },
    {
        icon: '🔒',
        title: 'TypeScript',
        description: 'Type safety كامل في كل الكود',
        code: 'interface User {...}',
    },
    {
        icon: '🎯',
        title: 'Separation of Concerns',
        description: 'فصل واضح بين UI و Logic و Data',
        code: 'Component → Hook → Service',
    },
    {
        icon: '📦',
        title: 'Scalable',
        description: 'سهولة إضافة features جديدة بدون تأثير على الكود الموجود',
        code: 'features/new-feature/',
    },
];

export function FeaturesSection() {
    return (
        <section className={SECTION_PADDING}>
            <h2 className={cn(HEADING_2, 'text-black dark:text-white mb-8 text-center')}>
                ✨ المميزات الرئيسية
            </h2>
            <div className={GRID_3_COLS}>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 hover:shadow-lg transition-shadow"
                    >
                        <div className="text-4xl mb-4">{feature.icon}</div>
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
