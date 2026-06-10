import React, { useState } from 'react';
import { CheckCircle, ChevronRight, Home, PanelsTopLeft, Waves, DoorOpen, Layers, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/gmw/Navbar';
import Footer from '@/components/gmw/Footer';

const services = [
  { id: 'pressure', label: 'House Pressure Washing', icon: Home },
  { id: 'windows', label: 'Window Cleaning', icon: PanelsTopLeft },
  { id: 'deck', label: 'Deck & Patio Cleaning', icon: DoorOpen },
  { id: 'driveway', label: 'Driveway & Walkway', icon: Waves },
  { id: 'roof', label: 'Roof Cleaning', icon: Layers },
  { id: 'gutter', label: 'Gutter Cleaning', icon: Droplets },
];

const steps = ['Service', 'Details', 'Contact', 'Confirm'];

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ services: [], address: '', size: '', notes: '', name: '', email: '', phone: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const toggleService = (id) => setForm({ ...form, services: form.services.includes(id) ? form.services.filter((s) => s !== id) : [...form.services, id] });
  const progress = ((step + 1) / steps.length) * 100;

  const handleSubmit = () => {
    const body = `Booking Request\n\nServices: ${form.services.join(', ')}\nAddress: ${form.address}\nHome Size: ${form.size}\nPreferred Date: ${form.date}\nNotes: ${form.notes}\n\nContact:\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`;
    window.open(`sms:+18023182433?&body=${encodeURIComponent(body)}`);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <div className="rounded-[3rem] border border-primary/10 bg-white p-12 shadow-2xl shadow-primary/10 md:p-16">
            <CheckCircle className="mx-auto h-20 w-20 text-accent" />
            <h1 className="mt-6 font-display text-4xl font-black tracking-[-0.04em]">Booking Request Sent!</h1>
            <p className="mx-auto mt-4 max-w-md text-lg leading-8 text-muted-foreground">Thank you, {form.name}! We've received your request and will reach out to confirm your appointment within a few hours.</p>
            <p className="mt-2 font-bold text-accent">802-318-2433</p>
            <Link to="/" className="mt-8 inline-flex min-h-14 items-center rounded-full bg-primary px-10 text-base font-bold text-primary-foreground">Back to Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary px-6 pb-16 pt-36 text-primary-foreground md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-black tracking-[-0.04em] md:text-6xl">Book Your Free Estimate</h1>
          <p className="mt-3 text-lg opacity-80">Takes less than 2 minutes. No obligation. We'll reach out to confirm.</p>
        </div>
      </section>

      <section className="px-6 py-12 pb-24 md:px-10">
        <div className="mx-auto max-w-3xl">
          {/* Progress */}
          <div className="mb-10">
            <div className="mb-3 flex justify-between">
              {steps.map((s, i) => (
                <div key={s} className={`text-xs font-bold uppercase tracking-[0.15em] ${i <= step ? 'text-primary' : 'text-muted-foreground'}`}>{s}</div>
              ))}
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-primary/10">
              <div className="h-full rounded-full bg-accent transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-primary/10 bg-white p-8 shadow-xl shadow-primary/5 md:p-10">

            {/* Step 0: Service Selection */}
            {step === 0 && (
              <div>
                <h2 className="font-display text-3xl font-black tracking-[-0.03em]">What can we clean for you?</h2>
                <p className="mt-1 text-muted-foreground">Select all that apply.</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {services.map(({ id, label, icon: Icon }) => (
                    <button key={id} onClick={() => toggleService(id)} className={`flex min-h-16 items-center gap-3 rounded-2xl border px-5 text-left transition ${form.services.includes(id) ? 'border-primary bg-primary text-primary-foreground' : 'border-primary/10 hover:bg-primary/5'}`}>
                      <Icon className="h-5 w-5 shrink-0" /><span className="font-semibold">{label}</span>
                      {form.services.includes(id) && <CheckCircle className="ml-auto h-5 w-5 shrink-0" />}
                    </button>
                  ))}
                </div>
                <button disabled={form.services.length === 0} onClick={() => setStep(1)} className="mt-8 flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-primary text-base font-bold text-primary-foreground transition hover:opacity-90 disabled:opacity-40">
                  Continue <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}

            {/* Step 1: Property Details */}
            {step === 1 && (
              <div>
                <h2 className="font-display text-3xl font-black tracking-[-0.03em]">Tell us about your property.</h2>
                <p className="mt-1 text-muted-foreground">This helps us give you an accurate estimate.</p>
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-bold">Property Address *</label>
                    <input required value={form.address} onChange={set('address')} placeholder="123 Maple St, Essex Junction, VT" className="w-full rounded-xl border border-primary/15 bg-secondary/30 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold">Approximate Home Size</label>
                    <select value={form.size} onChange={set('size')} className="w-full rounded-xl border border-primary/15 bg-secondary/30 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
                      <option value="">Select size...</option>
                      <option>Under 1,000 sq ft</option>
                      <option>1,000 – 1,500 sq ft</option>
                      <option>1,500 – 2,500 sq ft</option>
                      <option>2,500 – 3,500 sq ft</option>
                      <option>Over 3,500 sq ft</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold">Preferred Date</label>
                    <input type="date" value={form.date} onChange={set('date')} min={new Date().toISOString().split('T')[0]} className="w-full rounded-xl border border-primary/15 bg-secondary/30 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold">Additional Notes</label>
                    <textarea value={form.notes} onChange={set('notes')} rows={3} placeholder="Anything we should know — access instructions, special concerns, etc." className="w-full rounded-xl border border-primary/15 bg-secondary/30 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <button onClick={() => setStep(0)} className="flex min-h-14 items-center gap-2 rounded-full border border-primary/20 px-6 font-semibold transition hover:bg-primary/5">Back</button>
                  <button disabled={!form.address} onClick={() => setStep(2)} className="flex flex-1 min-h-14 items-center justify-center gap-2 rounded-full bg-primary text-base font-bold text-primary-foreground transition hover:opacity-90 disabled:opacity-40">Continue <ChevronRight className="h-5 w-5" /></button>
                </div>
              </div>
            )}

            {/* Step 2: Contact Info */}
            {step === 2 && (
              <div>
                <h2 className="font-display text-3xl font-black tracking-[-0.03em]">How do we reach you?</h2>
                <p className="mt-1 text-muted-foreground">We'll confirm your appointment and send a reminder.</p>
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-bold">Full Name *</label>
                    <input required value={form.name} onChange={set('name')} placeholder="Jane Smith" className="w-full rounded-xl border border-primary/15 bg-secondary/30 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold">Phone Number *</label>
                    <input required value={form.phone} onChange={set('phone')} placeholder="(802) 555-0100" className="w-full rounded-xl border border-primary/15 bg-secondary/30 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold">Email Address</label>
                    <input type="email" value={form.email} onChange={set('email')} placeholder="jane@example.com" className="w-full rounded-xl border border-primary/15 bg-secondary/30 px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <button onClick={() => setStep(1)} className="flex min-h-14 items-center gap-2 rounded-full border border-primary/20 px-6 font-semibold transition hover:bg-primary/5">Back</button>
                  <button disabled={!form.name || !form.phone} onClick={() => setStep(3)} className="flex flex-1 min-h-14 items-center justify-center gap-2 rounded-full bg-primary text-base font-bold text-primary-foreground transition hover:opacity-90 disabled:opacity-40">Review & Confirm <ChevronRight className="h-5 w-5" /></button>
                </div>
              </div>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <div>
                <h2 className="font-display text-3xl font-black tracking-[-0.03em]">Review your booking.</h2>
                <p className="mt-1 text-muted-foreground">Everything look good? Submit to send your request.</p>
                <div className="mt-6 space-y-3 rounded-2xl border border-primary/10 bg-secondary/30 p-6">
                  <div className="flex justify-between"><span className="font-bold">Services</span><span className="text-right text-muted-foreground">{form.services.join(', ')}</span></div>
                  <div className="flex justify-between"><span className="font-bold">Address</span><span className="text-right text-muted-foreground">{form.address}</span></div>
                  {form.size && <div className="flex justify-between"><span className="font-bold">Home Size</span><span className="text-muted-foreground">{form.size}</span></div>}
                  {form.date && <div className="flex justify-between"><span className="font-bold">Preferred Date</span><span className="text-muted-foreground">{form.date}</span></div>}
                  <div className="border-t border-primary/10 pt-3"><div className="flex justify-between"><span className="font-bold">Name</span><span className="text-muted-foreground">{form.name}</span></div></div>
                  <div className="flex justify-between"><span className="font-bold">Phone</span><span className="text-muted-foreground">{form.phone}</span></div>
                  {form.email && <div className="flex justify-between"><span className="font-bold">Email</span><span className="text-muted-foreground">{form.email}</span></div>}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">By submitting, we'll receive your request and reach out within a few hours to confirm your appointment and provide a free estimate.</p>
                <div className="mt-6 flex gap-3">
                  <button onClick={() => setStep(2)} className="flex min-h-14 items-center gap-2 rounded-full border border-primary/20 px-6 font-semibold transition hover:bg-primary/5">Back</button>
                  <button onClick={handleSubmit} className="flex flex-1 min-h-14 items-center justify-center gap-2 rounded-full bg-accent text-base font-bold text-accent-foreground transition hover:opacity-90">
                    <CheckCircle className="h-5 w-5" /> Submit Booking Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}