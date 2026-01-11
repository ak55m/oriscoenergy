'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import styles from './NewsCarousel.module.css';

const newsItems = [
    {
        tag: 'Sustainability',
        title: 'Advancing lower carbon energy',
        description: 'New initiatives launched to reduce carbon intensity across our global operations.',
        gradient: 'linear-gradient(to bottom right, #ccc, #aaa)'
    },
    {
        tag: 'Innovation',
        title: 'Technology driving efficiency',
        description: 'How digital twins are revolutionizing our offshore platforms.',
        gradient: 'linear-gradient(to bottom right, #eee, #ccc)'
    },
    {
        tag: 'Community',
        title: 'Empowering Local Communities',
        description: 'Scholarship programs launched for students in our host communities.',
        gradient: 'linear-gradient(to bottom right, #bde0fe, #a2d2ff)'
    },
    {
        tag: 'Operations',
        title: 'New Offshore Platform Commissioned',
        description: 'Expanding our production capacity with state-of-the-art facilities.',
        gradient: 'linear-gradient(to bottom right, #cdb4db, #ffc8dd)'
    }
];

export default function NewsCarousel() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 380; // Card width + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className={styles.newsSection}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2>Newsroom</h2>
                    <Link href="#" className={styles.viewAll}>
                        View All News <ChevronRight size={16} />
                    </Link>
                </div>

                <div className={styles.carouselContainer}>
                    <button
                        className={`${styles.navButton} ${styles.prevButton}`}
                        onClick={() => scroll('left')}
                        aria-label="Previous news"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className={styles.carousel} ref={scrollRef}>
                        {newsItems.map((item, index) => (
                            <article key={index} className={styles.card}>
                                <div className={styles.cardImage} style={{ background: item.gradient }}></div>
                                <div className={styles.cardContent}>
                                    <span className={styles.cardTag}>{item.tag}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <Link href="#" className={styles.readMore}>Read More</Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    <button
                        className={`${styles.navButton} ${styles.nextButton}`}
                        onClick={() => scroll('right')}
                        aria-label="Next news"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}
