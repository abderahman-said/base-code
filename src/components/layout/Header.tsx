'use client';

import { Button } from "../ui/button";
import { BookOpen, Languages } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

export function Header() {
    const t = useTranslations('Common');
    const locale = useLocale();
    const pathname = usePathname();

    const otherLocale = locale === 'en' ? 'ar' : 'en';

    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/75 backdrop-blur dark:bg-zinc-950/75 dark:border-zinc-800">
            <div className="container max-w-5xl mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <span className="text-black dark:text-white">Base</span>
                    <span className="text-blue-600">Code</span>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        asChild
                    >
                        <Link href={pathname} locale={otherLocale}>
                            <Languages className="w-4 h-4 mr-2 ml-2" />
                            {t(otherLocale)}
                        </Link>
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open('https://github.com/abderahman-said/base-code', '_blank')}
                    >
                        <BookOpen className="w-4 h-4 mr-2 ml-2" />
                        {t('documentation')}
                    </Button>
                </div>
            </div>
        </header>
    );
}
