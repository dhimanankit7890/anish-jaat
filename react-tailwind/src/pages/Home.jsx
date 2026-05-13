import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import Lightbox from '../components/Lightbox'

// ─── Data ─────────────────────────────────────────────────────────────────────

const heroSlides = [
    {
        image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920',
        label: 'Wedding Photography',
        tagline: 'Every Love Story Deserves a Masterpiece',
    },
    {
        image: 'https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg?auto=compress&cs=tinysrgb&w=1920',
        label: 'Cinematic Video',
        tagline: 'Frames That Speak Louder Than Words',
    },
    {
        image: 'https://images.pexels.com/photos/1034425/pexels-photo-1034425.jpeg?auto=compress&cs=tinysrgb&w=1920',
        label: 'Drone Aerial Shoots',
        tagline: 'Elevate Your Vision From Above',
    },
]

const services = [
    {
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: 'Wedding Photography',
        desc: 'Timeless images capturing every emotion, every glance, every vow on your most special day.',
        color: 'from-rose-900/30 to-transparent',
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        title: 'Product Shoot',
        desc: 'Studio-quality product photography that elevates your brand and drives conversions.',
        color: 'from-blue-900/30 to-transparent',
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        ),
        title: 'Podcast Shoot',
        desc: 'Professional podcast setups with cinematic lighting and multi-camera production.',
        color: 'from-amber-900/30 to-transparent',
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Cinematic Video Shoot',
        desc: 'Hollywood-grade cinematography for commercials, short films, and brand stories.',
        color: 'from-emerald-900/30 to-transparent',
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 3v4M19 17v4M3 7h4M3 17h4" />
            </svg>
        ),
        title: 'Drone Aerial Shoot',
        desc: 'Breathtaking aerial perspectives with FAA-certified operators and 4K footage.',
        color: 'from-sky-900/30 to-transparent',
        highlight: true,
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        ),
        title: 'Cinematic Video Editing',
        desc: 'Post-production magic with color grading, sound design, and cinematic transitions.',
        color: 'from-orange-900/30 to-transparent',
    },
]

const galleryImages = [
    { src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Wedding Ceremony', caption: 'Wedding Ceremony', span: 'col-span-2 row-span-2' },
    { src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Couple Portrait', caption: 'Couple Portrait' },
    { src: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Aerial View', caption: 'Drone Shot' },
    { src: 'https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Cinematic Scene', caption: 'Cinematic Shoot' },
    { src: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Podcast Setup', caption: 'Podcast Studio' },
    { src: 'https://images.pexels.com/photos/1034425/pexels-photo-1034425.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Product Shoot', caption: 'Product Photography' },
    { src: 'https://images.pexels.com/photos/3379932/pexels-photo-3379932.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Video Production', caption: 'Video Production' },
]

const reasons = [
    { number: '01', title: '10+ Years Experience', desc: 'A decade of capturing memories across 500+ events worldwide.' },
    { number: '02', title: 'Premium Equipment', desc: 'Sony FX6, DJI Inspire 3 drones, Arri lights — only the best.' },
    { number: '03', title: 'Cinematic Style', desc: 'Every project is treated like a feature film with artistic intent.' },
    { number: '04', title: 'Fast Turnaround', desc: 'Edited photos delivered in 5–7 days, video in 2–3 weeks.' },
    { number: '05', title: 'Licensed Drone Pilots', desc: 'FAA Part 107 certified for safe, legal aerial operations.' },
    { number: '06', title: '100% Satisfaction', desc: 'We don\'t stop until you\'re completely thrilled with the result.' },
]

const testimonials = [
    {
        quote: 'LensArt captured our wedding so beautifully — every photo makes us cry happy tears. Absolute professionals.',
        name: 'Sophia & Marcus',
        role: 'Wedding Clients',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
        quote: 'Our product launch campaign went viral thanks to the stunning imagery. Sales doubled in the first week.',
        name: 'James Whitfield',
        role: 'CEO, Elevate Brands',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
        quote: 'The drone footage for our real estate listings is jaw-dropping. Every client asks who shot it.',
        name: 'Priya Sharma',
        role: 'Real Estate Developer',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
]

const videoItems = [
    {
        thumb: 'https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Wedding Highlight Reel',
        duration: '4:32',
        category: 'Wedding',
    },
    {
        thumb: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Drone Aerial Showcase',
        duration: '2:15',
        category: 'Drone',
    },
    {
        thumb: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Brand Commercial',
        duration: '1:45',
        category: 'Commercial',
    },
]

// ─── Sections ─────────────────────────────────────────────────────────────────

function HeroSection() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => setCurrent((c) => (c + 1) % heroSlides.length), 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative h-screen min-h-[600px] overflow-hidden">
            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    className="absolute inset-0"
                >
                    <img
                        src={heroSlides[current].image}
                        alt={heroSlides[current].label}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <span className="section-subtitle tracking-[0.3em]">{heroSlides[current].label}</span>
                        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white max-w-4xl leading-tight">
                            {heroSlides[current].tagline}
                        </h1>
                    </motion.div>
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
                >
                    <Link to="/contact" className="btn-gold text-base px-8 py-4">
                        Book a Shoot
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                    <a
                        href="#gallery"
                        className="btn-outline text-base px-8 py-4"
                        onClick={(e) => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }) }}
                    >
                        View Our Work
                    </a>
                </motion.div>

                {/* Slide dots */}
                <div className="absolute bottom-10 flex gap-2">
                    {heroSlides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-1 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-gold' : 'w-4 bg-white/40'}`}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 right-8 sm:right-12 text-white/40"
            >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </motion.div>
        </section>
    )
}

function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <p className="section-subtitle">What We Do</p>
                    <h2 className="section-title">Professional Services<br />
                        <span className="gold-text">Tailored for You</span>
                    </h2>
                    <p className="mt-4 text-white/50 max-w-xl mx-auto leading-relaxed">
                        From intimate weddings to high-altitude drone shots, we bring technical expertise and artistic vision to every project.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <AnimatedSection key={s.title} delay={i * 0.08}>
                            <div className={`relative p-8 rounded-2xl border transition-all duration-300 group cursor-default
                ${s.highlight
                                    ? 'border-gold/50 bg-gradient-to-br from-gold/10 to-transparent hover:border-gold hover:shadow-xl hover:shadow-gold/20'
                                    : 'border-white/10 bg-dark-700 hover:border-white/20 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1'
                                }`}
                            >
                                {s.highlight && (
                                    <span className="absolute top-4 right-4 text-xs font-semibold text-gold border border-gold/40 rounded-full px-3 py-0.5 tracking-wide">
                                        Featured
                                    </span>
                                )}
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${s.color || 'from-white/5 to-transparent'} text-gold group-hover:scale-110 transition-transform duration-300`}>
                                    {s.icon}
                                </div>
                                <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300">{s.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                                <div className="mt-5 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Learn more
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

function GallerySection() {
    const [lightbox, setLightbox] = useState(null)

    return (
        <section id="gallery" className="py-24 bg-dark-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <p className="section-subtitle">Our Portfolio</p>
                    <h2 className="section-title">Visual <span className="gold-text">Masterpieces</span></h2>
                    <p className="mt-4 text-white/50 max-w-xl mx-auto">
                        A curated collection of our finest work across all photography and videography categories.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
                    {galleryImages.map((img, i) => (
                        <AnimatedSection
                            key={i}
                            delay={i * 0.07}
                            className={i === 0 ? 'col-span-2 row-span-2' : ''}
                        >
                            <div
                                className="relative group overflow-hidden rounded-xl cursor-pointer h-full"
                                onClick={() => setLightbox(img)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 text-center">
                                        <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-2">
                                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                        <p className="text-white text-sm font-medium">{img.caption}</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection className="text-center mt-12">
                    <Link to="/contact" className="btn-outline">
                        View Full Portfolio
                    </Link>
                </AnimatedSection>
            </div>

            {lightbox && <Lightbox image={lightbox} onClose={() => setLightbox(null)} />}
        </section>
    )
}

function VideoSection() {
    const [playing, setPlaying] = useState(null)

    return (
        <section className="py-24 bg-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <p className="section-subtitle">In Motion</p>
                    <h2 className="section-title">Cinematic <span className="gold-text">Previews</span></h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {videoItems.map((v, i) => (
                        <AnimatedSection key={v.title} delay={i * 0.1}>
                            <div
                                className="relative group overflow-hidden rounded-2xl cursor-pointer border border-white/10 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/10"
                                onClick={() => setPlaying(playing === i ? null : i)}
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <img src={v.thumb} alt={v.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

                                    {/* Play button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-16 h-16 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center shadow-xl"
                                        >
                                            <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </motion.div>
                                    </div>

                                    {/* Duration badge */}
                                    <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
                                        {v.duration}
                                    </span>
                                    <span className="absolute top-3 left-3 bg-gold/90 text-black text-xs font-semibold px-2.5 py-1 rounded-full">
                                        {v.category}
                                    </span>
                                </div>
                                <div className="p-4 bg-dark-700">
                                    <h3 className="text-white font-semibold">{v.title}</h3>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

function DroneSection() {
    return (
        <section className="relative py-32 overflow-hidden">
            <img
                src="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Drone aerial"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <AnimatedSection>
                        <p className="section-subtitle">Drone Cinematography</p>
                        <h2 className="section-title mb-6">
                            See The World <br />
                            <span className="gold-text">From Above</span>
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed mb-8">
                            Our FAA-certified drone pilots capture breathtaking aerial perspectives that transform ordinary locations into cinematic vistas. Perfect for weddings, real estate, events, and brand films.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mb-10">
                            {[
                                { label: '4K Ultra HD', sub: 'Video & Photos' },
                                { label: 'FAA Certified', sub: 'Licensed Pilots' },
                                { label: '30 Min Flight', sub: 'Per Session' },
                                { label: '360° Coverage', sub: 'Any Angle' },
                            ].map((item) => (
                                <div key={item.label} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                                    <div>
                                        <div className="font-semibold text-white">{item.label}</div>
                                        <div className="text-white/50 text-sm">{item.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link to="/contact" className="btn-gold">
                            Book Drone Shoot
                        </Link>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}

function WhyUsSection() {
    return (
        <section className="py-24 bg-dark-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <p className="section-subtitle">Why LensArt</p>
                    <h2 className="section-title">The Difference <span className="gold-text">Experience</span></h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((r, i) => (
                        <AnimatedSection key={r.number} delay={i * 0.08}>
                            <div className="flex gap-5 p-6 rounded-xl border border-white/10 bg-dark-800/50 hover:border-gold/30 transition-all duration-300 group">
                                <span className="font-display text-4xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors duration-300 flex-shrink-0 leading-none">
                                    {r.number}
                                </span>
                                <div>
                                    <h3 className="font-semibold text-white mb-2 group-hover:text-gold transition-colors duration-300">{r.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Stats row */}
                <AnimatedSection className="mt-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border border-gold/20 bg-gradient-to-r from-gold/5 to-transparent">
                        {[
                            { value: '500+', label: 'Events Shot' },
                            { value: '12', label: 'Awards Won' },
                            { value: '10+', label: 'Years Active' },
                            { value: '98%', label: 'Client Satisfaction' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="font-display text-4xl font-bold gold-text mb-1">{stat.value}</div>
                                <div className="text-white/50 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}

function TestimonialsSection() {
    return (
        <section className="py-24 bg-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <p className="section-subtitle">Client Love</p>
                    <h2 className="section-title">What They <span className="gold-text">Say</span></h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <AnimatedSection key={t.name} delay={i * 0.1}>
                            <div className="p-8 rounded-2xl border border-white/10 bg-dark-700 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                                <svg width="36" height="36" fill="#C9A84C" viewBox="0 0 24 24" className="mb-5 opacity-60">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-white/70 leading-relaxed mb-6 flex-1 italic">{t.quote}</p>
                                <div className="flex items-center gap-3 mt-auto">
                                    <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border border-gold/30" />
                                    <div>
                                        <div className="text-white font-semibold text-sm">{t.name}</div>
                                        <div className="text-gold text-xs">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}

function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden">
            <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="CTA Background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/80" />

            <div className="relative max-w-4xl mx-auto px-4 text-center">
                <AnimatedSection>
                    <p className="section-subtitle">Ready to Create?</p>
                    <h2 className="section-title mb-6">
                        Let's Tell Your <span className="gold-text">Story</span>
                    </h2>
                    <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
                        Whether it's a wedding, a brand launch, or a passion project — we're ready to make it extraordinary.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="btn-gold text-base px-10 py-4">
                            Start Your Project
                        </Link>
                        <Link to="/about" className="btn-outline text-base px-10 py-4">
                            Meet the Team
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <HeroSection />
            <ServicesSection />
            <GallerySection />
            <VideoSection />
            <DroneSection />
            <WhyUsSection />
            <TestimonialsSection />
            <CTASection />
        </motion.div>
    )
}
