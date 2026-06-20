import React from 'react';
import logo from '../../img/logo1.png';

export default function Footer() {
  return (
    <footer className="bg-velourabrown-dark text-cream-200 py-16 border-t border-velourabrown">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-xs">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Veloura Logo" className="h-16 w-auto object-contain invert mix-blend-screen" />
            <span className="text-2xl font-serif tracking-[0.2em] text-white">VELOURA</span>
          </div>
          <p className="leading-relaxed text-cream-200/70 font-light">
            Aesthetic, emotional & personalized gifting experiences for celebrations, milestones, and expressions of gratitude.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">Pinterest</a>
            <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-serif uppercase tracking-widest">Collections</h4>
          <ul className="space-y-2">
            <li><a href="#categories" className="hover:text-gold transition-colors">Celebration Hampers</a></li>
            <li><a href="#categories" className="hover:text-gold transition-colors">Corporate Gifting Suite</a></li>
            <li><a href="#categories" className="hover:text-gold transition-colors">Wellness & Bath Rituals</a></li>
            <li><a href="#builder" className="hover:text-gold transition-colors">Bespoke Studio Customizer</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-serif uppercase tracking-widest">Information & FAQs</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gold transition-colors">Shipping & Pan-India Logistics</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Frequently Asked Questions</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Corporate Booking & Bulk Orders</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-serif uppercase tracking-widest">Join the Circle</h4>
          <p className="leading-relaxed text-cream-200/70 font-light">
            Receive luxury gifting prompts, artisan updates, and preview notifications for seasonal boxes.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-velourabrown p-3 rounded-l-xl focus:outline-none border-none text-white text-xs w-full"
            />
            <button className="gold-gradient text-velourabrown-deep px-4 rounded-r-xl font-bold uppercase tracking-wider">Join</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-velourabrown/40 mt-12 pt-8 text-center text-cream-200/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>© 2026 VELOURA. Crafted with absolute devotion.</p>
        <div className="flex space-x-6 text-[10px] uppercase tracking-wider">
          <a href="#" className="hover:text-gold">Terms of Service</a>
          <a href="#" className="hover:text-gold">Shipping Policy</a>
          <a href="#" className="hover:text-gold">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
