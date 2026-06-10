import React from 'react';

const images = [
  { src: 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/1a9ed1431_generated_3b012268.png', title: 'Streak-free glass', span: 'md:row-span-2' },
  { src: 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/10331d0ec_generated_8fb84785.png', title: 'Fresh slate texture', span: '' },
  { src: 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/da6dfd742_generated_03c9fd2b.png', title: 'Restored cedar grain', span: '' },
];

export default function ResultsGallery() {
  return (
    <section id="results" className="px-6 py-24 md:px-[12vw]">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-2xl font-display text-5xl font-black leading-none tracking-[-0.05em] md:text-7xl">Texture, tone, and proof.</h2>
        <p className="max-w-md text-lg leading-8 text-muted-foreground">A premium clean is visible in the small details: clearer reflections, brighter siding, and surfaces that feel renewed.</p>
      </div>
      <div className="grid auto-rows-[18rem] gap-5 md:grid-cols-3">
        {images.map((image) => (
          <figure key={image.title} className={`${image.span} group relative overflow-hidden rounded-[2.5rem] bg-primary/10 shadow-2xl shadow-primary/10`}>
            <img src={image.src} alt={image.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <figcaption className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/50 bg-white/55 p-5 font-display text-2xl font-bold backdrop-blur-2xl">{image.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}