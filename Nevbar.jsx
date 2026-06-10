import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Droplets } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-lg shadow-primary/5 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Droplets className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <div className="font-display text-base font-black leading-tight tracking-tight text-primary">Green Mountain</div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Washing</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, to }) => (
            <Link key={to} to={to} className={`text-sm font-semibold transition hover:text-accent ${location.pathname === to ? 'text-accent' : 'text-primary'}`}>{label}</Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+18023182433" className="flex min-h-10 items-center gap-2 rounded-full border border-primary/20 px-4 text-sm font-semibold transition hover:bg-primary/5">
            <Phone className="h-4 w-4" /> 802-318-2433
          </a>
          <Link to="/booking" className="flex min-h-10 items-center rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:opacity-90">
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} className="flex min-h-10 min-w-10 items-center justify-center rounded-full bg-primary/10 md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-primary/10 bg-white/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ label, to }) => (
              <Link key={to} to={to} className={`rounded-xl px-4 py-3 text-base font-semibold transition hover:bg-primary/5 ${location.pathname === to ? 'text-accent' : 'text-primary'}`}>{label}</Link>
            ))}
            <Link to="/booking" className="mt-2 flex min-h-12 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">Book Now</Link>
            <a href="tel:+18023182433" className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/20 text-base font-semibold"><Phone className="h-4 w-4" /> 802-318-2433</a>
          </nav>
        </div>
      )}
    </header>
  );
}