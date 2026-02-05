'use client';

import { UserList } from '@/features/users';
import {   HEADING_2, BODY } from '@/styles/constants';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';

export function DemoSection() {
    const t = useTranslations('HomePage.demo');

    return (
        <section className="pb-20">
            <h2 className={cn(HEADING_2, 'text-black dark:text-white mb-8 text-center')}>
                {t('title')}
            </h2>
            <p className={cn(BODY, 'text-center text-zinc-600 dark:text-zinc-400 mb-8')}>
                {t('description')}
            </p>
            <div className="rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <UserList />
            </div>
        </section>
    );
}
