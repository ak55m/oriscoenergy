import Hero from '@/components/Hero';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { services } from '@/data/services';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Hero />

      {/* 1. Who We Are Section */}
      <section className={styles.whoWeAreSection}>
        <div className={styles.whoWeAreCircles} aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="container">
          <div className={styles.whoWeAreContent}>
            <h2>Who We Are</h2>
            <p>
              <strong>Orisco Energy Limited is an international company providing a broad spectrum of services and expertise in the oil and gas industry, both locally and internationally.</strong>
              <br /><br />
              <strong>Our focus extends beyond oil and gas to support broader sectors, including power generation, infrastructure development, and other related areas that contribute to Nigeria’s industrial and economic growth.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 2. What We Do Section */}
      <section className={styles.whatWeDoSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>What We Do</h2>
            <Link href="/operations" className={styles.viewAll}>
              View All Operations <ChevronRight size={16} />
            </Link>
          </div>

          <div className={styles.grid}>
            {services.slice(0, 4).map((service, index) => (
              <article key={index} className={styles.card}>
                <div
                  className={styles.cardImage}
                  style={{
                    backgroundImage: index === 0
                      ? "url('/images/construction-image.png')"
                      : index === 1
                        ? "url('/images/development-operations.png')"
                      : index === 2
                        ? "url('/images/engineering-image.png')"
                        : "url('/images/heavy-duty-image.png')",
                    backgroundSize: index === 0 || index === 1 || index === 2 || index === 3 ? 'cover' : 'auto',
                    backgroundPosition: index === 0 || index === 1 || index === 2 || index === 3 ? 'center' : 'initial',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
                <div className={styles.cardContent}>
                  <h3>{service}</h3>
                  <p>Comprehensive {service.toLowerCase()} solutions for the energy sector.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
