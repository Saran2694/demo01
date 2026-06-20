import React from 'react';

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/911234567890?text=Hi%20Veloura%2C%20I%20would%20like%20to%20customize%20a%20luxury%20hamper!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-luxury-xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-1"
      aria-label="Contact Concierge via WhatsApp"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 13.92 2.54 15.7 3.48 17.22L2.02 22.54L7.52 21.14C8.98 22 10.46 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5V2ZM17.66 16.32C17.42 17.02 16.48 17.58 15.72 17.74C15.22 17.84 14.54 17.92 12.38 17.02C9.62 15.88 7.84 13.08 7.7 12.9C7.56 12.72 6.56 11.38 6.56 10C6.56 8.62 7.26 7.94 7.54 7.66C7.76 7.44 8.12 7.34 8.44 7.34H9.42C9.72 7.34 9.94 7.36 10.14 7.84C10.36 8.38 10.9 9.7 10.96 9.82C11.02 9.94 11.04 10.1 10.96 10.26C10.88 10.42 10.82 10.5 10.7 10.64L9.94 11.52C9.8 11.68 9.64 11.84 9.84 12.18C10.04 12.5 10.72 13.62 11.72 14.5C13 15.64 14.06 16 14.4 16.14C14.7 16.26 14.88 16.24 15.06 16.04C15.24 15.84 15.84 15.14 16.04 14.86C16.24 14.58 16.44 14.64 16.74 14.76L19.5 16.12C19.8 16.26 20 16.36 20.08 16.48C20.14 16.6 20.14 17.18 19.9 17.78L17.66 16.32Z" />
      </svg>
    </a>
  );
}
