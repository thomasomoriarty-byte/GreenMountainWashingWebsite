import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, MapPin, ArrowRight, Heart, Leaf, Users } from 'lucide-react';
import Navbar from '@/components/gmw/Navbar';
import Footer from '@/components/gmw/Footer';

const ABOUT_IMG = 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/80357bc6c_generated_image.png';
const HOME_IMG = 'https://media.base44.com/images/public/6a299de1449b8fa273e764f8/da954ca9e_generated_image.png';

const values = [
  { icon: Heart, title: 'Genuine Care', desc: 'We treat every home as if it were our own. Your property is in good hands from the first call to the final rinse.' },
  { icon: Leaf, title: 'Eco-Friendly', desc: 'We use biodegradable, environmentally responsible cleaning solutions that are safe for your family, pets, and landscape.' },
  { icon: Users, title: 'Community First', desc: 'We\'re proud to be a local Vermont business. Supporting our neighbors and community is at the heart of everything we do.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-primary px-6 pb-20 pt-36 text-primary-foreground md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] opacity-70">Our Story</p>
          <h1 className="mt-3 font-display text-5xl font-black leading-tight tracking-[-0.04em] md:text-7xl">About Green Mountain Washing</h1>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-4xl font-black tracking-[-0.04em] md:text-5xl">Vermont's trusted exterior cleaning team.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Green Mountain Washing was founded with a simple mission: bring genuine, professional exterior cleaning to Vermont homeowners — with the kind of friendly, honest service you'd expect from a neighbor.</p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">We're a locally owned and operated business based right here in Essex Junction. Every member of our team is trained, insured, and takes real pride in delivering spotless results. We're not a franchise or a call center — when you contact us, you speak to the people who will actually show up and do the work.</p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">Our Google reviews speak for themselves: a perfect 5.0 rating from real Vermont homeowners who trust us with their biggest investment.</p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-primary/10 bg-white p-4 shadow-md w-fit">
              <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}</div>
              <div><div className="font-bold text-lg">5.0 / 5.0</div><div className="text-sm text-muted-foreground">Google Rating · Essex Junction, VT</div></div>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary/10">
            <img src={ABOUT_IMG} alt="Green Mountain Washing team" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/30 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">Our Values</p>
            <h2 className="mt-2 font-display text-4xl font-black tracking-[-0.04em] md:text-5xl">What drives us every day.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-[2rem] bg-white p-8 shadow-lg shadow-primary/5">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary/10">
            <img src={HOME_IMG} alt="Vermont home" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent">Service Area</p>
            <h2 className="mt-2 font-display text-4xl font-black tracking-[-0.04em] md:text-5xl">Proudly serving Chittenden County and beyond.</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">Based in Essex Junction, we serve homeowners throughout the greater Burlington area and surrounding Vermont communities.</p>
            <ul className="mt-6 grid grid-cols-2 gap-2">
              {['Essex Junction', 'Burlington', 'Williston', 'Colchester', 'Winooski', 'South Burlington', 'Milton', 'Shelburne', 'Hinesburg', 'Richmond'].map((town) => (
                <li key={town} className="flex items-center gap-2 text-base"><MapPin className="h-4 w-4 shrink-0 text-accent" /> {town}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">Don't see your town? Give us a call — we may still be able to help.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="font-display text-4xl font-black tracking-[-0.04em] md:text-5xl">Ready to work together?</h2>
          <p className="mx-auto mt-4 max-w-lg text-lg opacity-80">Book your free estimate and see why Vermont homeowners trust Green Mountain Washing.</p>
          <Link to="/booking" className="mt-8 inline-flex min-h-14 items-center rounded-full bg-white px-10 text-base font-bold text-primary transition hover:opacity-90">
            Book a Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}