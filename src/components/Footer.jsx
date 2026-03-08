import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 border-t border-signal mt-12 bg-background font-mono text-xs">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-primary/60">

                <div className="flex items-center gap-3">
                    <ShieldCheck size={18} className="text-accent-blue" />
                    <span>Max OS</span>
                </div>

                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Documentation</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="hover:text-white transition-colors">Status</a>
                </div>

                <div className="flex gap-8 text-primary/40">
                    <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms</a>
                    <span>© 2026 Max OS</span>
                </div>

            </div>
        </footer>
    );
}
