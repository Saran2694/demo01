import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-cream-100 to-beige-100 dark:from-velourabrown-dark dark:to-velourabrown-deep">
      {/* Background Blurs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-dustypink-100/30 blur-3xl dark:bg-dustypink/10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold-200/20 blur-3xl dark:bg-gold/10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full z-10 py-12">
        <div className="space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-gold">Veloura Bespoke</span>
          <h1 className="text-5xl md:text-7xl font-serif text-velourabrown-dark dark:text-cream-100 leading-tight">
            Gifting, Made <br />
            <span className="italic font-light gold-gradient-text">Deeply Personal.</span>
          </h1>
          <p className="text-lg md:text-xl text-velourabrown/80 dark:text-cream-200/80 font-light leading-relaxed max-w-lg">
            Curated hampers crafted with raw emotions, timeless memories, and gorgeous, hand-tied details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#builder" className="px-8 py-4 bg-velourabrown text-cream-50 dark:bg-gold dark:text-velourabrown-deep rounded-full font-medium tracking-wider uppercase text-xs hover:bg-gold hover:text-velourabrown dark:hover:bg-cream dark:hover:text-velourabrown transition-all duration-300 shadow-luxury hover:shadow-luxury-lg text-center">
              Build Your Hamper
            </a>
            <a href="#categories" className="px-8 py-4 border border-velourabrown/30 dark:border-cream/30 hover:border-gold hover:text-gold dark:hover:border-gold dark:hover:text-gold rounded-full font-medium tracking-wider uppercase text-xs transition-all duration-300 text-center">
              Explore Collections
            </a>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="relative w-80 h-96 md:w-[450px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-luxury-xl border border-white/50 dark:border-velourabrown/30">
            <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80" alt="Veloura Luxury Gift Hamper" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/80 dark:bg-velourabrown/90 backdrop-blur-md p-6 rounded-2xl shadow-luxury max-w-[220px] border border-beige-100/50 dark:border-velourabrown/20 hidden md:block">
            <p className="text-xs text-gold font-bold uppercase tracking-wider mb-1">Handcrafted with care</p>
            <p className="text-sm font-serif italic text-velourabrown-dark dark:text-cream-100">"The packaging alone felt like a work of art."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
