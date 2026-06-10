import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  ['Katie Peterson', '10/10 experience. Friendly, efficient, affordable, great at communicating and extremely thorough. Our home is sparkling!'],
  ['Nicco Sourdiff', 'Very nice and friendly! Did a very good job. Would recommend!'],
  ['antonym', 'Great job. Very friendly. House looks amazing. Totally would recommend!'],
];

export default function Testimonials() {
  return (
    <section id="reviews" className="px-6 py-24 md:px-[12vw]">
      <div className="rounded-[3rem] bg-primary p-8 text-primary-foreground md:p-12">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="font-bold uppercase tracking-[0.25em] opacity-70">Review Summary</p><h2 className="mt-4 font-display text-5xl font-black tracking-[-0.05em] md:text-7xl">5.0 from local homeowners.</h2></div>
          <a href="https://www.google.com/search?q=Green+Mountain+Washing+Essex+Junction+reviews" target="_blank" rel="noreferrer" className="min-h-12 rounded-full bg-white px-6 py-3 text-center font-bold text-primary transition hover:bg-accent">Write a review</a>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map(([name, text]) => (
            <article key={name} className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
              <div className="mb-5 flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="text-lg leading-8 opacity-90">“{text}”</p>
              <p className="mt-6 font-bold">{name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}