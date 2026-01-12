import Hero from '@/components/Hero';
import NewsCarousel from '@/components/NewsCarousel';
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
        <div className="container">
          <div className={styles.whoWeAreContent}>
            <h2>Who We Are</h2>
            <p>
              Orisco Energy Limited is an indigenous company providing a broad spectrum of services and expertise in the oil and gas industry, both locally and internationally.
              <br /><br />
              As an indigenous company, our focus extends beyond oil and gas to support broader sectors, including power generation, infrastructure development, and other related areas that contribute to Nigeria’s industrial and economic growth.
            </p>
            <Link href="#" className="btn-primary">
              Learn More About Us
            </Link>
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
            {services.slice(0, 3).map((service, index) => (
              <article key={index} className={styles.card}>
                <div
                  className={styles.cardImage}
                  style={{
                    background: index === 0 ? 'linear-gradient(to bottom right, #2a9d8f, #264653)' :
                      index === 1 ? 'linear-gradient(to bottom right, #f4a261, #e76f51)' :
                        'linear-gradient(to bottom right, #457b9d, #1d3557)'
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

      {/* 3. Newsroom Section (Carousel) */}
      <NewsCarousel />
    </>
  );
}
