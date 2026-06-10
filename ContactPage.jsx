import React, { useState } from 'react';
import { Phone, Clock, CheckCircle } from 'lucide-react';
import Navbar from '@/components/gmw/Navbar';
import Footer from '@/components/gmw/Footer';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Message from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:802-318-2433@sms.email?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const contacts = [
    { icon: Phone, label: 'Phone / Text', value: '802-318-2433', href: 'tel:+18023182433' },
    { icon: Clock, label: 'Hours', value: 'Open 24 Hours — Quote requests anytime', href: null },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary px-6 pb-20 pt-36 text-primary-foreground md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] opacity-70">Reach Out</p>
          <h1 className="mt-3 font-display text-5xl font-black leading-tight tracking-[-0.04em] md:text-7xl">Contact Us</h1>
          <p className="mt-4 max-w-xl text-lg opacity-80">We'd love to hear from you. Call, text, or send us a message and we'll get back to you fast.</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.2fr]">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-3xl font-black tracking-[-0.03em]">Get in touch</h2>
            <p className="mt-3 text-base leading-8 text-muted-foreground">We're a small local team, so when you reach out you're talking directly to the people who will do your job. No call centers, no runaround.</p>
            <div className="mt-8 space-y-4">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 rounded-2xl border border-primary/10 bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="mt-1 text-base font-semibold text-primary hover:text-accent transition">{value}</a>
                    ) : (
                      <div className="mt-1 text-base font-semibold">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed */}
            <div className="mt-6 overflow-hidden rounded-[2rem] shadow-lg">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=10PFTTh132jnwK6zps-dnmXUqGvhwG_8&ehbc=2E312F"
                width="100%" height="320" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Service Area Map"
              />
            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-[2.5rem] border border-primary/10 bg-white p-8 shadow-xl shadow-primary/5 md:p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="h-16 w-16 text-accent" />
                <h3 className="mt-4 font-display text-3xl font-black">Message Sent!</h3>
                <p className="mt-2 text-base text-muted-foreground">Thank you for reaching out. We'll get back to you shortly.</p>
                <button onClick={() => setSent(false)} className="mt-6 rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold hover:bg-primary/5">Send Another Message</button>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-black">Send Us a Message</h2>
                <p className="mt-1 text-sm text-muted-foreground">We typically respond within a few hours.</p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-bold">Full Name *</label>
                      <input required value={form.name} onChange={set('name')} placeholder="Jane Smith" className="w-full rounded-xl border border-primary/15 bg-secondary/30 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-bold">Phone Number</label>
                      <input value={form.phone} onChange={set('phone')} placeholder="(802) 555-0100" className="w-full rounded-xl border border-primary/15 bg-secondary/30 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold">Email Address *</label>
                    <input required type="email" value={form.email} onChange={set('email')} placeholder="jane@example.com" className="w-full rounded-xl border border-primary/15 bg-secondary/30 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold">Message *</label>
                    <textarea required value={form.message} onChange={set('message')} placeholder="Tell us what you need — service type, property details, timing, etc." rows={5} className="w-full rounded-xl border border-primary/15 bg-secondary/30 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <button type="submit" className="flex min-h-14 w-full items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground transition hover:opacity-90">Send Message</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}