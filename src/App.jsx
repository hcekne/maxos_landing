import React, { useState } from 'react';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import WhyMaxOS from './components/WhyMaxOS';
import SplitCards from './components/SplitCards';
import WaitlistModal from './components/WaitlistModal';
import Footer from './components/Footer';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-primary font-body selection:bg-accent-blue/30 selection:text-white pb-0">
      <main>
        <Hero onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        <Capabilities />
        <WhyMaxOS />
        <SplitCards onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      </main>
      <Footer />
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
}

export default App;
