import React from 'react';

export default function CartSidebar({ isOpen, onClose, cart, removeFromCart }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-velourabrown-deep/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-cream-50 dark:bg-velourabrown-dark p-8 shadow-luxury flex flex-col h-full">
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <h3 className="text-2xl font-serif text-velourabrown-dark dark:text-cream-100 font-bold">Your Basket</h3>
            <button onClick={onClose} className="text-velourabrown/60 hover:text-gold text-lg font-bold">✕</button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 pr-2">
            {cart.length === 0 ? (
              <div className="text-center py-12 text-velourabrown/40 dark:text-cream-200/40">
                <span className="text-4xl block mb-2">🎁</span>
                <p className="text-xs">Your basket is currently empty.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.uniqueId} className="flex space-x-4 border-b pb-6 border-beige-100 dark:border-velourabrown/20">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                  <div className="flex-1 space-y-1">
                    <h4 className="text-xs font-bold uppercase text-velourabrown-dark dark:text-cream-100 leading-tight">{item.name}</h4>
                    <p className="text-xs text-gold font-bold">₹{item.price} {item.qty > 1 && <span className="text-velourabrown/50 text-[10px]">x {item.qty}</span>}</p>
                    {item.details && (
                      <div className="text-[10px] text-velourabrown/60 dark:text-cream-200/60 leading-normal font-sans pt-1 space-y-0.5">
                        <div><strong className="text-gold">Box:</strong> {item.details.box}</div>
                        <div><strong className="text-gold">Wrap:</strong> {item.details.packaging}</div>
                        <div><strong className="text-gold">Items:</strong> {item.details.products}</div>
                        {item.details.note !== 'None' && <div><strong className="text-gold">Note:</strong> {item.details.note}</div>}
                      </div>
                    )}
                  </div>
                  <button onClick={() => removeFromCart(item.uniqueId)} className="text-dustypink hover:text-dustypink-dark text-xs h-fit self-center">Remove</button>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-beige-100 dark:border-velourabrown/20 pt-6 mt-6 space-y-4">
              <div className="flex justify-between text-base font-serif font-bold">
                <span>Total Sum</span>
                <span className="text-gold">₹{cart.reduce((sum, item) => sum + (item.price * item.qty), 0)}</span>
              </div>
              <button className="w-full py-4 gold-gradient text-velourabrown-deep rounded-full font-bold uppercase tracking-wider text-xs shadow-luxury hover:opacity-95 transition-opacity">
                Proceed to Luxury Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
