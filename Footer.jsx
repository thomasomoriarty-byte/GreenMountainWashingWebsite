import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Globe, Droplets, Star, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Droplets className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-lg font-black">Green Mountain Washing</div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] opacity-70">Essex Junction, Vermont</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-base leading-8 opacity-80">Professional pressure washing and window cleaning for Vermont homes. Friendly, efficient, and sparkling results — every time.</p>
            <div className="mt-5 flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}<span className="ml-2 font-bold">5.0 on Google</span></div>
          </div>
          <div>
            <h3 className="mb-4 font-bold uppercase tracking-[0.18em] text-sm opacity-70">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {[['/', 'Home'], ['/services', 'Services'], ['/about', 'About Us'], ['/faq', 'FAQ'], ['/contact', 'Contact'], ['/booking', 'Book Now']].map(([to, label]) =>
              <Link key={to} to={to} className="text-base opacity-80 transition hover:opacity-100">{label}</Link>
              )}
            </nav>
          </div>
          <div>
            <h3 className="mb-4 font-bold uppercase tracking-[0.18em] text-sm opacity-70">Contact</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+18023182433" className="flex items-center gap-3 text-base opacity-80 transition hover:opacity-100"><Phone className="h-4 w-4 shrink-0" /> 802-318-2433</a>
              
              
              <div className="flex items-center gap-3 text-base opacity-80"><Clock className="h-4 w-4 shrink-0" /> Open 24 Hours</div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Green Mountain Washing. All rights reserved.
        </div>
      </div>
    </footer>);

}