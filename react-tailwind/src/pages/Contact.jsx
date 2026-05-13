import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const socialLinks = [
    {
        name: 'Instagram',
        handle: '@lensartstudio',
        href: '#',
        icon: (
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
    {
        name: 'YouTube',
        handle: 'LensArt Studio',
        href: '#',
        icon: (
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
    {
        name: 'Facebook',
        handle: 'LensArt Studio',
        href: '#',
        icon: (
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
]

const contactInfo = [
    {
        icon: (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        label: 'Studio Address',
        value: '123 Studio Lane, Creative District, New York, NY 10001',
    },
    {
        icon: (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        label: 'Phone',
        value: '+1 (555) 123-4567',
    },
    {
        icon: (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        label: 'Email',
        value: 'hello@lensartstudio.com',
    },
    {
        icon: (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        label: 'Business Hours',
        value: 'Mon – Sat: 9:00 AM – 7:00 PM',
    },
]

const services = [
    'Wedding Photography',
    'Wedding Videography',
    'Product Shoot',
    'Podcast Shoot',
    'Drone Shoot',
    'Cinematic Video',
    'Video Editing',
    'Other',
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
    const [status, setStatus] = useState('idle')

    const handleChange = (e) => {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')
        await new Promise((r) => setTimeout(r, 1500))
        setStatus('success')
        setForm({ name: '', email: '', phone: '', service: '', message: '' })
        setTimeout(() => setStatus('idle'), 4000)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Hero */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                <img
                    src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="Contact hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <p className="section-subtitle">Let's Connect</p>
                        <h1 className="section-title text-5xl md:text-7xl">
                            Start Your <span className="gold-text">Project</span>
                        </h1>
                        <p className="mt-6 text-white/60 text-lg max-w-xl mx-auto">
                            Tell us about your vision. We'll respond within 24 hours to discuss how we can bring it to life.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Contact section */}
            <section className="py-24 bg-dark-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Left: info */}
                        <div className="lg:col-span-2 space-y-6">
                            <AnimatedSection>
                                <h2 className="section-title text-3xl mb-2">
                                    Get In <span className="gold-text">Touch</span>
                                </h2>
                                <p className="text-white/50 text-sm leading-relaxed mb-8">
                                    Whether you have a question, a project in mind, or just want to say hello — we'd love to hear from you.
                                </p>
                            </AnimatedSection>

                            <div className="space-y-4">
                                {contactInfo.map((info, i) => (
                                    <AnimatedSection key={info.label} delay={i * 0.07}>
                                        <div className="flex gap-4 p-4 rounded-xl border border-white/10 bg-dark-700/50 hover:border-gold/30 transition-all duration-300">
                                            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <div className="text-white/50 text-xs font-medium uppercase tracking-wide mb-0.5">{info.label}</div>
                                                <div className="text-white text-sm">{info.value}</div>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>

                            <AnimatedSection delay={0.4}>
                                <div className="p-4 rounded-xl border border-white/10 bg-dark-700/50">
                                    <p className="text-white/50 text-xs font-medium uppercase tracking-wide mb-4">Follow Us</p>
                                    <div className="flex gap-3">
                                        {socialLinks.map((s) => (
                                            <a
                                                key={s.name}
                                                href={s.href}
                                                title={s.name}
                                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
                                            >
                                                {s.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Right: form */}
                        <div className="lg:col-span-3">
                            <AnimatedSection direction="left" delay={0.1}>
                                <form
                                    onSubmit={handleSubmit}
                                    className="p-8 rounded-2xl border border-white/10 bg-dark-700/60 backdrop-blur-sm space-y-5"
                                >
                                    <h3 className="font-display text-2xl text-white mb-2">Book a Session</h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="text-white/50 text-sm mb-2 block">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/60 transition-colors duration-300"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-white/50 text-sm mb-2 block">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/60 transition-colors duration-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="text-white/50 text-sm mb-2 block">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 000-0000"
                                                className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/60 transition-colors duration-300"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-white/50 text-sm mb-2 block">Service Needed</label>
                                            <select
                                                name="service"
                                                value={form.service}
                                                onChange={handleChange}
                                                className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/60 transition-colors duration-300 appearance-none"
                                            >
                                                <option value="" className="bg-dark-800">Select a service</option>
                                                {services.map((s) => (
                                                    <option key={s} value={s} className="bg-dark-800">{s}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-white/50 text-sm mb-2 block">Your Message *</label>
                                        <textarea
                                            name="message"
                                            required
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={5}
                                            placeholder="Tell us about your project, event date, location, and any specific requirements..."
                                            className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/60 transition-colors duration-300 resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full btn-gold justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : status === 'success' ? (
                                            <>
                                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                                Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L15 22l-4-9-9-4 20-7z" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="bg-dark-700 border-t border-white/10">
                <AnimatedSection>
                    <div className="w-full h-[420px] overflow-hidden">
                        <iframe
                            title="Studio Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343!2d-74.00425882426903!3d40.74076963646953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sChelsey%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.8)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </AnimatedSection>
            </section>
        </motion.div>
    )
}
