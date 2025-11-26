import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import vid001 from '../assets/VID-20251126-WA0001.mp4'
import vid005 from '../assets/VID-20251126-WA0005.mp4'
import vid006 from '../assets/VID-20251126-WA0006.mp4'
import vid007 from '../assets/VID-20251126-WA0007.mp4'

const VideoCard = ({ title, subtitle, description, index, videoSrc }) => {
    return (
        <div className="w-full aspect-[3/4] bg-gray-800 mb-16 relative flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />

            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                src={videoSrc}
            />

            {/* Content Overlay */}
            <div className="relative z-20 text-center p-6 flex flex-col items-center justify-center h-full w-full">
                <p className="text-[var(--silk)] opacity-70 text-sm tracking-widest uppercase mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Service {index + 1}</p>
                <h3 className="text-3xl font-serif text-[var(--silk)] mb-2" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{title}</h3>
                <p className="text-[var(--gold)] text-sm uppercase tracking-widest mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{subtitle}</p>

                {/* Description: Only visible on hover with glassmorphism */}
                <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500">
                    <div className="backdrop-blur-md bg-[rgba(18,18,18,0.2)] p-4 rounded-lg">
                        <p className="text-[var(--silk)] text-base leading-relaxed max-w-md">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Lifestyle = () => {
    const containerRef = useRef(null)
    const [isMobile, setIsMobile] = useState(false)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Track if section is in viewport
    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect()
                const windowHeight = window.innerHeight

                // Check if section is in view (with some buffer)
                const inView = rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.3
                setIsInView(inView)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Check on mount

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Enhanced parallax effect - Desktop only for that "visual tension"
    // Videos drag behind the scroll, creating depth
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? [0, 0] : [100, -200]  // Mobile: no parallax, Desktop: smooth drag
    )

    const services = [
        {
            title: "The Mindset",
            subtitle: "REWIRE INTERNAL DIALOGUE",
            description: "The loudest voice in the room is the one inside your head. We dismantle the 'good girl' conditioning, silence the imposter syndrome, and reconstruct a mental architecture that serves your ambition, not your fear. You cannot build an empire on shaky foundations.",
            video: vid007
        },
        {
            title: "The Aesthetic",
            subtitle: "ALIGN VISUAL IDENTITY",
            description: "Style is not vanity; it is strategy. Before you speak, your image has already introduced you. We curate a visual signature that acts as both your armour and your introduction. Stop dressing for approval. Start dressing for impact.",
            video: vid001
        },
        {
            title: "The Presence",
            subtitle: "COMMAND THE ROOM",
            description: "Charisma is not accidental. It is engineered. Learn the non-verbal cues that signal absolute authority. How to hold space, how to pause, and how to wield silence as a weapon. You don't need to be the loudest to be the most powerful.",
            video: vid005
        },
        {
            title: "The Network",
            subtitle: "CURATE YOUR CIRCLE",
            description: "Proximity is power. You become the average of the people you allow into your space. We audit your connections, teaching you to cut energy-draining ties with grace and build a table of women who mention your name in rooms full of opportunity.",
            video: vid006
        },
    ]

    return (
        <section id="services" ref={containerRef} className="min-h-[200vh] w-full bg-[var(--midnight)] relative overflow-hidden py-48 md:py-64">
            {/* Background Elements */}
            <div className="absolute inset-0 flex justify-between px-8 md:px-16 pointer-events-none">
                <div className="h-full w-px bg-[var(--silk)] opacity-10"></div>
                <div className="h-full w-px bg-[var(--silk)] opacity-10"></div>
            </div>

            <div className="container mx-auto h-full relative z-10">
                <div className="text-center mb-72">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-serif text-[var(--silk)]"
                    >
                        CURATE YOUR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] to-[var(--silk)]">REALITY</span>
                    </motion.h2>
                </div>

                {/* Two Column Layout: Scrolling Videos (Left) + Fixed Text (Right) */}
                <div className="w-full max-w-7xl mx-auto relative pt-96 px-4">
                    <div className="flex flex-col md:flex-row gap-16">
                        {/* Left Side - Scrolling Video Spine */}
                        <motion.div style={{ y }} className="w-full md:w-1/2 flex flex-col items-center space-y-16">
                            {services.map((service, index) => (
                                <VideoCard key={index} {...service} index={index} videoSrc={service.video} />
                            ))}
                        </motion.div>

                        {/* Right Side - Fixed Manifesto Text (visible only in this section) */}
                        <div className="hidden md:block w-full md:w-1/2">
                            <div
                                className={`fixed right-[5%] top-[40vh] w-[40%] max-w-xl p-12 transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                    }`}
                            >
                                <div>
                                    <h2 className="text-5xl lg:text-6xl font-serif text-[var(--silk)] mb-6">
                                        THE BLUEPRINT.
                                    </h2>
                                    <p className="text-2xl text-[var(--gold)] font-bold mb-8 uppercase tracking-wider">
                                        We do not fix, we build
                                    </p>
                                    <p className="text-lg text-[var(--silk)] leading-relaxed opacity-90">
                                        True presence is not an act; it is an architecture. We strip back the noise, dismantle the doubt and reconstruct a reality where you are the authority.
                                    </p>
                                    <p className="text-xl text-[var(--gold)] font-serif italic mt-12">
                                        Welcome to your new ERA.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lifestyle
