'use client';

import { UserList } from '@/features/users';
import { SECTION_PADDING, HEADING_2, BODY } from '@/styles/constants';
import { cn } from '@/utils/cn';

export function DemoSection() {
    return (
        <section className={SECTION_PADDING}>
            <h2 className={cn(HEADING_2, 'text-black dark:text-white mb-8 text-center')}>
                🎬 Live Demo - Users Feature
            </h2>
            <p className={cn(BODY, 'text-center text-zinc-600 dark:text-zinc-400 mb-8')}>
                مثال حي كامل: Service → Query → Component + React Hook Form + Zod
            </p>
            <div className="rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <UserList />
            </div>
        </section>
    );
}
