import { motion } from 'framer-motion'
import vid3 from '../assets/vid3.mp4'

const Philosophy = () => {
    return (
        <section id="philosophy" className="min-h-screen w-full bg-[var(--silk)] text-[var(--midnight)] py-32 md:py-48 px-8 md:px-16 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Left Side - Video/Image */}
            <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative mb-12 md:mb-0">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="w-full h-full bg-gray-300 flex items-center justify-center overflow-hidden"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                        src={vid3}
                    />
                </motion.div>
            </div>

            {/* Right Side - Text */}
            <div className="w-full md:w-1/2 md:pl-12 lg:pl-16">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-serif mb-8"
                >
                    UNAPOLOGETIC <br />
                    <span className="italic text-[var(--gold)]">SELF-EXPRESSION.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-lg md:text-xl leading-relaxed font-sans"
                >
                    <p className="mb-6">
                        True style transcends trends. It is the external expression of internal freedom.
                        We teach you how to strip away the expectations, silence the noise, and curate a life that feels as good as it looks.
                    </p>
                    <p className="font-bold border-l-4 border-[var(--oxblood)] pl-4 italic">
                        "You don't need permission to shine. You just need the audacity to start."
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Philosophy
