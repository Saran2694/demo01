import React, { useState } from 'react';

const BUILDER_PRODUCTS = [
  { id: 'p1', name: 'Premium Soy Candle (Gold Jar)', price: 499, category: 'fragrance', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=300&q=80' },
  { id: 'p2', name: 'Fine Porcelain Mug (Custom Initials)', price: 699, category: 'home', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80' },
  { id: 'p3', name: 'Artisanal Dark Chocolates (Set of 6)', price: 390, category: 'gourmet', image: 'https://images.unsplash.com/photo-1548907040-4d42b52125ca?auto=format&fit=crop&w=300&q=80' },
  { id: 'p4', name: 'Silk Sleep Mask (Blush Pink)', price: 599, category: 'lifestyle', image: 'https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=300&q=80' },
  { id: 'p5', name: 'Damask Rose Body Scrub (Organic)', price: 450, category: 'skincare', image: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=300&q=80' },
  { id: 'p6', name: 'Luxury Brass Spoon & Infuser Set', price: 799, category: 'home', image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=300&q=80' }
];

const BOX_TYPES = [
  { id: 'b1', name: 'Classic Pinewood Slide Box', price: 450, image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=300&q=80' },
  { id: 'b2', name: 'Velvet Ribbon Rigid Trunk', price: 650, image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=300&q=80' },
  { id: 'b3', name: 'Eco-Craft Recyclable Board Box', price: 250, image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=300&q=80' }
];

const PACKAGING_STYLES = [
  { id: 's1', name: 'Champagne Satin Ribbon with Dried Gypsophila', price: 150 },
  { id: 's2', name: 'Forest Green Velvet with Gold Wax Seal', price: 200 },
  { id: 's3', name: 'Classic Minimal Jute Twine with Eucalyptus', price: 100 }
];

export default function HamperBuilder({ addToCart }) {
  const [builderOccasion, setBuilderOccasion] = useState('Birthday');
  const [builderBox, setBuilderBox] = useState(BOX_TYPES[0]);
  const [builderProducts, setBuilderProducts] = useState([]);
  const [builderNote, setBuilderNote] = useState('');
  const [builderPhoto, setBuilderPhoto] = useState(null);
  const [builderPackaging, setBuilderPackaging] = useState(PACKAGING_STYLES[0]);

  const customHamperPrice = builderBox.price + builderPackaging.price + builderProducts.reduce((sum, p) => sum + p.price, 0);

  const handleProductToggle = (prod) => {
    setBuilderProducts(prev => {
      const exists = prev.find(p => p.id === prod.id);
      if (exists) return prev.filter(p => p.id !== prod.id);
      return [...prev, prod];
    });
  };

  const handleAdd = () => {
    const item = {
      uniqueId: `custom-${Date.now()}`,
      name: `Custom Veloura Box (${builderOccasion})`,
      price: customHamperPrice,
      image: builderBox.image,
      details: {
        box: builderBox.name,
        packaging: builderPackaging.name,
        products: builderProducts.map(p => p.name).join(', '),
        note: builderNote ? `"${builderNote}"` : 'None',
        hasPhoto: builderPhoto ? 'Yes' : 'No'
      }
    };
    addToCart(item);
    setBuilderProducts([]);
    setBuilderNote('');
    setBuilderPhoto(null);
  };

  return (
    <section id="builder" className="py-24 bg-beige-50 dark:bg-velourabrown-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-gold font-sans">Bespoke Gifting Studio</span>
          <h2 className="text-4xl md:text-5xl font-serif text-velourabrown-dark dark:text-cream-100">Hamper Builder</h2>
          <p className="text-sm text-velourabrown/70 dark:text-cream-200/70 font-sans max-w-md mx-auto">
            Design the ultimate expression of love, luxury, and thoughtfulness in three simple steps.
          </p>
          <div className="w-12 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Occasion */}
            <div className="bg-white dark:bg-velourabrown-deep p-8 rounded-3xl shadow-luxury border border-beige-100/40 dark:border-velourabrown/10">
              <h3 className="text-lg font-serif font-bold mb-6 text-velourabrown-dark dark:text-cream-100">1. Select Gifting Occasion</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Birthday', 'Couple Gifting', 'Self-Care Ritual', 'Friendship Day', 'Corporate Appreciation', 'Festive Spirit'].map((occ) => (
                  <button
                    key={occ}
                    onClick={() => setBuilderOccasion(occ)}
                    className={`py-3 px-4 rounded-xl border text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                      builderOccasion === occ
                        ? 'border-gold bg-gold-100/40 dark:bg-gold/25 dark:text-gold text-velourabrown-dark font-bold'
                        : 'border-beige-100 text-velourabrown dark:text-cream-200 dark:border-velourabrown/30 hover:border-gold/50'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Box Type */}
            <div className="bg-white dark:bg-velourabrown-deep p-8 rounded-3xl shadow-luxury border border-beige-100/40 dark:border-velourabrown/10">
              <h3 className="text-lg font-serif font-bold mb-6 text-velourabrown-dark dark:text-cream-100">2. Choose Box Type</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {BOX_TYPES.map(box => (
                  <div
                    key={box.id}
                    onClick={() => setBuilderBox(box)}
                    className={`cursor-pointer rounded-2xl overflow-hidden border p-3 transition-all ${
                      builderBox.id === box.id 
                        ? 'border-gold bg-gold-100/40 dark:bg-gold/20' 
                        : 'border-beige-100 text-velourabrown dark:text-cream-200 dark:border-velourabrown/30 hover:border-gold/40'
                    }`}
                  >
                    <img src={box.image} alt={box.name} className="w-full h-28 object-cover rounded-xl mb-3" />
                    <h4 className="text-xs font-bold uppercase mb-1 text-velourabrown-dark dark:text-cream-100">{box.name}</h4>
                    <p className="text-xs text-gold font-bold">₹{box.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Products */}
            <div className="bg-white dark:bg-velourabrown-deep p-8 rounded-3xl shadow-luxury border border-beige-100/40 dark:border-velourabrown/10">
              <h3 className="text-lg font-serif font-bold mb-6 text-velourabrown-dark dark:text-cream-100">3. Add Premium Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BUILDER_PRODUCTS.map(prod => {
                  const isAdded = builderProducts.find(p => p.id === prod.id);
                  return (
                    <div
                      key={prod.id}
                      onClick={() => handleProductToggle(prod)}
                      className={`cursor-pointer rounded-2xl p-3 flex items-center space-x-4 border transition-all ${
                        isAdded 
                          ? 'border-gold bg-gold-100/40 dark:bg-gold/20' 
                          : 'border-beige-100 text-velourabrown dark:text-cream-200 dark:border-velourabrown/30 hover:border-gold/40'
                      }`}
                    >
                      <img src={prod.image} alt={prod.name} className="w-16 h-16 object-cover rounded-xl" />
                      <div className="flex-1">
                        <h4 className="text-xs font-bold uppercase text-velourabrown-dark dark:text-cream-100">{prod.name}</h4>
                        <p className="text-xs text-gold font-bold">₹{prod.price}</p>
                      </div>
                      <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${isAdded ? 'bg-gold border-gold text-white' : 'border-beige-200'}`}>
                        {isAdded ? '✓' : '+'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Packaging */}
            <div className="bg-white dark:bg-velourabrown-deep p-8 rounded-3xl shadow-luxury border border-beige-100/40 dark:border-velourabrown/10 text-velourabrown dark:text-cream-200">
              <h3 className="text-lg font-serif font-bold mb-6 text-velourabrown-dark dark:text-cream-100">4. Packaging Ribbon & Gift Details</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold mb-2 text-velourabrown-dark dark:text-cream-100">Handwritten Message Note</label>
                  <textarea
                    placeholder="Write a sweet, emotional message. We will handwrite this on premium heavy cardstock paper..."
                    value={builderNote}
                    onChange={(e) => setBuilderNote(e.target.value)}
                    className="w-full bg-cream-50 dark:bg-velourabrown p-4 rounded-xl border border-beige-100 dark:border-velourabrown/30 text-xs focus:outline-none focus:border-gold"
                    rows="3"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold mb-2 text-velourabrown-dark dark:text-cream-100">Select Packaging Style</label>
                  <div className="space-y-2">
                    {PACKAGING_STYLES.map(style => (
                      <label key={style.id} className="flex items-center justify-between p-3 border border-beige-100 dark:border-velourabrown/30 rounded-xl cursor-pointer hover:border-gold/50">
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="packaging"
                            checked={builderPackaging.id === style.id}
                            onChange={() => setBuilderPackaging(style)}
                            className="text-gold focus:ring-gold"
                          />
                          <span className="text-xs font-semibold">{style.name}</span>
                        </div>
                        <span className="text-xs text-gold font-bold">+₹{style.price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Preview Sticky Sidebar */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-white dark:bg-velourabrown-deep p-8 rounded-3xl shadow-luxury border border-beige-100/40 dark:border-velourabrown/10 space-y-6 text-velourabrown dark:text-cream-200">
            <h3 className="text-xl font-serif border-b pb-4 text-velourabrown-dark dark:text-cream-100">Live Preview</h3>
            
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-cream-50 dark:bg-velourabrown flex items-center justify-center p-6 border border-beige-100/30">
              <div className="absolute inset-4 rounded-xl border border-gold/30 bg-white dark:bg-velourabrown-deep shadow-inner flex flex-col justify-between p-4 overflow-hidden">
                <div className="border-b border-beige-100 dark:border-velourabrown/20 pb-2">
                  <span className="text-[10px] font-bold tracking-widest text-gold uppercase">{builderOccasion} Hamper</span>
                </div>
                <div className="flex-1 flex flex-wrap gap-2 items-center justify-center py-4">
                  {builderProducts.length === 0 ? (
                    <p className="text-center text-xs text-velourabrown/40 dark:text-cream-200/40 p-4">Add items to pack this box.</p>
                  ) : (
                    builderProducts.map(p => (
                      <div key={p.id} className="relative w-14 h-14 rounded-lg overflow-hidden border border-beige-100 shadow-sm">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                    ))
                  )}
                </div>
                <div className="flex items-end justify-between border-t border-beige-100 dark:border-velourabrown/20 pt-2 text-[10px] font-medium uppercase text-velourabrown-dark dark:text-cream-200">
                  <span>{builderBox.name}</span>
                  <span>{builderPackaging.name.split(' ')[0]}</span>
                </div>
              </div>
              <div className="absolute inset-y-0 w-8 bg-gold/20 dark:bg-gold/30 backdrop-blur-[1px] pointer-events-none flex items-center justify-center"></div>
              <div className="absolute inset-x-0 h-8 bg-gold/20 dark:bg-gold/30 backdrop-blur-[1px] pointer-events-none flex items-center justify-center"></div>
              <div className="absolute w-12 h-12 rounded-full gold-gradient shadow-luxury border border-white/40 flex items-center justify-center text-velourabrown-deep font-serif italic text-xs font-bold pointer-events-none">V</div>
            </div>

            <div className="space-y-2 border-t pt-4 text-xs font-medium text-velourabrown-dark dark:text-cream-200">
              <div className="flex justify-between">
                <span>Box Type</span>
                <span>₹{builderBox.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Packaging style</span>
                <span>₹{builderPackaging.price}</span>
              </div>
              {builderProducts.map(p => (
                <div key={p.id} className="flex justify-between text-velourabrown/60">
                  <span>{p.name}</span>
                  <span>₹{p.price}</span>
                </div>
              ))}
              <div className="flex justify-between text-base font-serif font-bold border-t pt-4 text-velourabrown-dark dark:text-cream-100">
                <span>Total value</span>
                <span className="text-gold font-sans font-bold">₹{customHamperPrice}</span>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="w-full py-4 gold-gradient hover:opacity-90 text-velourabrown-deep rounded-full font-medium tracking-wider uppercase text-xs transition-opacity duration-300 shadow-luxury"
            >
              Add Custom Hamper to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
