import styles from './page.module.css';

const galleryItems = [
    '/gallery/gallery-001.png',
    '/gallery/gallery-002.jpg',
    '/gallery/gallery-003.jpg',
    '/gallery/gallery-004.jpg',
    '/gallery/gallery-005.jpg',
    '/gallery/gallery-006.jpg',
    '/gallery/gallery-007.jpg',
    '/gallery/gallery-008.jpg',
    '/gallery/gallery-009.jpg',
    '/gallery/gallery-010.jpg',
    '/gallery/gallery-011.jpg',
    '/gallery/gallery-012.jpg',
    '/gallery/gallery-013.jpg',
    '/gallery/gallery-014.jpg',
    '/gallery/gallery-015.jpg',
    '/gallery/gallery-016.jpg',
    '/gallery/gallery-017.jpg',
    '/gallery/gallery-018.jpg',
    '/gallery/gallery-019.jpg',
    '/gallery/gallery-020.jpg',
    '/gallery/gallery-022.jpg',
    '/gallery/gallery-023.jpg',
    '/gallery/gallery-024.jpg',
    '/gallery/gallery-025.jpg',
    '/gallery/gallery-026.jpg',
    '/gallery/gallery-027.jpg',
    '/gallery/gallery-028.jpg',
    '/gallery/gallery-029.jpg',
    '/gallery/gallery-030.jpg',
    '/gallery/gallery-031.jpg',
    '/gallery/gallery-032.jpg',
    '/gallery/gallery-033.jpg',
    '/gallery/gallery-034.jpg',
    '/gallery/gallery-035.jpg',
    '/gallery/gallery-036.jpg',
    '/gallery/gallery-037.jpg',
    '/gallery/gallery-038.jpg',
    '/gallery/gallery-039.jpg',
    '/gallery/gallery-040.jpg',
    '/gallery/gallery-041.jpg',
    '/gallery/gallery-042.jpg',
    '/gallery/gallery-043.jpg',
    '/gallery/gallery-044.jpg',
    '/gallery/gallery-046.png',
    '/gallery/gallery-047.png',
    '/gallery/gallery-048.png',
    '/gallery/gallery-049.png',
    '/gallery/gallery-050.jpg',
    '/gallery/gallery-051.jpg',
    '/gallery/gallery-052.png',
    '/gallery/gallery-053.jpg',
    '/gallery/gallery-054.jpg',
    '/gallery/gallery-055.jpg',
    '/gallery/gallery-056.jpg',
    '/gallery/gallery-057.jpg',
    '/gallery/gallery-058.png',
    '/gallery/gallery-059.png',
    '/gallery/gallery-060.jpg',
    '/gallery/gallery-061.jpg',
    '/gallery/gallery-062.jpg',
    '/gallery/gallery-063.jpg',
    '/gallery/gallery-064.jpg',
    '/gallery/gallery-065.jpg'
];

export default function GalleryPage() {
    return (
        <div className={styles.container}>
            <header className={styles.heroHeader}>
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <h1>Gallery</h1>
                    <p className={styles.heroSubtitle}>
                        Snapshots from our operations, engineering, and field teams.
                    </p>
                </div>
            </header>

            <section className={styles.section}>
                <div className={styles.galleryGrid}>
                    {galleryItems.map((item) => (
                        <div
                            key={item}
                            className={styles.galleryImage}
                            style={{ backgroundImage: `url(${item})` }}
                            role="img"
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
