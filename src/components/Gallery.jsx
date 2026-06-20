import React from 'react';

const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80', aspect: 'aspect-square' },
  { url: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=400&q=80', aspect: 'aspect-[3/4]' },
  { url: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=400&q=80', aspect: 'aspect-[4/5]' },
  { url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80', aspect: 'aspect-square' },
  { url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80', aspect: 'aspect-[3/4]' },
  { url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&q=80', aspect: 'aspect-square' }
];

export default function Gallery() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 w-full">
      <div className="text-center space-y-4 mb-16">
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-gold">Pinterest Inspiration</span>
        <h2 className="text-4xl md:text-5xl font-serif text-velourabrown-dark dark:text-cream-100">Social Curation Gallery</h2>
        <div className="w-12 h-[1px] bg-gold mx-auto"></div>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        {GALLERY_IMAGES.map((g, idx) => (
          <div key={idx} className="pin-card group relative cursor-pointer break-inside-avoid mb-6 overflow-hidden rounded-2xl bg-white dark:bg-velourabrown shadow-luxury">
            <img src={g.url} alt={`Veloura Curation ${idx}`} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-velourabrown-deep/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <span className="text-xs text-white font-bold uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">View Vibe</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
