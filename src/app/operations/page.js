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
                    We build a relationship of trust with our partners and create sustainable long-term values. Our services are oﬀered at aﬀordable and fair competitive prices and are commensurate with high quality products and services. Orisco Energy is made up of high skilled and dedicated professionals that provide our client with expertise and eﬃcient services.
                </p>
                <h2>Scope of Services</h2>
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
