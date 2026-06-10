import React from 'react';
import { Droplets, Home, Sparkles, Star, Phone } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#services', label: 'Services', icon: Droplets },
  { href: '#results', label: 'Results', icon: Sparkles },
  { href: '#reviews', label: 'Reviews', icon: Star },
  { href: '#quote', label: 'Quote', icon: Phone },
];

export default function SideDockNav() {
  return (
    <nav className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 rounded-full border border-white/50 bg-white/35 p-2 shadow-2xl shadow-primary/10 backdrop-blur-2xl transition-all duration-500 hover:rounded-[2rem] hover:px-4 md:block">
      <div className="flex flex-col gap-2">
        {links.map(({ href, label, icon: Icon }) => (
          <a key={href} href={href} className="group flex min-h-12 items-center gap-3 rounded-full px-3 text-primary transition-all hover:bg-white/70">
            <Icon className="h-5 w-5 shrink-0" />
            <span className="w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:w-20 group-hover:opacity-100">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}