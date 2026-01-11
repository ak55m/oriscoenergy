import styles from './page.module.css';

export const metadata = {
    title: 'Operations & Services | Orisco Energy',
    description: 'Explore the comprehensive scope of services offered by Orisco Energy, from refinery maintenance to project management.',
};

export default function OperationsPage() {
    const services = [
        "Construction (Industrial, Infrastructure and Building)",
        "Developments of Operating procedures (Project Execution Plan (PEP), Commissioning, Start-up, Shutdown etc.)",
        "Engineering (Mechanical, Electrical and SCADA)",
        "Heavy duty machinery procurement, Installation and operations",
        "Instrumentation and Control",
        "Major Electrification and Street Light Projects",
        "Manpower Supply and Consultancy",
        "Marine services (Passengers boat, Tugboat, Barge and Houseboat supply etc.)",
        "Operations and Maintenance (O&M) Training and Support",
        "Operations and Maintenance services",
        "Pre-commissioning, Commissioning and Start-up of Oil and Gas Facilities",
        "Procurement and Support Services",
        "Project Development and Management",
        "Purchase and Marketing of Petroleum Products",
        "Quality Control & Inspection",
        "Refinery and Process Plant Maintenance and Operations",
        "Road and Drainage construction",
        "Safety and Environmental services",
        "Site Dredging and Supply of movable equipment",
        "Supply of Electrical and Mechanical parts",
        "Turnaround Maintenance (TAM) Support",
        "Transportation and Haulage Services",
        "Troubleshooting of Process Plant Shutdowns"
    ];

    return (
        <div className={styles.container}>
            <header className={styles.heroHeader}>
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <h1>Scope of Services</h1>
                    <p>
                        Our broad capability enables us to offer a wide range of specialized services.
                    </p>
                </div>
            </header>

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
