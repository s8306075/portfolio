'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { PROFILE } from '@/constants';
import { useState, useEffect } from 'react';

const Navigation = () => {
  // Navigation Links
  const location = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when location changes (fallback)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Navigation Links
  const navLinks = [
    { name: '首頁', path: '/' },
    { name: '專業服務', path: '/services' },
    { name: '作品集', path: '/portfolio' },
    { name: '實務分享', path: '/insights' },
    { name: '關於我', path: '/about' },
  ];

  return (
    <nav 
      className="fixed w-full z-50 bg-beige/95 backdrop-blur-sm shadow-sm py-4 transition-all duration-300"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
        
        {/* Logo / Name */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-navy tracking-tight group"
          onClick={() => setIsMenuOpen(false)}
          aria-label={`${PROFILE.name} - Home`}
        >
          {PROFILE.name}<span className="text-sunfire group-hover:animate-pulse">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10" role="menubar">
          {navLinks.map((link) => {
            const isActive = link.path === '/' 
              ? location === '/' 
              : location.startsWith(link.path);

            return (
              <Link
                key={link.path}
                href={link.path}
                role="menuitem"
                className={`text-sm font-medium tracking-wide transition-colors duration-200 py-1 relative group ${isActive ? 'text-sunfire' : 'text-umber hover:text-sunfire'}`}
              >
                {link.name}
                {/* Active/Hover Indicator */}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-sunfire rounded-full transition-all duration-300 origin-left transform ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'}`} 
                  aria-hidden="true"
                ></span>
              </Link>
            );
          })}
          <a 
            href={PROFILE.contactFormLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
            role="menuitem"
          >
             <span className="px-5 py-2 text-sm font-medium text-sunfire border border-sunfire rounded-full hover:bg-sunfire hover:text-white transition-colors duration-300 cursor-pointer">
               聯絡我
             </span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-navy p-2 focus:outline-none z-50 relative cursor-pointer" 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Hidden Checkbox for State Control */}
      <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-beige z-40 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col pt-32 px-10 space-y-8 h-screen ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="menu"
      >
        {navLinks.map((link) => {
           const isActive = link.path === '/' 
              ? location === '/' 
              : location.startsWith(link.path);
           
           return (
            <Link
              key={link.path}
              href={link.path}
              role="menuitem"
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-bold transition-colors ${isActive ? 'text-navy border-l-4 border-sunfire pl-4' : 'text-umber hover:text-navy pl-0'}`}
            >
              {link.name}
            </Link>
           );
        })}
        
        <a 
          href="mailto:hello@alexchen.dev" 
          className="text-lg font-medium text-sunfire pt-6 mt-4 border-t border-taupe/60 flex items-center justify-between group"
          role="menuitem"
          onClick={() => setIsMenuOpen(false)}
        >
          <span>開始討論您的專案</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;