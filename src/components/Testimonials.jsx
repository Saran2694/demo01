import React from 'react';

const TESTIMONIALS = [
  { id: 1, name: 'Ananya Sharma', role: 'Art Director', quote: 'The attention to detail in Veloura hampers is sheer perfection. From the customized wood box to the dried baby breath arrangement, it felt less like a product and more like a handwritten love letter.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' },
  { id: 2, name: 'Vikram Malhotra', role: 'CEO, InnovateX', quote: 'We commissioned Veloura for our annual board of directors gifting. The bespoke luxury look, gold foil initials, and curation of artisanal coffee was met with spectacular feedback. Elegant brand storytelling at its best.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
  { id: 3, name: 'Pooja & Rohan', role: 'Newlyweds', quote: 'The self-care box sent by our friends felt incredibly warm and soothing. Every product - from the silk sleep mask to the hand-poured vanilla candle - felt super high-end and premium.', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80' }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-beige-50 dark:bg-velourabrown-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-gold">Gifting Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif text-velourabrown-dark dark:text-cream-100">Kind Words from Curators</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white dark:bg-velourabrown p-8 rounded-3xl shadow-luxury border border-beige-100/40 dark:border-velourabrown/10 flex flex-col justify-between h-full hover:shadow-luxury-lg hover:-translate-y-0.5 transition-all duration-350">
              <p className="text-xs italic text-velourabrown/80 dark:text-cream-200/80 leading-relaxed font-serif">
                "{t.quote}"
              </p>
              <div className="flex items-center space-x-4 pt-6 border-t border-beige-50 dark:border-velourabrown/10 mt-6">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-gold/30" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-velourabrown-dark dark:text-cream-100">{t.name}</h4>
                  <span className="text-[10px] text-gold font-medium">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
