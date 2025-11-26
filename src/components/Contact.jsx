import { motion } from 'framer-motion'
import video1 from '../assets/VID-20251126-WA0002.mp4'

const Contact = () => {
    return (
        <section id="contact" className="min-h-[80vh] w-full bg-[var(--midnight)] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Video Placeholder */}
            <div className="absolute inset-0 opacity-20 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src={video1}
                />
            </div>

            <div className="z-10 text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-8xl font-serif text-[var(--silk)] mb-12"
                >
                    ARE YOU READY <br />
                    TO BE <span className="italic text-[var(--gold)]">SEEN?</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <button className="group relative px-12 py-4 bg-transparent border border-[var(--gold)] text-[var(--gold)] text-lg tracking-[0.2em] uppercase overflow-hidden transition-colors duration-300 hover:text-[var(--silk)] hover:border-[var(--oxblood)]">
                        <span className="relative z-10">Join the Waitlist</span>
                        <div className="absolute inset-0 bg-[var(--oxblood)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></div>
                    </button>
                </motion.div>

                <p className="mt-16 text-[var(--silk)] opacity-40 text-xs tracking-widest">
                    &copy; {new Date().getFullYear()} AURA. ALL RIGHTS RESERVED.
                </p>
            </div>
        </section>
    )
}

export default Contact
