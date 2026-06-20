import React from 'react';

const CATEGORIES = [
  { id: 'birthday', name: 'Birthday Hampers', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80', desc: 'Crafted with celebration & joy' },
  { id: 'couple', name: 'Couple Hampers', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80', desc: 'Elegant dual gifts for two' },
  { id: 'selfcare', name: 'Self-Care Boxes', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', desc: 'Serene wellness rituals' },
  { id: 'friendship', name: 'Friendship Gifts', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80', desc: 'To celebrate bonds of love' },
  { id: 'corporate', name: 'Corporate Hampers', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', desc: 'Bespoke professional appreciation' },
  { id: 'festive', name: 'Festive Gifts', image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=600&q=80', desc: 'Warm blessings for celebrations' }
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 max-w-7xl mx-auto px-6 w-full">
      <div className="text-center space-y-4 mb-16">
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-gold">Shop by Collections</span>
        <h2 className="text-4xl md:text-5xl font-serif text-velourabrown-dark dark:text-cream-100">Featured Categories</h2>
        <div className="w-12 h-[1px] bg-gold mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="group relative h-96 rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-xl transition-all duration-500 cursor-pointer">
            <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-velourabrown-deep/90 via-velourabrown-dark/45 to-transparent flex flex-col justify-end p-8 text-cream-50">
              <span className="text-xs text-gold/90 font-bold uppercase tracking-widest mb-1">{cat.desc}</span>
              <h3 className="text-2xl font-serif mb-4 group-hover:translate-x-2 transition-transform duration-300">{cat.name}</h3>
              <a href="#builder" className="text-xs uppercase tracking-widest font-bold border-b border-cream-100/50 pb-1 w-fit group-hover:border-gold group-hover:text-gold transition-colors">
                Customize This Vibe
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
