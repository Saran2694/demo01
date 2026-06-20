import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-100 dark:bg-velourabrown-deep transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-3xl overflow-hidden shadow-luxury-xl aspect-[4/5] max-h-[500px]">
          <img src="https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80" alt="Veloura Brand Story" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-gold">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-serif text-velourabrown-dark dark:text-cream-100">Gifting as an Art Form</h2>
          <p className="text-sm text-velourabrown/80 dark:text-cream-200/80 leading-relaxed font-light font-sans">
            Veloura began with a singular belief: a gift should never feel commercial. It should feel like a warm hug, an inside joke, or a deep sigh of relief. We source our wood and rigid boxes from local craftsmen, hand-pour our soy wax candles with custom organic botanical oils, and tie every silk ribbon ourselves.
          </p>
          <p className="text-sm text-velourabrown/80 dark:text-cream-200/80 leading-relaxed font-light font-sans">
            Every botanical floral accent, custom framed photograph, and name plate is positioned with care so that the moment of opening is as emotional as the gift itself.
          </p>
          <div className="pt-4">
            <div className="font-serif italic text-lg text-gold font-bold">"Saran & The Veloura Artisans"</div>
          </div>
        </div>
      </div>
    </section>
  );
}
