import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import throttle from 'lodash.throttle';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = throttle(() => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollTop / docHeight, 1);
            setScrollProgress(progress);
            setIsScrolled(scrollTop > 50);
        }, 50);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Projects', 'Experience', 'Volunteer', 'Music', 'Gaming', 'Contact'];

    const CoffeeCup = () => (
        <motion.div
            animate={{
                rotate: scrollProgress > 0 ? -10 : 0,
            }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
            }}
            className="w-6 h-6 md:w-8 md:h-8 ml-4"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400 400"
                className="w-full h-full"
            >
                <rect x="150" y="150" width="100" height="150" fill="white" rx="10" />
                <motion.rect
                    x="155"
                    y={200 + scrollProgress * 90}
                    width="90"
                    height={(1 - scrollProgress) * 100}
                    fill="#6b4423"
                    initial={{ height: 100 }}
                    animate={{ height: (1 - scrollProgress) * 100 }}
                    transition={{ ease: 'linear' }}
                />
                <path
                    d="M250 175 C270 190, 270 260, 250 275"
                    fill="none"
                    stroke="white"
                    strokeWidth="5"
                />
                <path
                    d="M180 140 C180 120, 200 120, 200 100"
                    fill="none"
                    stroke="#cccccc"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M220 140 C220 120, 240 120, 240 100"
                    fill="none"
                    stroke="#cccccc"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        </motion.div>
    );

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 bg-black/90 backdrop-blur-sm ${
                isScrolled ? 'py-2' : 'py-4'
            }`}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-white font-playfair text-xl">KW</div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                to={item.toLowerCase()}
                                smooth={true}
                                duration={500}
                                className="text-white hover:text-gray-300 cursor-pointer transition-colors text-sm"
                            >
                                {item}
                            </Link>
                        ))}
                        <CoffeeCup />
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isMobileMenuOpen ? 'auto' : 0,
                        opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="py-4 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                to={item.toLowerCase()}
                                smooth={true}
                                duration={500}
                                className="text-white hover:text-gray-300 cursor-pointer transition-colors text-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </nav>
    );
};

export default Header;