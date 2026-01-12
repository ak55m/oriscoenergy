import styles from './page.module.css';

export const metadata = {
    title: 'Sustainability | Orisco Energy',
    description: 'Orisco Energy\'s commitment to sustainable practices, community engagement, and environmental stewardship.',
};

export default function SustainabilityPage() {
    return (
        <div className={styles.container}>
            <header className={styles.heroHeader}>
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <h1>Sustainability</h1>
                    <p>
                        Building a sustainable future through responsible energy practices and community partnership.
                    </p>
                </div>
            </header>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>Our Approach</h2>
                </div>
                <div className={styles.contentBlock}>
                    <p>
                        [Content regarding Orisco Energy's general approach to sustainability goes here. This section will outline the core philosophy of balancing energy needs with environmental responsibility.]
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>ENVIRONMENTAL PROTECTION POLICY</h2>
                </div>
                <div className={styles.contentBlock}>
                    <p>
                        All operations of Orisco Energy shall be planned and executed in such a manner as to minimize any adverse eﬀect or impact on the environment in which we operate.
                    </p>
                    <br />
                    <p>
                        The thrust of the planning and execution of our work shall be environmental protection and preservation. During our operation, all wastes generated shall be collected, segregated and disposed oﬀ in an environmentally sound manner according to the company&apos;s and local Regulatory policy. The emission to atmosphere shall be limited to the emission criteria of client and Orisco Energy reference data criteria. Contaminated water or other liquid shall be contained within the plot area and treated, analyzed prior to authorized discharge.
                    </p>
                    <br />
                    <p>
                        Orisco Energy shall put in place all necessary regulations/legislations on environmental issue by the Government of the Federal Republic of Nigeria and its appropriate agencies such as Federal Environmental Protection Agency (FEPA) and Local Government Authority and Ministry of Health.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>ORISCO ENERGY LIMITED COMMUNITY AFFAIRS POLICY</h2>
                </div>
                <div className={styles.contentBlock}>
                    <ol className={styles.commitmentList}>
                        <li>
                            <span className={styles.commitmentTitle}>Commitment to Community Engagement:</span>
                            Orisco Energy Limited recognizes the importance of engaging and collaborating with the communities in which we operate. We are committed to establishing and maintaining positive relationships based on mutual respect, transparency, and shared benefits.
                        </li>
                        <li>
                            <span className={styles.commitmentTitle}>Environmental Stewardship:</span>
                            Orisco Energy Limited is dedicated to environmental stewardship. We strive to minimize our environmental impact through responsible and sustainable practices. We engage with local communities to address environmental concerns and implement measures that preserve and protect the environment.
                        </li>
                        <li>
                            <span className={styles.commitmentTitle}>Employment and Capacity Building:</span>
                            Orisco Energy Limited is committed to promoting local employment opportunities and capacity building initiatives within the communities where we operate. We aim to empower community members through skills development, training programs, and employment opportunities.
                        </li>
                        <li>
                            <span className={styles.commitmentTitle}>Compliance and Ethical Conduct:</span>
                            We adhere to all relevant laws, regulations, and industry standards. Our community affairs initiatives are conducted with the utmost integrity, ensuring ethical practices and respect for human rights.
                        </li>
                        <li>
                            <span className={styles.commitmentTitle}>Partnerships and Collaboration:</span>
                            Orisco Energy Limited actively seeks partnerships and collaborations with local organizations, government agencies, and community leaders to address shared challenges, leverage resources, and promote inclusive growth.
                        </li>
                        <li>
                            <span className={styles.commitmentTitle}>Cultural Respect and Sensitivity:</span>
                            We respect the cultural heritage and diversity of the communities where we operate. Our activities are conducted with sensitivity to local customs, traditions, and values.
                        </li>
                    </ol>
                </div>
            </section>
        </div>
    );
}
