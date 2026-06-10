import React from 'react';
import { MapPin, Phone, Globe } from 'lucide-react';

export default function RainFooter() {
  return (
    <footer className="relative overflow-hidden px-6 py-24 text-white md:px-[12vw]">
      <img src="https://media.base44.com/images/public/6a299de1449b8fa273e764f8/c1a9ede63_generated_b8745837.png" alt="Rain droplets clearing on green glass" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-[1px]" />
      <div className="relative grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <p className="font-bold uppercase tracking-[0.25em] opacity-70">Green Mountain Washing</p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl font-black leading-none tracking-[-0.05em] md:text-7xl">Let the outside of your home feel new again.</h2>
        </div>
        <div className="space-y-3 rounded-[2rem] border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
          <a href="tel:+18023182433" className="flex min-h-12 items-center gap-3 rounded-full px-2 font-bold hover:bg-white/10"><Phone className="h-5 w-5" /> +1 802-318-2433</a>
          <a href="https://cleangmw.com" target="_blank" rel="noreferrer" className="flex min-h-12 items-center gap-3 rounded-full px-2 font-bold hover:bg-white/10"><Globe className="h-5 w-5" /> cleangmw.com</a>
          <a href="https://www.google.com/maps/search/?api=1&query=214+River+Rd,+Essex+Junction,+VT+05452" target="_blank" rel="noreferrer" className="flex min-h-12 items-center gap-3 rounded-full px-2 font-bold hover:bg-white/10"><MapPin className="h-5 w-5" /> 214 River Rd, Essex Junction, VT</a>
        </div>
      </div>
    </footer>
  );
}