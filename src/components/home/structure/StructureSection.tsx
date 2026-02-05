import { SECTION_PADDING, HEADING_2 } from '@/styles/constants';
import { cn } from '@/utils/cn';

export function StructureSection() {
    return (
        <section className={SECTION_PADDING}>
            <h2 className={cn(HEADING_2, 'text-black dark:text-white mb-8 text-center')}>
                📂 هيكل المشروع
            </h2>
            <div className="bg-zinc-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-zinc-100 font-mono">
                    <code>{`src/
├── app/              # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
│
├── features/         # Business Features
│   ├── auth/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   ├── queries.ts
│   │   ├── keys.ts
│   │   └── index.ts
│   └── users/
│
├── components/       # Shared UI
│   ├── ui/          # Button, Input, Form
│   ├── layout/      # Header, Footer
│   └── home/        # Home sections
│
├── lib/             # Core Setup
│   ├── axios.ts
│   ├── react-query.ts
│   └── api-error.ts
│
├── config/          # Configuration
│   ├── routes.ts
│   └── env.ts
│
└── styles/          # Design System
    └── constants.ts`}</code>
                </pre>
            </div>
        </section>
    );
}
