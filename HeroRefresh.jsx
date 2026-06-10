import React, { useState } from 'react';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const weathered = 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/9d858dec9_generated_450ddf72.png';
const pristine = 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/ba167eae0_generated_54c6769a.png';

export default function HeroRefresh() {
  const [spot, setSpot] = useState({ x: 68, y: 42 });

  const moveSpot = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setSpot({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 });
  };

  return (
    <section id="home" onMouseMove={moveSpot} className="relative min-h-screen overflow-hidden px-6 py-8 md:px-[12vw]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${weathered})` }} />
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-200" style={{ backgroundImage: `url(${pristine})`, clipPath: `circle(16vw at ${spot.x}% ${spot.y}%)` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/82 to-background/20" />
      <div className="absolute inset-x-[12vw] top-0 hidden h-full border-x border-primary/10 md:block" />
      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col justify-between">
        <header className="flex items-center justify-between">
          <div className="font-display text-xl font-bold tracking-tight">Green Mountain Washing</div>
          <a href="tel:+18023182433" className="rounded-full border border-primary/20 bg-white/40 px-5 py-3 text-sm font-semibold backdrop-blur-xl transition hover:bg-white">802-318-2433</a>
        </header>
        <div className="max-w-4xl py-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/45 px-4 py-2 text-sm font-semibold backdrop-blur-xl"><Star className="h-4 w-4 fill-primary" /> 5.0 rated exterior cleaning in Essex Junction</div>
          <h1 className="font-display text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl lg:text-9xl">Restore the clear value of your home.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">Premium pressure washing and window cleaning for Vermont homes, delivered with friendly service, careful communication, and sparkling results.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-h-12 rounded-full px-7 text-base"><a href="#quote">Get an instant estimate <ArrowRight className="ml-2 h-5 w-5" /></a></Button>
            <Button asChild size="lg" variant="outline" className="min-h-12 rounded-full border-primary/20 bg-white/50 px-7 text-base backdrop-blur-xl"><a href="https://www.google.com/maps/search/?api=1&query=214+River+Rd,+Essex+Junction,+VT+05452" target="_blank" rel="noreferrer"><MapPin className="mr-2 h-5 w-5" /> Directions</a></Button>
          </div>
        </div>
        <p className="hidden max-w-sm text-sm font-medium text-primary/70 md:block">Move your cursor over the home to reveal the Green Mountain Washing clean-state effect.</p>
      </div>
    </section>
  );
}