import React from 'react';
import { Check } from 'lucide-react';

const services = [
  { title: 'Surface Restoration', label: 'Pressure Washing', items: ['House siding refresh', 'Walkways and patios', 'Deck and exterior surfaces', 'Careful rinse-down finish'] },
  { title: 'Crystal Clarity', label: 'Window Cleaning', items: ['Exterior window washing', 'Streak-free detailing', 'Frames and sill attention', 'Sparkling final inspection'] },
];

export default function ServiceSuite() {
  return (
    <section id="services" className="px-6 py-24 md:px-[12vw]">
      <div className="mb-14 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent-foreground/70">Service Suite</p>
        <h2 className="mt-4 font-display text-5xl font-black leading-none tracking-[-0.05em] md:text-7xl">A vertical refresh for every exterior surface.</h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="group relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/45 p-8 shadow-xl shadow-primary/5 backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/70 md:p-10">
            <div className="absolute -right-8 top-8 select-none font-display text-6xl font-black uppercase leading-none tracking-[-0.08em] text-transparent opacity-20 [-webkit-text-stroke:1px_hsl(var(--primary))] md:text-8xl">{service.label}</div>
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-muted-foreground">{service.label}</p>
              <h3 className="mt-4 font-display text-4xl font-black tracking-[-0.04em]">{service.title}</h3>
              <ul className="mt-10 space-y-5 border-l border-primary/20 pl-6">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-lg text-primary"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check className="h-4 w-4" /></span>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}