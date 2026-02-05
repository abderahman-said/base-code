import { SECTION_PADDING, HEADING_2 } from '@/styles/constants';
import { cn } from '@/utils/cn';

export function FlowDiagram() {
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <div className="flex-1 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <div className="text-3xl mb-2">🎨</div>
                    <h3 className="font-bold text-black dark:text-white mb-1">Component</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">UI Layer</p>
                </div>
                <div className="text-2xl text-zinc-400">→</div>
                <div className="flex-1 p-6 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <div className="text-3xl mb-2">🪝</div>
                    <h3 className="font-bold text-black dark:text-white mb-1">Hook</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">React Query</p>
                </div>
                <div className="text-2xl text-zinc-400">→</div>
                <div className="flex-1 p-6 bg-green-50 dark:bg-green-950 rounded-lg">
                    <div className="text-3xl mb-2">⚙️</div>
                    <h3 className="font-bold text-black dark:text-white mb-1">Service</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">API Calls</p>
                </div>
                <div className="text-2xl text-zinc-400">→</div>
                <div className="flex-1 p-6 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <div className="text-3xl mb-2">🌐</div>
                    <h3 className="font-bold text-black dark:text-white mb-1">API</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Backend</p>
                </div>
            </div>
        </div>
    );
}
