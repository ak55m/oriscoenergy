import Hero from '@/components/Hero';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Hero />

      <section className={styles.newsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Latest News & Stories</h2>
            <Link href="#" className={styles.viewAll}>
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className={styles.grid}>
            {/* News Card 1 */}
            <article className={styles.card}>
              <div className={styles.cardImage} style={{ background: 'linear-gradient(to bottom right, #ddd, #bbb)' }}></div>
              <div className={styles.cardContent}>
                <span className={styles.cardTag}>Press Release</span>
                <h3>Orisco Energy announces Q4 Financial Results</h3>
                <p>Strong operational performance leads to record cash flow for the fiscal year.</p>
                <Link href="#" className={styles.readMore}>Read More</Link>
              </div>
            </article>

            {/* News Card 2 */}
            <article className={styles.card}>
              <div className={styles.cardImage} style={{ background: 'linear-gradient(to bottom right, #ccc, #aaa)' }}></div>
              <div className={styles.cardContent}>
                <span className={styles.cardTag}>Sustainability</span>
                <h3>Advancing lower carbon energy</h3>
                <p>New initiatives launched to reduce carbon intensity across our global operations.</p>
                <Link href="#" className={styles.readMore}>Read More</Link>
              </div>
            </article>

            {/* News Card 3 */}
            <article className={styles.card}>
              <div className={styles.cardImage} style={{ background: 'linear-gradient(to bottom right, #eee, #ccc)' }}></div>
              <div className={styles.cardContent}>
                <span className={styles.cardTag}>Innovation</span>
                <h3>Technology driving efficiency</h3>
                <p>How digital twins are revolutionizing our offshore platforms.</p>
                <Link href="#" className={styles.readMore}>Read More</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.impactSection}>
        <div className="container">
          <div className={styles.impactContent}>
            <h2>Energy in action</h2>
            <p>We are working everyday to provide the energy that drives human progress and improves lives around the world.</p>
            <Link href="#" className="btn-primary">Our Operations</Link>
          </div>
        </div>
      </section>
    </>
  );
}
