import { motion } from 'framer-motion'
import testleftVideo from '../assets/testleft.mp4'
import testrightVideo from '../assets/testright.mp4'

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
                    className="text-center mb-48"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[var(--silk)] leading-tight">
                        I BUILT AURA BECAUSE <br />
                        <span className="text-[var(--gold)]">I NEEDED IT TO SURVIVE.</span>
                    </h2>
                </motion.div>

                {/* Spacer */}
                <div className="mb-32"></div>

                {/* Act II - Left Justified with Video on Left */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-32 max-w-7xl mx-auto">
                    {/* Video - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="order-2 md:order-1"
                    >
                        <div className="aspect-square overflow-hidden rounded-lg">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                src={testleftVideo}
                            />
                        </div>
                    </motion.div>

                    {/* Story Text - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="order-1 md:order-2"
                    >
                        <div className="space-y-8 text-[var(--silk)] text-lg leading-relaxed text-left">
                            <h3 className="text-sm text-[var(--gold)] uppercase tracking-widest mb-4">The Fracture</h3>
                            <p className="mb-4">
                                They say rock bottom is solid ground, but it doesn't feel like that when you land. It feels like shattering. I found myself stripped of the narrative I had carefully curated. I was a single mother, navigating the aftermath of control and abuse, staring at a reflection I didn't recognise.
                            </p>
                            <p className="font-bold mb-2">I had two choices:</p>
                            <p className="mb-2">Rebuild the mask and pretend nothing happened.</p>
                            <p className="mb-4">Burn the script and write a new one.</p>
                            <p>
                                I chose the fire. I stopped asking for permission to take up space. I stopped apologising for my intensity. I realised that my trauma did not define me, but my response to it would define my legacy. I didn't just want to 'bounce back.' I wanted to ascend.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Act III - Right Justified with Video on Right */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-32 max-w-7xl mx-auto">
                    {/* Story Text - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                    >
                        <div className="space-y-8 text-[var(--silk)] text-lg leading-relaxed text-right">
                            <h3 className="text-sm text-[var(--gold)] uppercase tracking-widest mb-4">The Architecture</h3>
                            <p className="mb-4">
                                AURA is not just a coaching platform. It is the methodology I used to reclaim my own life. It is the blueprint for the woman who is done shrinking.
                            </p>
                            <p className="mb-4">
                                My purpose is not just to see the future, but to engineer it. I built AURA for the woman who knows she is meant for more than just 'getting by.' For the woman who is ready to turn her pain into power and her presence into an empire.
                            </p>
                            <p className="text-xl font-serif italic text-[var(--gold)]">
                                I am not here to fix you. You are not broken. I am here to hand you the matches so you can burn down everything that is no longer you.
                            </p>
                        </div>
                    </motion.div>

                    {/* Video - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                    >
                        <div className="aspect-square overflow-hidden rounded-lg">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                src={testrightVideo}
                            />
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
