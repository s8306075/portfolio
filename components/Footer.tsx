import { FileText, Facebook, Instagram } from 'lucide-react';
import { PROFILE } from '../constants';
import FadeIn from './FadeIn';

const Footer = () => {
  return (
    <footer className="bg-sand border-t border-taupe py-12 mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* Brand & Description */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-navy mb-2 tracking-tight">
                <span className="text-sunfire">{PROFILE.name.charAt(0)}</span>
                <span className="text-navy">{PROFILE.name.slice(1)}</span>
                <span className="text-[#F28A5B]">.</span>
              </h3>
              <p className="text-umber text-sm max-w-sm leading-relaxed">
                {PROFILE.tagline}
              </p>
            </div>

            {/* Social Icons with Label */}
            <nav className="flex flex-col items-center md:items-end gap-3" aria-label="Social Media Links">
              <span className="text-sm font-bold text-smoke/80 uppercase tracking-wider">聊聊您的專案想法</span>
              <ul className="flex items-center gap-4">
                <li>
                  <a 
                    href={PROFILE.contactFormLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-navy shadow-sm border border-transparent hover:border-navy/20 hover:text-navy hover:shadow-md transition-all duration-300 group block"
                    aria-label="Open contact form"
                  >
                    <FileText size={20} className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a 
                    href={PROFILE.social?.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-white rounded-full text-navy shadow-sm border border-transparent hover:border-sunfire/20 hover:text-sunfire hover:shadow-md transition-all duration-300 group block"
                    aria-label="Visit Facebook Profile"
                  >
                    <Facebook size={20} className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a 
                    href={PROFILE.social?.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-white rounded-full text-navy shadow-sm border border-transparent hover:border-sunfire/20 hover:text-sunfire hover:shadow-md transition-all duration-300 group block"
                    aria-label="Visit Instagram Profile"
                  >
                    <Instagram size={20} className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Divider & Copyright */}
          <div className="mt-10 pt-6 border-t border-taupe/60 flex flex-col md:flex-row justify-between items-center text-xs text-umber/50">
            <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
            <p className="mt-2 md:mt-0 font-medium">
              Designed for Performance & Clarity.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;