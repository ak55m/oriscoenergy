import styles from './page.module.css';

export const metadata = {
    title: 'Company | Orisco Energy',
    description: 'Learn about Orisco Energy, our mission, vision, and commitment to excellence in the energy sector.',
};

export default function CompanyPage() {
    return (
        <div className={styles.container}>
            <header className={styles.heroHeader}>
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <h1>About Orisco Energy</h1>
                    <p>
                        A leading indigenous energy company committed to delivering sustainable solutions and driving industrial growth.
                    </p>
                </div>
            </header>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>Who We Are</h2>
                </div>
                <div className={styles.contentBlock}>
                    <p>
                        Orisco Energy Limited is an indigenous company providing a broad spectrum of services and expertise in the oil and gas Industry both locally and internationally. As an indigenous company, our focus often extends beyond oil and gas to support broader sectors, potentially including power generation, infrastructure development, and other related areas that contribute to Nigeria's industrial and economic growth.
                    </p>
                    <br />
                    <p>
                        Orisco Energy possess an optimum focus on total satisfaction of our clients and utilizing very eﬃcient network of procurement (Local and Foreign) for services in accomplishing our client's desire.
                    </p>
                    <br />
                    <p>
                        We ensure that our values are deeply rooted to establish a strong foundation enhancing a promising future.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.valuesGrid}>
                    <div className={styles.valueCard}>
                        <h3>Vision</h3>
                        <p>To become the top among the most experienced organizations in the world as we provide solution for the future.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <h3>Mission</h3>
                        <p>To be the world integrated attractive company that can deliver service and create value for our stakeholders.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <h3>Safety</h3>
                        <p>ORISCO Energy is committed to conducting its activities in a manner that promotes the health and safety of its employees, assets and the public as well as protection of the environment.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <h3>Our Values</h3>
                        <p>Safety, Integrity, Respect and Quality.</p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>QUALITY MANAGEMENT SYSTEMS (QMS) POLICY STATEMENT</h2>
                </div>
                <div className={`${styles.contentBlock} ${styles.qmsBlock}`}>
                    <p>
                        At Orisco Energy Limited, we are dedicated to maintaining the highest standards of quality in all our operations.
                        Our commitment to excellence is underpinned by a robust Quality Management System (QMS) that aligns with Local and international best practices, regulatory requirements, and the specific needs of our clients and stakeholders.
                    </p>
                    <br />
                    <h3>OUR COMMITMENTS:</h3>
                    <ol className={styles.commitmentList}>
                        <li>
                            <span className={styles.commitmentTitle}>Quality Assurance:</span>
                            We are committed to providing products and services that consistently meet or exceed the expectations and requirements of our customers. Our aim is to deliver reliable and safe solutions that contribute to their success.
                        </li>
                        <li>
                            <span className={styles.commitmentTitle}>Compliance:</span>
                            We adhere to all relevant statutory and regulatory requirements, industry standards, and best practices in the oil and gas sector. Our QMS is designed to ensure compliance and continuous improvement in our operations.
                        </li>
                        <li>
                            <span className={styles.commitmentTitle}>Continuous Improvement:</span>
                            We foster a culture of continuous improvement by regularly reviewing, evaluating, and enhancing our QMS processes. We seek opportunities for innovation and effiency to elevate the quality of our offerings.
                        </li>
                        <li>
                            <span className={styles.commitmentTitle}>Customer Focus:</span>
                            Our customers are at the heart of everything we do. We actively listen to their feedback, strive to understand their needs, and consistently aim to exceed their expectations by delivering exceptional value.
                        </li>
                        <li>
                            <span className={styles.commitmentTitle}>Employee Involvement and Development:</span>
                            We recognize the importance of our employees in maintaining and enhancing quality. We invest in their development, provide necessary training, and empower them to contribute to our QMS, encouraging a sense of ownership and accountability.
                        </li>
                        <li>
                            <span className={styles.commitmentTitle}>Risk Management:</span>
                            We proactively identify, assess, and manage risks that could affect the quality of our products and services. Our goal is to minimize risks and ensure the highest standards of quality and safety.
                        </li>
                        <li>
                            <span className={styles.commitmentTitle}>Documentation and Process Control:</span>
                            We maintain documented procedures and processes that ensure consistency, traceability, and control throughout our operations, fostering a structured approach to quality management.
                        </li>
                    </ol>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>LEADERSHIP & IMPLEMENTATION</h2>
                </div>
                <div className={`${styles.contentBlock} ${styles.qmsBlock}`}>
                    <h3>LEADERSHIP COMMITMENT:</h3>
                    <p>
                        Our leadership team is fully committed to supporting and implementing this QMS policy. They provide the necessary resources, guidance, and direction to ensure the successful implementation and continuous improvement of our Quality Management System.
                    </p>
                    <br />
                    <h3>COMMUNICATION AND IMPLEMENTATION:</h3>
                    <p>
                        We communicate this policy to all employees, stakeholders, and interested parties to ensure a clear understanding of our commitment to quality. We encourage active participation and engagement in the implementation and maintenance of our QMS.
                    </p>
                    <br />
                    <p>
                        This Quality Management System policy serves as a framework for establishing and reviewing quality objectives while maintaining a focus on continual improvement across Orisco Energy Limited.
                    </p>
                    <br />
                    <p>
                        We continue to obtain the latest ISO/NCEC certification toward perfecting the QMS of the organization to attain Local and International Standards.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>DIVERSITY STATEMENT</h2>
                </div>
                <div className={`${styles.contentBlock} ${styles.diversityBlock}`}>
                    <p>
                        At Orisco Energy, we firmly believe that diversity is at the core of our success, driving innovation, creativity, and excellence in all aspects of our operations. We embrace and celebrate diversity in all its forms, including but not limited to race, ethnicity, gender, age, religion, sexual orientation, disability, and background.
                    </p>
                    <br />
                    <p>
                        We foster an inclusive environment that values the unique perspectives, experiences, and talents of our employees, partners, and stakeholders.
                    </p>
                    <br />
                    <p>
                        We are committed to creating equal opportunities, promoting a culture of respect, and ensuring fairness in our workplace. By embracing diversity, we enrich our company&apos;s culture, strengthen our performance, and better serve the diverse needs of our global community.
                    </p>
                </div>
            </section>
        </div>
    );
}
