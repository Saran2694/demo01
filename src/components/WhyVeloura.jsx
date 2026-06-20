import React from 'react';

export default function WhyVeloura() {
  const items = [
    { title: "Fully Personalized", icon: "✨", desc: "Tailor everything from box layouts to handwritten luxury cards." },
    { title: "Handmade with Care", icon: "👐", desc: "Lovingly assembled and tied with dried florals and wax seals." },
    { title: "Premium Packaging", icon: "🎁", desc: "Presented in real wood slide boxes and velvet rigid trunks." },
    { title: "Pan-India Delivery", icon: "✈️", desc: "Carefully double-boxed and shipped safely across 20,000+ pin codes." },
    { title: "Eco-Friendly", icon: "🌱", desc: "Using natural pine, recycled wood wool, and organic botanicals." }
  ];

  return (
    <section className="py-24 bg-cream-100 dark:bg-velourabrown-deep transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-gold">The Veloura Promise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-velourabrown-dark dark:text-cream-100">Why Gifting with Us is Different</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-velourabrown p-8 rounded-3xl shadow-luxury border border-beige-100/40 dark:border-velourabrown/10 text-center space-y-4 hover:shadow-luxury-lg hover:-translate-y-1 transition-all duration-300">
              <span className="text-4xl block">{item.icon}</span>
              <h3 className="text-lg font-serif font-bold text-velourabrown-dark dark:text-cream-100">{item.title}</h3>
              <p className="text-xs text-velourabrown/70 dark:text-cream-200/70 leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
