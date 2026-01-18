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
                                <span className={styles.detailLabel}>Canada Address</span>
                                <span>11, Fruitful Crescent Whitby. L1P0N3 Ontario, Canada</span>
                            </li>
                            <li>
                                <span className={styles.detailLabel}>Canada Tel</span>
                                <span>+16478071966</span>
                            </li>
                            <li>
                                <span className={styles.detailLabel}>Managing Director, P.M</span>
                                <span>Mohammed Usman Anyanokhabor — +1(469)-428-3546</span>
                            </li>
                            <li>
                                <span className={styles.detailLabel}>Project Manager</span>
                                <span>Charles Isiwele — +234(803)-397-1510</span>
                            </li>
                            <li>
                                <span className={styles.detailLabel}>Email</span>
                                <a href="mailto:oriscoenergy@gmail.com">oriscoenergy@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    <form className={styles.formCard} action="#" method="post">
                        <div className={styles.formRow}>
                            <label htmlFor="full-name">Full Name</label>
                            <input id="full-name" name="fullName" type="text" placeholder="Your name" />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="email">Email Address</label>
                            <input id="email" name="email" type="email" placeholder="you@email.com" />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="company">Company</label>
                            <input id="company" name="company" type="text" placeholder="Company name" />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="How can we help?" />
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
