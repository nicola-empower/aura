import { motion } from 'framer-motion'
import video2 from '../assets/vid2.mp4'

const Hero = () => {
    return (
        <section className="h-screen w-full flex flex-col md:flex-row overflow-hidden relative">
            {/* Left Side - Text */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-16 bg-[var(--midnight)] z-10">
                <div className="max-w-xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-[var(--silk)]"
                    >
                        CONFIDENCE <br />
                        <span className="italic text-[var(--gold)]">ISN'T WORN.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-8 text-lg md:text-xl text-gray-400 font-sans max-w-md"
                    >
                        The 12-week accelerator for women who are ready to lead.
                    </motion.p>
                </div>
            </div>

            {/* Right Side - Video Placeholder */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-gray-900">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full object-cover bg-gray-800 flex items-center justify-center"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                        src={video2}
                    />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:left-8 md:translate-x-0 text-[var(--silk)] text-xs tracking-widest uppercase"
            >
                Scroll to Explore
            </motion.div>
        </section>
    )
}

export default Hero
