import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '@/constants';

const Navigation = () => {
  // Navigation Links
  const navLinks = [
    { name: '首頁', path: '/' },
    { name: '專業服務', path: '/services' },
    { name: '作品集', path: '/portfolio' },
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
          aria-label={`${PROFILE.name} - Home`}
        >
          <span className="text-sunfire">{PROFILE.name.charAt(0)}</span>
          <span className="text-navy">{PROFILE.name.slice(1)}</span>
          <span className="text-[#F28A5B] group-hover:animate-pulse">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10" role="menubar">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              role="menuitem"
              className="text-sm font-medium tracking-wide text-umber hover:text-sunfire transition-colors duration-200 py-1 relative group"
            >
              {link.name}
              {/* Hover Indicator (replacing Active Indicator) */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-sunfire/50 rounded-full opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" aria-hidden="true"></span>
            </Link>
          ))}
          <a 
            href="mailto:hello@alexchen.dev" 
            className="ml-4"
            role="menuitem"
          >
             <span className="px-5 py-2 text-sm font-medium text-sunfire border border-sunfire rounded-full hover:bg-sunfire hover:text-white transition-colors duration-300">
               聯絡我
             </span>
          </a>
        </div>

        {/* Mobile Toggle (CSS Checkbox Hack) */}
        <div className="md:hidden flex items-center">
          <label htmlFor="mobile-menu-toggle" className="text-navy p-2 cursor-pointer focus:outline-none" aria-label="Toggle menu">
            <Menu size={24} aria-hidden="true" className="block peer-checked:hidden" />
          </label>
        </div>
      </div>

      {/* Hidden Checkbox for State Control */}
      <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />

      {/* Mobile Menu Overlay */}
      <div 
        className="fixed inset-0 bg-beige z-40 transform translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-6 space-y-6 h-screen"
        role="menu"
      >
        {/* Close Button inside menu */}
        <label htmlFor="mobile-menu-toggle" className="absolute top-6 right-6 text-navy p-2 cursor-pointer">
           <X size={24} aria-hidden="true" />
        </label>

        {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              role="menuitem"
              className="text-lg font-medium text-umber hover:text-sunfire transition-colors"
            >
              {link.name}
            </Link>
        ))}
        
        <a 
          href="mailto:hello@alexchen.dev" 
          className="text-lg font-medium text-sunfire pt-6 mt-4 border-t border-taupe/60 block"
          role="menuitem"
        >
          與我聯繫
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
