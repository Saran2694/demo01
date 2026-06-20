import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Categories from './components/Categories';
import HamperBuilder from './components/HamperBuilder';
import Bestsellers from './components/Bestsellers';
import WhyVeloura from './components/WhyVeloura';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import About from './components/About';
import GiftQuiz from './components/GiftQuiz';
import CartSidebar from './components/CartSidebar';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import Footer from './components/Footer';

import logo from '../img/logo1.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.uniqueId === item.uniqueId);
      if (exists) {
        return prev.map((i) => (i.uniqueId === item.uniqueId ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (uniqueId) => {
    setCart((prev) => prev.filter((i) => i.uniqueId !== uniqueId));
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-all duration-300 bg-cream-50 text-velourabrown dark:bg-velourabrown-deep dark:text-cream-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3">
            <img src={logo} alt="Veloura Logo" className="h-16 md:h-18 w-auto object-contain mix-blend-multiply dark:invert dark:mix-blend-screen" />
            <span className="text-2xl md:text-3xl tracking-[0.2em] font-serif font-bold text-velourabrown dark:text-cream-100">
              VELOURA
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-10 text-sm tracking-widest font-medium uppercase">
            <a href="#categories" className="hover:text-gold transition-colors duration-200">Collections</a>
            <a href="#builder" className="hover:text-gold transition-colors duration-200">Customizer</a>
            <a href="#bestsellers" className="hover:text-gold transition-colors duration-200">Bestsellers</a>
            <a href="#quiz" className="hover:text-gold transition-colors duration-200">AI Quiz</a>
            <a href="#about" className="hover:text-gold transition-colors duration-200">Our Story</a>
          </div>

          <div className="flex items-center space-x-6 text-velourabrown dark:text-cream-100">
            {/* Dark Mode */}
            <button onClick={() => setDarkMode(!darkMode)} className="p-1 hover:text-gold transition-colors">
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Wishlist */}
            <button onClick={() => setIsWishlistOpen(true)} className="relative p-1 hover:text-gold transition-colors">
              <span>🖤</span>
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 gold-gradient text-[10px] text-velourabrown font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white dark:border-velourabrown-deep">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart */}
            <button onClick={() => setIsCartOpen(true)} className="relative p-1 hover:text-gold transition-colors">
              <span>🎁</span>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 gold-gradient text-[10px] text-velourabrown font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white dark:border-velourabrown-deep">
                  {cart.reduce((sum, item) => sum + item.qty, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Hero />
      <Categories />
      <HamperBuilder addToCart={addToCart} />
      <Bestsellers addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />
      <WhyVeloura />
      <GiftQuiz addToCart={addToCart} />
      <Testimonials />
      <Gallery />
      <About />
      <Footer />

      {/* Cart & Wishlist Drawers */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} removeFromCart={removeFromCart} />
      
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-velourabrown-deep/60 backdrop-blur-sm" onClick={() => setIsWishlistOpen(false)}></div>
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-md bg-cream-50 dark:bg-velourabrown-dark p-8 shadow-luxury flex flex-col h-full">
              <div className="flex justify-between items-center border-b pb-4 mb-6">
                <h3 className="text-2xl font-serif text-velourabrown-dark dark:text-cream-100">Your Wishlist</h3>
                <button onClick={() => setIsWishlistOpen(false)} className="text-velourabrown/60 hover:text-gold text-lg font-bold">✕</button>
              </div>
              <div className="flex-1 overflow-y-auto space-y-4">
                {wishlist.length === 0 ? (
                  <p className="text-center py-12 text-velourabrown/40 dark:text-cream-200/40">Your wishlist is empty.</p>
                ) : (
                  wishlist.map(p => (
                    <div key={p.id} className="flex space-x-4 border-b pb-4">
                      <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded-xl" />
                      <div className="flex-1">
                        <h4 className="text-xs font-bold uppercase">{p.name}</h4>
                        <p className="text-xs text-gold font-bold">₹{p.price}</p>
                      </div>
                      <button onClick={() => toggleWishlist(p)} className="text-dustypink hover:text-dustypink-dark text-xs">Remove</button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Elements */}
      <FloatingWhatsapp />
    </div>
  );
}

export default App;
