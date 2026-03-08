import React, { useState } from 'react';
import { X, CheckCircle, Calendar } from 'lucide-react';

export default function WaitlistModal({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [context, setContext] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        // Analytics tracking hook as requested
        console.log(`Track event: site_id=max-os, action=submit_waitlist, email=${email}, context_length=${context.length}`);

        setIsSubmitting(true);
        setError('');

        try {
            // Updated with user's Formspree ID
            const response = await fetch("https://formspree.io/f/mreyezze", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ email, use_case: context })
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const data = await response.json();
                setError(data.error || 'Oops! There was a problem submitting your form');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="panel-frame w-full max-w-md bg-background border-signal p-6 relative animate-in fade-in zoom-in-95 duration-200">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-primary/50 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                {!submitted ? (
                    <div>
                        <h3 className="text-2xl font-heading font-medium text-white mb-2">Request Access</h3>
                        <p className="text-primary/70 text-sm font-light mb-6">
                            Join the waitlist for the Max OS managed cloud. We are currently onboarding design partners.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-mono text-primary/60 mb-1.5 uppercase tracking-wider">
                                    Work Email <span className="text-accent-blue">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-surface border border-signal px-3 py-2 text-primary focus:outline-none focus:border-accent-blue focus:glow-blue transition-all font-mono text-sm"
                                    placeholder="name@company.com"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-primary/60 mb-1.5 uppercase tracking-wider">
                                    Use Case (Optional)
                                </label>
                                <textarea
                                    name="use_case"
                                    value={context}
                                    onChange={(e) => setContext(e.target.value)}
                                    className="w-full bg-surface border border-signal px-3 py-2 text-primary focus:outline-none focus:border-accent-blue focus:glow-blue transition-all font-mono text-sm resize-none h-24"
                                    placeholder="Briefly describe your execution requirements..."
                                />
                            </div>

                            {error && (
                                <div className="text-red-500 font-mono text-xs mb-4 text-center">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-2 py-3 bg-white text-background font-mono font-medium hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Initializing...' : 'Initialize Request'}
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="text-center py-6">
                        <div className="flex justify-center mb-4 text-accent-blue animate-bounce">
                            <CheckCircle size={48} />
                        </div>
                        <h3 className="text-xl font-heading font-medium text-white mb-2">Request Received</h3>
                        <p className="text-primary/70 text-sm font-light mb-6">
                            Your parameters have been logged. We will contact you when capacity opens in your availability zone.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
