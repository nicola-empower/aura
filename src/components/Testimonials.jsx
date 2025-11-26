import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            quote: "I didn't just change my wardrobe; I changed my spine. I stand taller, I speak clearer, and for the first time in my life, I don't apologise for taking up space.",
            author: "Sarah M.",
            title: "CEO & Founder"
        },
        {
            quote: "AURA is not a course; it is an exorcism of the 'good girl' programming. Nicola gave me the permission I was waiting for to finally lead.",
            author: "Elena R.",
            title: "Tech Principal"
        },
        {
            quote: "The ROI wasn't just in my business, it was in my mirror. I finally recognise the woman looking back at me.",
            author: "Jessica T.",
            title: "Creative Director"
        }
    ]

    // Auto-rotate testimonials every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 6000)

        return () => clearInterval(timer)
    }, [testimonials.length])

    return (
        <section className="min-h-screen w-full bg-[var(--midnight)] flex items-center justify-center py-48 md:py-64 px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 flex justify-between px-8 md:px-16 pointer-events-none">
                <div className="h-full w-px bg-[var(--silk)] opacity-10"></div>
                <div className="h-full w-px bg-[var(--silk)] opacity-10"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="relative"
                    >
                        {/* Large Opening Quote Mark */}
                        <div className="text-[var(--gold)] opacity-20 font-serif text-8xl leading-none mb-8">
                            "
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-[var(--silk)] leading-relaxed mb-12">
                            {testimonials[currentIndex].quote}
                        </p>

                        {/* Author */}
                        <div className="space-y-1">
                            <p className="text-[var(--gold)] font-bold text-lg uppercase tracking-widest">
                                {testimonials[currentIndex].author}
                            </p>
                            <p className="text-[var(--silk)] opacity-70 text-sm uppercase tracking-wider">
                                {testimonials[currentIndex].title}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-3 mt-16">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-[var(--gold)] w-8'
                                : 'bg-[var(--silk)] opacity-30 hover:opacity-50'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
