import styles from './page.module.css';

export default function ContactUsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.heroHeader}>
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <h1>Contact Us</h1>
                    <p>
                        Reach out to discuss partnerships, projects, or general inquiries.
                    </p>
                </div>
            </header>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>Let&apos;s Talk</h2>
                    <p>
                        Our team is ready to respond quickly and connect you with the right experts.
                    </p>
                </div>

                <div className={styles.contactGrid}>
                    <div className={styles.detailsCard}>
                        <h3>Orisco Energy Limited</h3>
                        <ul className={styles.detailList}>
                            <li>
                                <span className={styles.detailLabel}>Nigeria Address</span>
                                <span>2, Water Resources Road, Eﬀurun, Delta State, Nigeria</span>
                            </li>
                            <li>
                                <span className={styles.detailLabel}>Nigeria Tel</span>
                                <span>+234 805 588 0024, +234 802 588 0732, +234 803 397 1510</span>
                            </li>
                            <li>
                                <span className={styles.detailLabel}>Canada Address</span>
                                <span>11, Fruitful Crescent Whitby. L1P0N3 Ontario, Canada</span>
                            </li>
                            <li>
                                <span className={styles.detailLabel}>Canada Tel</span>
                                <span>+1 647 807 1966</span>
                            </li>
                            <li>
                                <span className={styles.detailLabel}>USA Address</span>
                                <span>18930 Hartford Falls Ln, Richmond TX 77407</span>
                            </li>
                            <li>
                                <span className={styles.detailLabel}>USA Tel</span>
                                <span>+1 469 428 3546</span>
                            </li>
                            <li>
                                <span className={styles.detailLabel}>Email</span>
                                <a href="mailto:oriscoenergy@gmail.com">oriscoenergy@gmail.com</a>
                            </li>
                            <li>
                                <span className={styles.detailLabel}>Website</span>
                                <a href="https://www.oriscoenergy.com">www.oriscoenergy.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
