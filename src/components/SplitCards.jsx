import React from 'react';
import { Github, Cloud } from 'lucide-react';

export default function SplitCards({ onOpenWaitlist }) {
    const handleGithubClick = () => {
        console.log("Track event: site_id=max-os, action=click_github_split_card");
        window.location.href = 'https://github.com/hcekne/max_os';
    };

    return (
        <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto border-t border-signal">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-heading font-medium tracking-tight mb-4">Choose how you want to use it</h2>
                <p className="text-primary/70 font-light text-base">Run it yourself locally for free, or use our simple app to manage it for you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Card A: Open Source */}
                <div className="panel-frame p-8 flex flex-col justify-between group hover:border-accent-blue/30 transition-colors">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Github className="text-white group-hover:text-accent-blue transition-colors" size={28} />
                            <h3 className="text-xl font-heading text-white">Open Source</h3>
                        </div>
                        <p className="text-primary/70 font-light text-sm mb-8 leading-relaxed">
                            Max OS is fundamentally an organization of markdown files. The files will always be open source. Fully control everything yourself. It's completely free if you know how to use Git and your terminal, and it pairs perfectly with editors like VS Code or Antigravity!
                        </p>
                        <ul className="space-y-3 mb-10 text-sm font-mono text-primary/80">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-accent-blue rounded-full"></span> Completely free & open source
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-accent-blue rounded-full"></span> Fully control your setup & files
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-accent-blue rounded-full"></span> Use with your favorite AI models
                            </li>
                        </ul>
                    </div>
                    <button
                        onClick={handleGithubClick}
                        className="w-full py-3 bg-white text-background font-mono font-medium hover:bg-white/90 transition-colors text-center"
                    >
                        Clone Repository
                    </button>
                </div>

                {/* Card B: Managed App */}
                <div className="panel-frame p-8 flex flex-col justify-between group hover:border-accent-violet/40 transition-colors bg-surface/50 border-signal relative">
                    <div className="absolute top-4 right-4 text-xs font-mono text-accent-violet border border-accent-violet/30 px-2 py-0.5 rounded-sm">
                        Early Access
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Cloud className="text-white group-hover:text-accent-violet transition-colors" size={28} />
                            <h3 className="text-xl font-heading text-white">Managed Cloud</h3>
                        </div>
                        <p className="text-primary/70 font-light text-sm mb-8 leading-relaxed">
                            The easiest option for non-technical users. Just download our app on your phone or desktop, and you're good to go. Simply pay a monthly subscription. We run our own Git server in the background so you get version control natively without ever having to think about it.
                        </p>
                        <ul className="space-y-3 mb-10 text-sm font-mono text-primary/80">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-accent-violet rounded-full"></span> Zero technical setup required
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-accent-violet rounded-full"></span> Apps for desktop & mobile
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-accent-violet rounded-full"></span> Native background versioning
                            </li>
                        </ul>
                    </div>
                    <button
                        onClick={onOpenWaitlist}
                        className="w-full py-3 border border-signal text-primary font-mono hover:text-white transition-colors hover:border-accent-violet/50 hover:glow-violet"
                    >
                        Join Waitlist
                    </button>
                </div>
            </div>
        </section>
    );
}
