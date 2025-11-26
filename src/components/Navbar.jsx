import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Philosophy', href: '#philosophy' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'
                    }`}
            >
                <div className="container mx-auto px-8 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-[var(--silk)] font-serif text-2xl font-bold tracking-widest z-50">
                        AURA
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-12 relative px-12 py-3">
                        {/* Glowing Container */}
                        <div className="absolute inset-0 bg-[var(--midnight)]/80 backdrop-blur-sm rounded-full border border-[var(--gold)]/30 shadow-[0_0_15px_rgba(212,175,55,0.1)]" />

                        {navLinks.map((link, index) => (
                            <div key={link.name} className="flex items-center">
                                <a
                                    href={link.href}
                                    className="relative z-10 text-[var(--silk)] text-sm uppercase tracking-widest hover:text-[var(--gold)] transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                                {index < navLinks.length - 1 && (
                                    <span className="ml-12 text-[var(--gold)]/50 relative z-10">•</span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden z-50 text-[var(--silk)] focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="w-8 h-6 flex flex-col justify-between">
                            <motion.span
                                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 10 : 0 }}
                                className="w-full h-0.5 bg-[var(--gold)] block origin-left"
                            />
                            <motion.span
                                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                                className="w-full h-0.5 bg-[var(--gold)] block"
                            />
                            <motion.span
                                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -10 : 0 }}
                                className="w-full h-0.5 bg-[var(--gold)] block origin-left"
                            />
                        </div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 bg-[var(--midnight)] z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-serif text-[var(--silk)] hover:text-[var(--gold)] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
