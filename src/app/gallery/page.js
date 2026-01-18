import styles from './page.module.css';

const galleryItems = [
    {
        title: 'Field Operations',
        description: 'On-site execution and oversight across core assets.',
        image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Project Engineering',
        description: 'Design and delivery for complex infrastructure builds.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Maintenance Teams',
        description: 'Reliability-focused work that keeps systems online.',
        image: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Fabrication',
        description: 'Precision builds for critical equipment and tooling.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Safety Culture',
        description: 'Training and procedures that protect people and assets.',
        image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Logistics',
        description: 'Coordinated supply movement across operations.',
        image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

export default function GalleryPage() {
    return (
        <div className={styles.container}>
            <header className={styles.heroHeader}>
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <h1>Gallery</h1>
                    <p>
                        A closer look at the people, projects, and places that define Orisco Energy.
                    </p>
                </div>
            </header>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2>In Focus</h2>
                    <p>Snapshots from our operations, engineering, and field teams.</p>
                </div>

                <div className={styles.galleryGrid}>
                    {galleryItems.map((item) => (
                        <article key={item.title} className={styles.galleryCard}>
                            <div
                                className={styles.cardImage}
                                style={{ backgroundImage: `url(${item.image})` }}
                                aria-label={item.title}
                            />
                            <div className={styles.cardBody}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
