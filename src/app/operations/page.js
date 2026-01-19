import styles from './page.module.css';
import { services } from '@/data/services';


export const metadata = {
    title: 'Operations & Services | Orisco Energy',
    description: 'Explore the comprehensive scope of services offered by Orisco Energy, from refinery maintenance to project management.',
};

export default function OperationsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.heroHeader}>
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <h1>Operations</h1>
                    <p>
                        Our broad capability enables us to offer a wide range of specialized services that support critical energy and infrastructure operations.
                    </p>
                </div>
            </header>

            <section className={styles.introSection}>
                <p>
                    Orisco Energy integrated approach means contributing to the development of Nigeria Oil &amp; gas sector. We believe that oil &amp; gas producing nation should be
                    self-suﬃcient in term of energy supply.
                </p>
                <p>
                    We build a relationship of trust with our partners and create sustainable long-term values. Our services are oﬀered at aﬀordable and fair competitive prices and are commensurate with high quality products and services. Orisco Energy is made up of high skilled and dedicated professionals that provide our client with expertise and eﬃcient services.
                </p>
                <p>
                    Orisco Energy engages in the operation and maintenance of Refineries, Oil and Gas
                    Production Facilities (Land, Onshore and Oﬀshore) and other sectors outside the Oil
                    Industry.
                </p>
                <h2 className={styles.scopeHeading}>Our Scope of Services</h2>
                <p>
                    Our broad capability enables us to offer a wide range of specialized services.
                </p>
            </section>

            <section>
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.iconWrapper}>
                                ✓
                            </div>
                            <span className={styles.serviceText}>{service}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
