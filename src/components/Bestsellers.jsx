import React from 'react';

const BESTSELLERS = [
  { id: 1, name: 'The Golden Serenity Hamper', price: 3499, rating: 4.9, image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=600&q=80', category: 'selfcare', desc: 'A rich relaxation set containing handcrafted soy candle, gold tea set, organic lavender oil, and custom printed linen scarf.' },
  { id: 2, name: 'Velvet Midnight Couple Box', price: 4999, rating: 5.0, image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80', category: 'couple', desc: 'Midnight wine glasses, velvet eye masks, premium dark chocolates, and a gold-plated couple bracelet set.' },
  { id: 3, name: 'Classic Rose Gold Birthday', price: 2999, rating: 4.8, image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=600&q=80', category: 'birthday', desc: 'Handcrafted rose petal soap, rose-infused shower gel, a custom name mug, and gold birthday crown decor.' },
  { id: 4, name: 'Artisan Corporate Welcome', price: 4299, rating: 4.9, image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', category: 'corporate', desc: 'Leather journal, premium metal pen, double-walled brass tumbler, and high-altitude single origin coffee beans.' }
];

export default function Bestsellers({ addToCart, toggleWishlist, wishlist }) {
  return (
    <section id="bestsellers" className="py-24 max-w-7xl mx-auto px-6 w-full">
      <div className="text-center space-y-4 mb-16">
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-gold">Shop Best Sellers</span>
        <h2 className="text-4xl md:text-5xl font-serif text-velourabrown-dark dark:text-cream-100">Bestselling Hampers</h2>
        <div className="w-12 h-[1px] bg-gold mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {BESTSELLERS.map((product) => {
          const isFavorite = wishlist.find(p => p.id === product.id);
          return (
            <div key={product.id} className="group relative bg-white dark:bg-velourabrown-deep rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-xl transition-all duration-300 flex flex-col h-full border border-beige-100/40 dark:border-velourabrown/10">
              <div className="relative aspect-square w-full overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-colors ${
                    isFavorite ? 'bg-dustypink text-white' : 'bg-white/80 hover:bg-white text-velourabrown-dark'
                  }`}
                >
                  🖤
                </button>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-gold font-bold">
                    <span className="uppercase tracking-widest">{product.category}</span>
                    <span>⭐ {product.rating}</span>
                  </div>
                  <h3 className="text-lg font-serif text-velourabrown-dark dark:text-cream-100 group-hover:text-gold transition-colors">{product.name}</h3>
                  <p className="text-xs text-velourabrown/60 dark:text-cream-200/60 leading-relaxed line-clamp-2">{product.desc}</p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-beige-50 dark:border-velourabrown/10 mt-6">
                  <span className="text-lg font-bold text-velourabrown-dark dark:text-cream-100">₹{product.price}</span>
                  <button
                    onClick={() => addToCart({ ...product, uniqueId: `bestseller-${product.id}` })}
                    className="px-4 py-2 bg-velourabrown text-cream-50 dark:bg-gold dark:text-velourabrown-deep rounded-full text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
