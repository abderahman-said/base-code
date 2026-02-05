import { FlowDiagram } from './FlowDiagram';
import { SECTION_PADDING, HEADING_2 } from '@/styles/constants';
import { cn } from '@/utils/cn';

export function ArchitectureSection() {
    return (
        <section id="architecture" className={SECTION_PADDING}>
            <h2 className={cn(HEADING_2, 'text-black dark:text-white mb-8 text-center')}>
                📊 Data Flow Architecture
            </h2>
            <FlowDiagram />
        </section>
    );
}
