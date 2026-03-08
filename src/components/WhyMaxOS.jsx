import React from 'react';
import { Target } from 'lucide-react';

export default function WhyMaxOS() {
    return (
        <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-signal">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-sm border border-accent-blue bg-accent-blue/10">
                        <Target className="text-accent-blue" size={24} />
                    </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-medium tracking-tight mb-6">Why Max OS?</h2>
                <p className="text-primary/80 font-light text-lg leading-relaxed">
                    Max OS was born out of frustration with standard chat interfaces. Managing dozens of stakeholders, hundreds of leads, and multiple concurrent workstreams requires a massive cognitive load that a blank chat box simply cannot support. Teams need structured source files they can control, the ability to instantly provide AI with perfect context, and a way to build repeatable workflows tied directly to long-term goals and daily execution.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 mt-16 px-4">
                <div className="border-l-2 border-accent-violet pl-6">
                    <h4 className="text-xl font-heading mb-2 text-white">Reduce Cognitive Load</h4>
                    <p className="text-primary/70 font-light text-sm">Offload complex tracking of stakeholders, leads, and parallel workstreams directly to the OS.</p>
                </div>
                <div className="border-l-2 border-accent-violet pl-6">
                    <h4 className="text-xl font-heading mb-2 text-white">Goal-Driven Execution</h4>
                    <p className="text-primary/70 font-light text-sm">Combine daily to-dos with long-term goals. The agent actively helps track and push them forward.</p>
                </div>
                <div className="border-l-2 border-accent-violet pl-6">
                    <h4 className="text-xl font-heading mb-2 text-white">Workflow Automation</h4>
                    <p className="text-primary/70 font-light text-sm">Design systems and workflows out of source files so you never have to repeat the same tasks again.</p>
                </div>
            </div>
        </section>
    );
}
