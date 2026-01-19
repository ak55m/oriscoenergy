'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Hero.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
    'https://images.unsplash.com/photo-1722183704200-e96339975ba4?q=80&w=3540&auto=format&fit=crop', // Oil rig
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop', // Power lines
    'https://images.unsplash.com/photo-1699588999922-730553a918d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Oil tanker
    'https://images.unsplash.com/photo-1592685615249-c7939d6f9be7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Wind turbines
    'https://images.unsplash.com/photo-1678532685208-54acdd41187d?q=80&w=2342&auto=format&fit=crop', // Refinery
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 6000); // Slower cycle for better viewing
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log('Current background image:', heroImages[currentImageIndex]);
    }, [currentImageIndex]);

    return (
        <section className={`${styles.hero} ${isHome ? styles.homeHero : ''}`}>
            {/* Background Carousel */}
            <div className={styles.carouselContainer}>
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImageIndex}
                        className={styles.backgroundImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <Image
                            src={heroImages[currentImageIndex]}
                            alt="Hero background"
                            fill
                            priority={currentImageIndex === 0}
                            style={{ objectFit: 'cover' }}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Dark Gradient Overlay */}
                <div className={styles.overlay}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 20 }}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h1 className={styles.title}>
                        Solutions for energy systems<br />
                        and essential infrastructure.
                    </h1>
                    <p className={styles.subtitle}>
                        Orisco Energy Limited provides end-to-end engineering and supply chain services, supporting operations and infrastructure projects with a commitment to safety, quality, and operational excellence.
                    </p>

                    <div className={styles.ctaGroup}>
                        <Link href="/gallery" className={styles.primaryBtn}>
                            Our Gallery
                        </Link>
                        <Link href="/contact-us" className={styles.secondaryBtn}>
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
