import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navbar from '@/components/gmw/Navbar';
import Footer from '@/components/gmw/Footer';

const services = [
  {
    title: 'House Pressure Washing',
    tagline: 'Restore your siding to its original brilliance.',
    img: 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/47fd4e3d4_generated_image.png',
    desc: 'Over time, dirt, mold, mildew, and algae build up on your home\'s exterior. Our professional pressure washing service safely and effectively removes years of grime, restoring your siding\'s original color and protecting your home\'s value.',
    includes: ['Vinyl, wood & fiber cement siding', 'Foundation washing', 'Fascia and soffit cleaning', 'Full rinse and inspection', 'Eco-friendly solutions', 'Before & after walk-through'],
  },
  {
    title: 'Window Cleaning',
    tagline: 'Crystal-clear windows. Zero streaks. Every time.',
    img: 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/c3fa5dd31_generated_image.png',
    desc: 'Dirty windows block natural light and diminish your home\'s curb appeal. Our window cleaning professionals use the right tools and techniques to leave every pane spotless — from ground floor to upper stories.',
    includes: ['Exterior window washing', 'Screen cleaning & reinstall', 'Frame and sill detailing', 'Streak-free finish guaranteed', 'Multi-story capability', 'Final inspection every pane'],
  },
  {
    title: 'Deck & Patio Cleaning',
    tagline: 'Bring your outdoor living space back to life.',
    img: 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/d25413764_generated_image.png',
    desc: 'Decks and patios take a beating from Vermont\'s harsh winters and humid summers. Our specialized soft and pressure washing treatments safely remove mold, mildew, algae, and embedded dirt from wood, composite, and stone surfaces.',
    includes: ['Wood and composite decking', 'Flagstone & slate patios', 'Concrete and pavers', 'Outdoor furniture areas', 'Stair and railing surfaces', 'Pre-stain prep available'],
  },
  {
    title: 'Driveway & Walkway Cleaning',
    tagline: 'Make a lasting first impression.',
    img: 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/13cdf286c_generated_image.png',
    desc: 'Driveways and walkways accumulate oil stains, tire marks, moss, and years of discoloration. Our high-pressure equipment blasts away even the toughest buildup, leaving clean, bright surfaces that enhance your property\'s curb appeal.',
    includes: ['Concrete driveways', 'Asphalt driveways', 'Brick and paver walkways', 'Slate and stone paths', 'Oil stain treatment', 'Moss and algae removal'],
  },
  {
    title: 'Roof Cleaning',
    tagline: 'Protect your roof. Extend its lifespan.',
    img: 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/7de40ec41_generated_image.png',
    desc: 'Black streaks, moss, and lichen on your roof aren\'t just ugly — they shorten the life of your shingles. Our soft-wash roof cleaning method safely eliminates these organisms without damaging your roof\'s surface.',
    includes: ['Asphalt shingle roofs', 'Soft-wash low pressure method', 'Moss & algae treatment', 'Black streak (Gloeocapsa Magma) removal', 'Gutter exterior cleaning', 'Safe eco-friendly biocides'],
  },
  {
    title: 'Gutter Cleaning',
    tagline: 'Keep water flowing where it should.',
    img: 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/5e2cffb8e_generated_image.png',
    desc: 'Clogged gutters lead to water damage, foundation problems, and ice dams in Vermont winters. We clear your gutters of all debris, flush downspouts, and check for any issues before they become costly repairs.',
    includes: ['Full gutter debris removal', 'Downspout flushing', 'Gutter exterior washing', 'Leak and damage inspection', 'Before & after photos provided', 'Seasonal scheduling available'],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="bg-primary px-6 pb-20 pt-36 text-primary-foreground md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] opacity-70">What We Do</p>
          <h1 className="mt-3 font-display text-5xl font-black leading-tight tracking-[-0.04em] md:text-7xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 opacity-80">Professional exterior cleaning solutions for every part of your Vermont home. All work is done by insured, trained professionals using safe, eco-friendly products.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl space-y-16">
          {services.map((s, i) => (
            <div key={s.title} className={`grid items-center gap-10 rounded-[2.5rem] border border-primary/10 bg-white p-8 shadow-xl shadow-primary/5 md:grid-cols-2 md:p-12 ${i % 2 !== 0 ? 'md:[&>div:first-child]:order-2' : ''}`}>
              <div className="overflow-hidden rounded-[2rem]">
                <img src={s.img} alt={s.title} className="h-72 w-full object-cover transition duration-500 hover:scale-105 md:h-96" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">{s.tagline}</p>
                <h2 className="mt-2 font-display text-3xl font-black tracking-[-0.03em] md:text-4xl">{s.title}</h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">{s.desc}</p>
                <h3 className="mt-6 font-bold">What's Included:</h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 shrink-0 text-accent" /> {item}</li>
                  ))}
                </ul>
                <Link to="/booking" className="mt-8 flex min-h-12 w-fit items-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground transition hover:opacity-90">
                  Book This Service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="font-display text-4xl font-black tracking-[-0.04em] md:text-5xl">Not sure what you need?</h2>
          <p className="mx-auto mt-4 max-w-lg text-lg opacity-80">Give us a call or book online. We'll walk your property and recommend exactly what's needed — no upselling, just honest advice.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/booking" className="flex min-h-14 items-center rounded-full bg-white px-8 font-bold text-primary">Get a Free Estimate</Link>
            <a href="tel:+18023182433" className="flex min-h-14 items-center gap-2 rounded-full border border-white/30 px-8 font-semibold hover:bg-white/10"><Phone className="h-5 w-5" /> 802-318-2433</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}