import { motion } from 'framer-motion'

const Marquee = () => {
    return (
        <div className="w-full bg-[var(--gold)] text-[var(--midnight)] py-4 overflow-hidden relative z-20 border-t border-b border-[var(--midnight)] flex">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: "-100%" }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 80,
                    ease: "linear",
                }}
            >
                {[...Array(4)].map((_, i) => (
                    <span key={i} className="mx-24 text-lg md:text-xl font-bold tracking-[0.2em] uppercase">
                        WAITLIST OPEN FOR Q1 2026  •  STRICTLY LIMITED SPACES  •  RADICAL SELF-BELIEF  • APPLICATION ONLY  •
                    </span>
                ))}
            </motion.div>
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: "-100%" }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 80,
                    ease: "linear",
                }}
            >
                {[...Array(4)].map((_, i) => (
                    <span key={i} className="mx-24 text-lg md:text-xl font-bold tracking-[0.2em] uppercase">
                        WAITLIST OPEN FOR Q1 2026 • STRICTLY LIMITED SPACES • RADICAL SELF-BELIEF • APPLICATION ONLY •
                    </span>
                ))}
            </motion.div>
        </div>
    )
}

export default Marquee
