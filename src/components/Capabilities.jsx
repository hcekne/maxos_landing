import React from 'react';
import { Cpu, History, FileText, Network } from 'lucide-react';

const capabilities = [
    {
        icon: <Cpu size={24} className="text-accent-blue" />,
        title: 'Human-Agent CPU',
        desc: 'Max OS acts as an operating system where the CPU is a combination of human and agent, working together synchronously.'
    },
    {
        icon: <History size={24} className="text-accent-blue" />,
        title: 'Persistent Memory & Lineage',
        desc: 'Complete memory persistence, lineage, and versioning ensures anything can be recovered at any time.'
    },
    {
        icon: <FileText size={24} className="text-accent-blue" />,
        title: 'Markdown-Native Design',
        desc: 'Everything is stored in text files (.md), making it super easy for both humans and LLMs to interact with and edit.'
    },
    {
        icon: <Network size={24} className="text-accent-blue" />,
        title: 'Universal Tool Interop',
        desc: 'Load directly into tools like Obsidian to visualize your ideas in a tree. AI populates the links for you automatically.'
    }
];

export default function Capabilities() {
    return (
        <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-t border-signal mt-12 bg-surface/30">
            <div className="mb-12">
                <h2 className="text-xs font-mono text-accent-blue uppercase tracking-widest mb-4">01 // Architecture</h2>
                <h3 className="text-3xl font-heading text-white font-medium">System Capabilities</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {capabilities.map((cap, i) => (
                    <div key={i} className="panel-frame p-8 group hover:glow-blue transition-all duration-300">
                        <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                            {cap.icon}
                        </div>
                        <h4 className="text-lg font-heading text-white mb-3 tracking-wide">{cap.title}</h4>
                        <p className="text-primary/70 font-light text-sm leading-relaxed">{cap.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
