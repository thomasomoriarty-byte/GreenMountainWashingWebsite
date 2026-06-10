import React from 'react';
import { CalendarCheck, Phone } from 'lucide-react';

export default function FloatingEstimateBar() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-4xl rounded-full border border-white/60 bg-white/65 p-2 shadow-2xl shadow-primary/15 backdrop-blur-2xl">
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
        <div className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-primary"><CalendarCheck className="h-5 w-5" /> Open 24 hours for quote requests</div>
        <div className="flex w-full gap-2 sm:w-auto">
          <a href="#quote" className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:opacity-90 sm:flex-none">Instant Estimate</a>
          <a href="tel:+18023182433" className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-accent px-5 text-sm font-bold text-accent-foreground transition hover:opacity-90 sm:flex-none"><Phone className="mr-2 h-4 w-4" /> Call</a>
        </div>
      </div>
    </div>
  );
}