'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import styles from './Hero.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
    'https://images.unsplash.com/photo-1722183704200-e96339975ba4?q=80&w=3540&auto=format&fit=crop', // User selected: Oil rig (New Selection)
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop', // Cinematic solar/sunset
    'https://images.unsplash.com/photo-1699588999922-730553a918d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // User selected: Wind Turbines (Updated)
    'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop', // Power lines/Blue sky
    'https://images.unsplash.com/photo-1678532685208-54acdd41187d?q=80&w=2342&auto=format&fit=crop', // User selected: Dark texture (Abstract)
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Only start the rotation timer AFTER the initial loading is done
        if (isLoading) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 6000); // Slower cycle for better viewing
        return () => clearInterval(interval);
    }, [isLoading]);

    useEffect(() => {
        console.log('Current background image:', heroImages[currentImageIndex]);
    }, [currentImageIndex]);

    return (
        <section className={styles.hero}>
            {/* Splash Screen Loader */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className={styles.splashScreen}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0.5 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                            className={styles.splashLogo}
                        >
                            <Zap size={64} fill="currentColor" className={styles.splashIcon} />
                            <div className={styles.splashText}>
                                Orisco <span>Energy</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background Carousel */}
            <div className={styles.carouselContainer}>
                {/* 
                    Optimized Image Loading:
                    We render the current image with Next.js Image component.
                    'priority' is true for the first image to trigger LCP ASAP.
                    onLoadingComplete handles the splash screen removal.
                */}
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
                            onLoadingComplete={() => {
                                // Only trigger loading complete for the very first image
                                if (isLoading && currentImageIndex === 0) {
                                    // Add a small delay to ensure smooth transition
                                    setTimeout(() => setIsLoading(false), 500);
                                }
                            }}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Dark Gradient Overlay */}
                <div className={styles.overlay}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 20 }}>
                {!isLoading && (
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h1 className={styles.title}>
                            Powering the Future with<br />
                            Sustainable Energy.
                        </h1>
                        <p className={styles.subtitle}>
                            Orisco Energy is committed to delivering affordable, reliable, and ever-cleaner energy to enable human progress.
                        </p>

                        <div className={styles.ctaGroup}>
                            <Link href="#" className={styles.primaryBtn}>
                                Our Strategy
                            </Link>
                            <Link href="#" className={styles.secondaryBtn}>
                                View Operations
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
