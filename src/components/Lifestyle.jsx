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

            {/* Content Overlay - No black box, text directly over video */}
            <div className="relative z-20 text-center p-6 flex flex-col items-center justify-center h-full w-full">
                <p className="text-[var(--silk)] opacity-70 text-sm tracking-widest uppercase mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Service {index + 1}</p>
                <h3 className="text-3xl font-serif text-[var(--silk)] mb-2" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>{title}</h3>
                <p className="text-[var(--gold)] text-sm uppercase tracking-widest mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{subtitle}</p>

                {/* Description: Only visible on hover */}
                <p className="text-[var(--silk)] text-sm leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 max-w-md" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                    {description}
                </p>
            </div>
        </div>
    )
}

const Lifestyle = () => {
    const containerRef = useRef(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -100])

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
        <section id="services" ref={containerRef} className="min-h-[200vh] w-full bg-[var(--midnight)] relative overflow-hidden py-24">
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

                {/* The Vogue Center Spine - Now 2x2 Grid */}
                <div className="w-full max-w-6xl mx-auto relative pt-96 px-4">
                    <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {services.map((service, index) => (
                            <div key={index} className={index % 2 === 1 ? "md:mt-32" : ""}>
                                <VideoCard {...service} index={index} videoSrc={service.video} />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Lifestyle
