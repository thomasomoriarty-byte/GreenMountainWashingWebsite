import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, ArrowRight } from 'lucide-react';
import Navbar from '@/components/gmw/Navbar';
import Footer from '@/components/gmw/Footer';

const faqs = [
  {
    category: 'General',
    items: [
      { q: 'Are you licensed and insured?', a: 'Yes. Green Mountain Washing is fully insured with general liability coverage. You can have complete peace of mind knowing your property is protected on every job.' },
      { q: 'What areas do you serve?', a: 'We\'re based in Essex Junction and serve the greater Chittenden County area, including Burlington, Williston, Colchester, Winooski, South Burlington, Milton, Shelburne, Hinesburg, Richmond, and surrounding communities. Not sure if we cover your area? Just give us a call.' },
      { q: 'How do I get a quote?', a: 'You can request a free estimate right on our website using the booking form, or simply call or text us at 802-318-2433. We\'ll typically respond same day and can often provide a same-week service appointment.' },
      { q: 'What are your hours?', a: 'We accept quote requests and inquiries 24/7. Cleaning services are scheduled based on weather and availability, typically Monday through Saturday during daylight hours.' },
    ],
  },
  {
    category: 'Pressure Washing',
    items: [
      { q: 'Is pressure washing safe for my home\'s siding?', a: 'Yes, when done by trained professionals. We adjust pressure settings based on the surface type — using lower pressure (soft washing) for delicate surfaces like wood siding or painted areas, and higher pressure for concrete and brick. We never use a "one size fits all" approach.' },
      { q: 'Will pressure washing damage my landscaping?', a: 'We take care to protect your plants and landscaping. We pre-wet surrounding plants, use eco-friendly solutions, and rinse thoroughly to ensure no harm is done to your yard.' },
      { q: 'How often should I pressure wash my home?', a: 'Most homes benefit from an annual exterior wash. Homes surrounded by trees, in shaded areas, or in humid climates may benefit from more frequent cleaning. We can assess your specific situation and recommend a schedule.' },
      { q: 'Do I need to be home during the service?', a: 'Not necessarily. As long as we have access to an outdoor water spigot and the areas to be cleaned, you don\'t need to be present. We\'ll contact you before and after the job and send photos of the completed work.' },
    ],
  },
  {
    category: 'Window Cleaning',
    items: [
      { q: 'Do you clean interior windows as well?', a: 'Our standard window cleaning service focuses on exterior windows. We can discuss interior window cleaning on a case-by-case basis — just ask when you book.' },
      { q: 'How long does window cleaning take?', a: 'This depends on the size of your home and number of windows. A typical single-family home takes 1–3 hours. We\'ll give you a more accurate time estimate when we assess your property.' },
      { q: 'What if it rains right after you clean?', a: 'A light rain won\'t affect our streak-free results since we use a water-fed pole system with purified water. Heavy rain right after cleaning is rare to impact the outcome. If you\'re unhappy, we\'ll come back and re-clean at no charge.' },
    ],
  },
  {
    category: 'Pricing & Booking',
    items: [
      { q: 'How much does pressure washing cost?', a: 'Pricing varies based on the size of your home, the services requested, and the level of buildup. We offer free, no-obligation estimates — there\'s never a surprise charge. Most single-family home washings range from $150–$400.' },
      { q: 'Do you require a deposit?', a: 'We do not require a deposit for standard residential jobs. Payment is collected upon completion of service.' },
      { q: 'What payment methods do you accept?', a: 'We accept cash, check, Venmo, and all major credit/debit cards.' },
      { q: 'How far in advance should I book?', a: 'We recommend booking 1–2 weeks in advance, especially during peak spring and summer seasons. That said, we often have flexibility for same-week appointments — don\'t hesitate to reach out.' },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all ${open ? 'border-primary/20 bg-white shadow-lg shadow-primary/5' : 'border-primary/10 bg-white/50'}`}>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="text-base font-bold">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-accent transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="border-t border-primary/10 px-6 pb-6 pt-4 text-base leading-8 text-muted-foreground">{a}</div>}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary px-6 pb-20 pt-36 text-primary-foreground md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] opacity-70">Got Questions?</p>
          <h1 className="mt-3 font-display text-5xl font-black leading-tight tracking-[-0.04em] md:text-7xl">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-xl text-lg opacity-80">Everything you need to know before booking. Can't find your answer? Call or text us anytime.</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl space-y-14">
          {faqs.map(({ category, items }) => (
            <div key={category}>
              <h2 className="mb-6 font-display text-2xl font-black tracking-[-0.03em]">{category}</h2>
              <div className="space-y-3">
                {items.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="font-display text-4xl font-black tracking-[-0.04em]">Still have a question?</h2>
          <p className="mx-auto mt-4 max-w-lg text-lg opacity-80">We're happy to help. Give us a call, send a text, or fill out our contact form.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="flex min-h-14 items-center rounded-full bg-white px-8 font-bold text-primary">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
            <a href="tel:+18023182433" className="flex min-h-14 items-center gap-2 rounded-full border border-white/30 px-8 font-semibold hover:bg-white/10"><Phone className="h-5 w-5" /> 802-318-2433</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}