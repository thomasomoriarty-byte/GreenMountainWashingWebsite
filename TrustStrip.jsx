import React from 'react';

const stats = [
  ['5.0', 'Google rating'],
  ['24/7', 'Quote requests'],
  ['Essex Junction', 'Vermont based'],
  ['Pressure + Windows', 'Exterior clarity'],
];

export default function TrustStrip() {
  return (
    <section className="px-6 py-20 md:px-[12vw]">
      <div className="grid gap-px overflow-hidden rounded-[2rem] border border-primary/10 bg-primary/10 md:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="bg-white/70 p-8 backdrop-blur-xl">
            <div className="font-display text-4xl font-black tracking-tight text-primary">{value}</div>
            <div className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}