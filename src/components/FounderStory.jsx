import { motion } from 'framer-motion'
import vid003 from '../assets/VID-20251126-WA0003.mp4'

const FounderStory = () => {
    return (
        <section className="w-full bg-[var(--midnight)] py-48 md:py-64 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 flex justify-between px-8 md:px-16 pointer-events-none">
                <div className="h-full w-px bg-[var(--silk)] opacity-10"></div>
                <div className="h-full w-px bg-[var(--silk)] opacity-10"></div>
            </div>

            <div className="container mx-auto px-8 relative z-10">
                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-32"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[var(--silk)] leading-tight">
                        I BUILT AURA BECAUSE <br />
                        <span className="text-[var(--gold)]">I NEEDED IT TO SURVIVE.</span>
                    </h2>
                </motion.div>

                {/* Single Video + Story Layout */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-32">
                    {/* Video - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="aspect-[3/4] overflow-hidden">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                src={vid003}
                            />
                        </div>
                    </motion.div>

                    {/* Story Text - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="space-y-8 text-[var(--silk)] text-lg leading-relaxed">
                            {/* Act I */}
                            <div>
                                <h3 className="text-sm text-[var(--gold)] uppercase tracking-widest mb-4">Act I: The Performance</h3>
                                <p className="mb-4">
                                    If you look at the footage from five years ago, you see a woman who had it all. The travel, the lifestyle, the aesthetic. I was fluent in the language of 'perfect.' I knew how to light up a room, how to play the part, and how to make you believe I was untouchable.
                                </p>
                                <p>
                                    But true presence isn't a performance. It's a state of being. And while I was busy belonging to the world—to the lens, to the expectations, to the people who claimed to love me—I forgot to belong to myself.
                                </p>
                            </div>

                            {/* Act II */}
                            <div>
                                <h3 className="text-sm text-[var(--gold)] uppercase tracking-widest mb-4">Act II: The Fracture</h3>
                                <p className="mb-4">
                                    They say rock bottom is solid ground, but it doesn't feel like that when you land. It feels like shattering. I found myself stripped of the narrative I had carefully curated. I was a single mother, navigating the aftermath of control and abuse, staring at a reflection I didn't recognize.
                                </p>
                                <p className="font-bold mb-2">I had two choices:</p>
                                <p className="mb-2">Rebuild the mask and pretend nothing happened.</p>
                                <p className="mb-4">Burn the script and write a new one.</p>
                                <p>
                                    I chose the fire. I stopped asking for permission to take up space. I stopped apologizing for my intensity. I realized that my trauma did not define me, but my response to it would define my legacy. I didn't just want to 'bounce back.' I wanted to ascend.
                                </p>
                            </div>

                            {/* Act III */}
                            <div>
                                <h3 className="text-sm text-[var(--gold)] uppercase tracking-widest mb-4">Act III: The Architecture</h3>
                                <p className="mb-4">
                                    AURA is not just a coaching platform. It is the methodology I used to reclaim my own life. It is the blueprint for the woman who is done shrinking.
                                </p>
                                <p className="mb-4">
                                    I am a Master Number 11—a Visionary. My purpose is not just to see the future, but to engineer it. I built AURA for the woman who knows she is meant for more than just 'getting by.' For the woman who is ready to turn her pain into power, and her presence into an empire.
                                </p>
                                <p className="text-xl font-serif italic text-[var(--gold)]">
                                    I am not here to fix you. You are not broken. I am here to hand you the matches so you can burn down everything that is no longer you.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Sign-Off */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-center border-t border-[var(--silk)] border-opacity-20 pt-12"
                >
                    <p className="text-2xl md:text-3xl font-serif text-[var(--silk)] mb-2">Nicola Berry.</p>
                    <p className="text-sm text-[var(--gold)] uppercase tracking-widest">
                        Founder. Mother. Architect of AURA.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default FounderStory
