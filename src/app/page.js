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
            <h2>About Us</h2>
            <p className={styles.aboutText}>
              Orisco Energy Limited is an engineering, procurement, and supply chain company delivering high-quality solutions to the oil and gas industry and allied sectors in Nigeria and internationally. Founded in 2011, Orisco combines deep technical expertise, strong local content capability, and global sourcing strength to execute projects safely, efficiently, and to international standards.
              <br /><br />
              We provide end-to-end solutions spanning engineering, procurement, construction support, operations, maintenance, and specialized manpower services.
              Our experience cuts across onshore and offshore environments, with successful project execution for clients such as NNPC, NDDC, Daewoo, and other major industry players. We source and deliver critical materials and equipment both locally and internationally, operating confidently in local and foreign currencies.
              Driven by operational excellence, safety, and integrity, Orisco Energy Limited partners with clients to deliver reliable, cost-effective solutions that support asset integrity, production efficiency, and long-term value creation.
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
                        ? "url('https://images.unsplash.com/photo-1721554009743-317e0fec8dbc?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                      : index === 2
                        ? "url('/gallery/gallery-047.png')"
                        : "url('/images/heavy-duty-image.png')",
                    backgroundSize: index === 0 || index === 1 || index === 2 || index === 3 ? 'cover' : 'auto',
                    backgroundPosition: index === 0 || index === 1 || index === 2 || index === 3 ? 'center' : 'initial',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
                <div className={styles.cardContent}>
                  <h3>{service}</h3>
                  <p>
                    {service === "Construction (Industrial, Infrastructure and Building)"
                      ? "Construction services for industrial, infrastructure, and building projects, delivered with strong HSE standards, quality control, and on-time execution."
                      : service === "Engineering (Mechanical, Electrical and SCADA)"
                        ? "Engineering solutions across mechanical, electrical, and SCADA systems, from design and integration to commissioning and performance optimization."
                        : service === "Heavy duty machinery procurement, Installation and operations"
                          ? "Heavy duty machinery procurement, installation, and operations services, covering sourcing, logistics, commissioning, and on-site support for critical equipment."
                        : service === "Refinery and Process Plant Maintenance and Operations"
                          ? "Refinery and process plant maintenance and operations focused on uptime, safety, and efficient production performance."
                          : `Comprehensive ${service.toLowerCase()} solutions for the energy sector.`}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
