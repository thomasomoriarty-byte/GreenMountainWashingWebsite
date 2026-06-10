import React, { useMemo, useState } from 'react';
import { Home, PanelsTopLeft, Waves, DoorOpen, ArrowRight } from 'lucide-react';

const choices = [
  { label: 'House', icon: Home },
  { label: 'Windows', icon: PanelsTopLeft },
  { label: 'Deck', icon: DoorOpen },
  { label: 'Walkway', icon: Waves },
];

export default function QuoteConcierge() {
  const [selected, setSelected] = useState('House');
  const [details, setDetails] = useState('');
  const [contact, setContact] = useState('');
  const smsLink = useMemo(() => `sms:+18023182433?&body=${encodeURIComponent(`Hi Green Mountain Washing, I’d like an estimate. Service: ${selected}. Details: ${details}. Contact: ${contact}`)}`, [selected, details, contact]);

  return (
    <section id="quote" className="px-6 py-24 pb-40 md:px-[12vw]">
      <div className="grid gap-10 rounded-[3rem] border border-primary/10 bg-white/55 p-6 shadow-2xl shadow-primary/10 backdrop-blur-xl md:grid-cols-[0.85fr_1.15fr] md:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-muted-foreground">Concierge Quote</p>
          <h2 className="mt-4 font-display text-5xl font-black leading-none tracking-[-0.05em]">What shall we restore today?</h2>
          <div className="mt-8 h-3 overflow-hidden rounded-full bg-primary/10"><div className="h-full w-3/4 rounded-full bg-accent transition-all" /></div>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {choices.map(({ label, icon: Icon }) => (
              <button key={label} type="button" onClick={() => setSelected(label)} className={`min-h-32 rounded-[2rem] border p-5 text-left transition ${selected === label ? 'border-primary bg-primary text-primary-foreground' : 'border-primary/10 bg-white/60 hover:bg-white'}`}>
                <Icon className="mb-6 h-7 w-7" /><span className="font-bold">{label}</span>
              </button>
            ))}
          </div>
          <textarea value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Tell us what needs attention: siding, windows, walkways, timing, or property notes." className="min-h-32 w-full rounded-[1.5rem] border border-primary/10 bg-white/70 p-5 text-lg outline-none transition focus:ring-2 focus:ring-accent" />
          <input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Your phone or email" className="min-h-14 w-full rounded-full border border-primary/10 bg-white/70 px-5 text-lg outline-none transition focus:ring-2 focus:ring-accent" />
          <a href={smsLink} className="flex min-h-14 w-full items-center justify-center rounded-full bg-primary px-8 text-lg font-bold text-primary-foreground transition hover:opacity-90 md:w-auto">Request estimate <ArrowRight className="ml-2 h-5 w-5" /></a>
        </div>
      </div>
    </section>
  );
}