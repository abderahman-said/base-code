'use client';

import { useTranslations } from 'next-intl';
import { Layout, Zap, Layers, Globe } from 'lucide-react';

export function FlowDiagram() {
    const t = useTranslations('HomePage.architecture');

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <div className="flex-1 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <div className="mb-2 flex justify-center text-blue-600 dark:text-blue-400">
                        <Layout className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-black dark:text-white mb-1">{t('component.title')}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('component.description')}</p>
                </div>
                <div className="text-2xl text-zinc-400">→</div>
                <div className="flex-1 p-6 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <div className="mb-2 flex justify-center text-purple-600 dark:text-purple-400">
                        <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-black dark:text-white mb-1">{t('hook.title')}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('hook.description')}</p>
                </div>
                <div className="text-2xl text-zinc-400">→</div>
                <div className="flex-1 p-6 bg-green-50 dark:bg-green-950 rounded-lg">
                    <div className="mb-2 flex justify-center text-green-600 dark:text-green-400">
                        <Layers className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-black dark:text-white mb-1">{t('service.title')}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('service.description')}</p>
                </div>
                <div className="text-2xl text-zinc-400">→</div>
                <div className="flex-1 p-6 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <div className="mb-2 flex justify-center text-orange-600 dark:text-orange-400">
                        <Globe className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-black dark:text-white mb-1">{t('api.title')}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('api.description')}</p>
                </div>
            </div>
        </div>
    );
}
