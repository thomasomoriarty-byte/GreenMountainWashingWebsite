import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Phone, Shield, Clock, ThumbsUp, Droplets, ChevronRight } from 'lucide-react';
import Navbar from '@/components/gmw/Navbar';
import Footer from '@/components/gmw/Footer';

const HERO_IMG = 'https://media.base44.com/images/public/6a29bdbdbb9bde113e7ec69d/734b450cf_32ACE00A-1E94-49BB-B1A5-3A49EAD31D24.png';
const ABOUT_IMG = 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/80357bc6c_generated_image.png';

const services = [
  { title: 'Pressure Washing', desc: 'Deep clean your siding, walkways, and exterior surfaces.', img: 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/47fd4e3d4_generated_image.png' },
  { title: 'Window Cleaning', desc: 'Streak-free shine on every pane, inside and out.', img: 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/c3fa5dd31_generated_image.png' },
  { title: 'Deck & Patio', desc: 'Restore wood and stone surfaces to their original beauty.', img: 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/d25413764_generated_image.png' },
  { title: 'Roof Cleaning', desc: 'Safe soft-wash removal of moss, algae, and stains.', img: 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/7de40ec41_generated_image.png' },
];

const reviews = [
  { name: 'Katie Peterson', text: '10/10 experience! Friendly, efficient, affordable, great at communicating and extremely thorough. Our home is sparkling!', stars: 5 },
  { name: 'Nicco Sourdiff', text: 'Very nice and friendly! Did a very good job. Would recommend!', stars: 5 },
  { name: 'Emma', text: 'Great job. Very friendly. House looks amazing. Totally would recommend!!!!', stars: 5 },
];

const whyUs = [
  { icon: Shield, title: 'Fully Insured', desc: 'Peace of mind on every job — we carry full liability coverage.' },
  { icon: ThumbsUp, title: '5-Star Rated', desc: 'Perfect 5.0 rating from real local homeowners on Google.' },
  { icon: Clock, title: 'Available 24/7', desc: 'Request a quote any time — we respond fast.' },
  { icon: CheckCircle, title: 'Satisfaction Guaranteed', desc: 'We don\'t leave until you\'re completely happy with the results.' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="sticky top-0 h-screen -mb-screen" style={{ marginBottom: '-100vh' }}>
          <img src={HERO_IMG} alt="Clean Vermont home" className="absolute inset-0 w-full h-full" style={{ objectFit: 'cover', objectPosition: '75% center' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-32 md:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-4 py-2 text-sm font-bold backdrop-blur-xl">
              <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />)}</div>
              5.0 Rated · Essex Junction, Vermont
            </div>
            <h1 className="font-display text-5xl font-black leading-[0.95] tracking-[-0.04em] text-primary md:text-7xl lg:text-8xl">
              Vermont's Premier<br />
              <span className="text-accent">Exterior Cleaning</span><br />
              Experts.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Professional pressure washing and window cleaning for Vermont homes. Friendly service, clear communication, and results that genuinely sparkle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/booking" className="flex min-h-14 items-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground transition hover:opacity-90">
                Book a Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="tel:+18023182433" className="flex min-h-14 items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-8 text-base font-semibold backdrop-blur-xl transition hover:bg-white">
                <Phone className="h-5 w-5" /> 802-318-2433
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              {['Insured & Professional', 'Same-Week Service', 'Satisfaction Guaranteed'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold"><CheckCircle className="h-4 w-4 text-accent" /> {item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">Our Services</p>
              <h2 className="mt-2 font-display text-4xl font-black tracking-[-0.04em] md:text-5xl">Everything your home's exterior needs.</h2>
            </div>
            <Link to="/services" className="flex min-h-12 w-fit items-center gap-2 rounded-full border border-primary/20 px-6 text-sm font-bold transition hover:bg-primary/5">
              View All Services <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.title} to="/services" className="group overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-lg shadow-primary/5 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-bold text-accent">Learn more <ChevronRight className="h-4 w-4" /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary px-6 py-24 text-primary-foreground md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] opacity-70">Why Green Mountain Washing</p>
            <h2 className="mt-2 font-display text-4xl font-black tracking-[-0.04em] md:text-5xl">Built on trust. Driven by results.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 opacity-80">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary/10">
            <img src={ABOUT_IMG} alt="Green Mountain Washing team" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">About Us</p>
            <h2 className="mt-2 font-display text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">Local. Friendly. Thorough.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Green Mountain Washing is a locally owned and operated exterior cleaning company serving Essex Junction and the greater Burlington, Vermont area. We take pride in every job — from a single window to a full home refresh.</p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">Our team is professional, insured, and genuinely cares about your property. We use safe, eco-friendly cleaning solutions and the right techniques for every surface.</p>
            <Link to="/about" className="mt-8 flex min-h-12 w-fit items-center gap-2 rounded-full bg-primary px-6 text-base font-bold text-primary-foreground transition hover:opacity-90">
              Learn More About Us <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-secondary/40 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">Customer Reviews</p>
            <h2 className="mt-2 font-display text-4xl font-black tracking-[-0.04em] md:text-5xl">What our customers say.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map(({ name, text, stars }) => (
              <div key={name} className="rounded-[2rem] bg-white p-8 shadow-lg shadow-primary/5">
                <div className="mb-4 flex gap-1">{Array.from({ length: stars }).map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}</div>
                <p className="text-lg leading-8 text-muted-foreground">"{text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{name[0]}</div>
                  <div className="font-bold">{name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="https://www.google.com/search?q=Green+Mountain+Washing+Essex+Junction+reviews" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-8 text-base font-bold text-primary-foreground transition hover:opacity-90">
              Leave a Google Review <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-primary px-8 py-14 text-center text-primary-foreground">
          <Droplets className="mx-auto mb-4 h-12 w-12 opacity-70" />
          <h2 className="font-display text-4xl font-black tracking-[-0.04em] md:text-6xl">Ready for a sparkling home?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 opacity-80">Book your free estimate today. We serve Essex Junction and all surrounding Vermont communities.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/booking" className="flex min-h-14 items-center rounded-full bg-white px-8 text-base font-bold text-primary transition hover:opacity-90">Book Free Estimate</Link>
            <a href="tel:+18023182433" className="flex min-h-14 items-center gap-2 rounded-full border border-white/30 px-8 text-base font-semibold transition hover:bg-white/10"><Phone className="h-5 w-5" /> 802-318-2433</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}