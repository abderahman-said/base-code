'use client';

import { SECTION_PADDING, HEADING_2 } from '@/styles/constants';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';

export function StructureSection() {
    const t = useTranslations('HomePage.structure');

    return (
        <section className={SECTION_PADDING}>
            <h2 className={cn(HEADING_2, 'text-black dark:text-white mb-8 text-center')}>
                {t('title')}
            </h2>
            <div className="bg-zinc-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-zinc-100 font-mono">
                    <code>{`src/
├── app/              # Next.js App Router
│   └── [locale]/     # i18n Routes
│       ├── layout.tsx
│       ├── page.tsx
│       └── providers.tsx
│
├── messages/         # Translation Files
│   ├── ar.json       # Arabic (Default)
│   └── en.json       # English
│
├── i18n/             # i18n Config
│   ├── routing.ts
│   └── request.ts
│
├── features/         # Business Features
│   └── users/
│       ├── components/
│       ├── services/
│       ├── types/
│       └── queries.ts
│
├── components/       # Shared UI
│   ├── ui/          # Button, Input, Form
│   ├── layout/      # Header, Footer
│   └── home/        # Home sections
│
├── lib/             # Core Setup (Axios, React Query)
├── utils/           # Utilities (cn)
└── types/           # Global Types`}</code>
                </pre>
            </div>
        </section>
    );
}
