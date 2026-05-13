import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const skills = [
    { label: 'Wedding Photography', pct: 98 },
    { label: 'Cinematic Videography', pct: 95 },
    { label: 'Drone Aerial Ops', pct: 90 },
    { label: 'Color Grading', pct: 93 },
    { label: 'Product Photography', pct: 96 },
    { label: 'Video Editing', pct: 94 },
]

const timeline = [
    { year: '2014', title: 'Founded LensArt Studio', desc: 'Started as a solo wedding photographer in New York with a single camera and a vision.' },
    { year: '2016', title: 'Expanded to Videography', desc: 'Added full video production services after demand from wedding clients grew rapidly.' },
    { year: '2018', title: 'Drone Division Launch', desc: 'Became FAA Part 107 certified and launched our aerial cinematography division.' },
    { year: '2020', title: 'Studio Space Opened', desc: 'Opened our 3,000 sq ft professional studio for product and podcast shoots.' },
    { year: '2022', title: 'International Projects', desc: 'Shot destination weddings across Europe, Asia, and South America.' },
    { year: '2024', title: 'Award-Winning Team', desc: 'Grew to a team of 12 and won multiple industry awards for cinematic excellence.' },
]

const team = [
    {
        name: 'Ethan Clarke',
        role: 'Lead Photographer & Director',
        bio: 'With 12 years of experience and a background in fine art photography, Ethan brings a painter\'s eye to every shoot.',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Maya Rodriguez',
        role: 'Cinematographer & Editor',
        bio: 'Former film school graduate with credits on commercial campaigns for Fortune 500 brands.',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        name: 'Liam Park',
        role: 'Drone Pilot & Aerial DP',
        bio: 'FAA Part 107 certified with 800+ hours of flight time across 30 countries.',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
]

const awards = [
    { title: 'Best Wedding Photographer', org: 'NY Wedding Awards 2023' },
    { title: 'Excellence in Cinematography', org: 'Film & Video Festival 2022' },
    { title: 'Best Commercial Photography', org: 'Advertising Creative Awards 2023' },
    { title: 'Drone Innovation Award', org: 'Aerial Media Summit 2021' },
]

function SkillBar({ label, pct, delay }) {
    return (
        <AnimatedSection delay={delay}>
            <div className="mb-5">
                <div className="flex justify-between mb-2">
                    <span className="text-white/80 text-sm font-medium">{label}</span>
                    <span className="text-gold text-sm font-semibold">{pct}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                    />
                </div>
            </div>
        </AnimatedSection>
    )
}

export default function About() {
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
                    src="https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="About hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <p className="section-subtitle">Our Story</p>
                        <h1 className="section-title text-5xl md:text-7xl">
                            Passion Meets <span className="gold-text">Precision</span>
                        </h1>
                        <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                            We are not just photographers — we are visual storytellers who believe every image should evoke emotion and stand the test of time.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Intro + photo */}
            <section className="py-24 bg-dark-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <AnimatedSection direction="right">
                            <div className="relative">
                                <img
                                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900"
                                    alt="Studio team"
                                    className="rounded-2xl w-full object-cover aspect-[4/3]"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-dark-700 border border-gold/30 rounded-xl p-5 shadow-2xl">
                                    <div className="font-display text-3xl font-bold gold-text">10+</div>
                                    <div className="text-white/60 text-sm mt-1">Years of Excellence</div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="left" delay={0.1}>
                            <p className="section-subtitle">Who We Are</p>
                            <h2 className="section-title mb-6">
                                Award-Winning<br />
                                <span className="gold-text">Visual Artists</span>
                            </h2>
                            <p className="text-white/60 leading-relaxed mb-4">
                                LensArt Studio was founded in 2014 with a singular mission: to create imagery that transcends the ordinary. What started as a one-man wedding photography business has grown into a full-service visual production house with a team of 12 passionate creatives.
                            </p>
                            <p className="text-white/60 leading-relaxed mb-8">
                                We specialize in capturing authentic moments and building compelling visual narratives for weddings, brands, and creative projects. Our approach combines technical mastery with artistic intuition, ensuring every project exceeds expectations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="btn-gold">Work With Us</Link>
                                <a href="#team" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }) }}>
                                    Meet the Team
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="py-24 bg-dark-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <AnimatedSection>
                            <p className="section-subtitle">Expertise</p>
                            <h2 className="section-title mb-4">
                                Skills & <span className="gold-text">Mastery</span>
                            </h2>
                            <p className="text-white/50 leading-relaxed mb-10">
                                Our team's collective expertise spans every aspect of visual production, from initial concept to final delivery.
                            </p>
                            {skills.map((s, i) => (
                                <SkillBar key={s.label} {...s} delay={i * 0.05} />
                            ))}
                        </AnimatedSection>

                        {/* Awards */}
                        <AnimatedSection delay={0.2}>
                            <p className="section-subtitle">Recognition</p>
                            <h2 className="section-title mb-10">
                                Awards & <span className="gold-text">Honours</span>
                            </h2>
                            <div className="space-y-4">
                                {awards.map((a, i) => (
                                    <motion.div
                                        key={a.title}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-dark-800/50 hover:border-gold/30 transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#C9A84C" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">{a.title}</div>
                                            <div className="text-gold text-sm mt-1">{a.org}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-dark-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <p className="section-subtitle">Our Journey</p>
                        <h2 className="section-title">The <span className="gold-text">Story So Far</span></h2>
                    </AnimatedSection>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                        <div className="space-y-12">
                            {timeline.map((item, i) => (
                                <AnimatedSection key={item.year} delay={i * 0.08}>
                                    <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        {/* Dot */}
                                        <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gold border-4 border-dark-800 -translate-x-1/2 mt-1.5 flex-shrink-0 z-10" />

                                        {/* Content */}
                                        <div className={`ml-20 md:ml-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right md:w-1/2' : 'md:pl-12 md:w-1/2 md:ml-auto'}`}>
                                            <span className="text-gold font-bold text-sm font-mono">{item.year}</span>
                                            <h3 className="text-white font-semibold text-lg mt-1 mb-2">{item.title}</h3>
                                            <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="py-24 bg-dark-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <p className="section-subtitle">The Creatives</p>
                        <h2 className="section-title">Meet Our <span className="gold-text">Team</span></h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <AnimatedSection key={member.name} delay={i * 0.1}>
                                <div className="group text-center">
                                    <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[3/4]">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <div className="text-white font-display font-bold text-xl">{member.name}</div>
                                            <div className="text-gold text-sm mt-1">{member.role}</div>
                                        </div>
                                    </div>
                                    <p className="text-white/50 text-sm leading-relaxed px-4">{member.bio}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-dark-800 border-t border-white/10">
                <AnimatedSection className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="section-title mb-4">
                        Ready to Create <span className="gold-text">Together?</span>
                    </h2>
                    <p className="text-white/50 mb-8">Let's discuss your vision and bring it to life.</p>
                    <Link to="/contact" className="btn-gold text-base px-10 py-4">Get In Touch</Link>
                </AnimatedSection>
            </section>
        </motion.div>
    )
}
