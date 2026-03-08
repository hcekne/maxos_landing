import React from 'react';
import { Terminal, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenWaitlist }) {
    const handleGithubClick = () => {
        // Analytics tracking hook as requested
        console.log("Track event: site_id=max-os, action=click_github");
        window.location.href = 'https://github.com/hcekne/max_os';
    };

    return (
        <section className="relative pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-signal to-transparent"></div>

            <div className="inline-flex items-center gap-4 px-8 py-3 mb-10 rounded-full border border-signal bg-surface text-5xl font-heading font-bold text-white shadow-sm">
                <span className="w-4 h-4 rounded-full bg-accent-blue animate-pulse"></span>
                Max OS
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-md">
                The operating system for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">
                    human-agentic work
                </span>
            </h1>

            <p className="text-lg sm:text-xl text-primary/80 max-w-2xl mb-12 font-light">
                A fully text based framework designed for planning, memory, execution, and control in complex environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                    onClick={handleGithubClick}
                    className="group relative px-6 py-3 bg-white text-background font-mono font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                >
                    <Terminal size={18} />
                    View on GitHub
                    <ChevronRight size={18} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>

                <button
                    onClick={onOpenWaitlist}
                    className="panel-frame px-6 py-3 text-primary font-mono font-medium hover:text-white transition-colors hover:glow-blue"
                >
                    Join Managed Waitlist
                </button>
            </div>
        </section>
    );
}
