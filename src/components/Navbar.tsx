import { useState } from 'react';
import { ArrowUpRight, Leaf, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-wrap">
      <a className="brand" href="#top">
        <span className="brand-mark"><Leaf size={18} strokeWidth={2.5} /></span>
        <span>farm<span>assist</span></span>
      </a>

      <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
        <a href="#technology" onClick={() => setMenuOpen(false)}>Technology</a>
        <a href="#monitoring" onClick={() => setMenuOpen(false)}>Monitoring</a>
        <a href="#impact" onClick={() => setMenuOpen(false)}>Our impact</a>
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <X size={22} />
        </button>
      </div>

      <a className="nav-cta nav-cta-cta" href="https://minetallest-farm-assist.vercel.app" target="_blank" rel="noopener noreferrer">View live data <ArrowUpRight size={16} /></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open menu">
        <Menu size={24} />
      </button>
    </nav>
  );
}
