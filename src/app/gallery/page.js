import styles from './page.module.css';

const galleryItems = [
    '/gallery/gallery-01.jpg',
    '/gallery/gallery-02.jpg',
    '/gallery/gallery-03.jpg',
    '/gallery/gallery-04.jpg',
    '/gallery/gallery-05.jpg',
    '/gallery/gallery-06.jpg',
    '/gallery/gallery-07.jpg',
    '/gallery/gallery-08.jpg',
    '/gallery/gallery-09.jpg',
    '/gallery/gallery-10.jpg',
    '/gallery/gallery-11.jpg',
    '/gallery/gallery-12.jpg',
    '/gallery/gallery-13.jpg',
    '/gallery/gallery-14.jpg',
    '/gallery/gallery-15.jpg',
    '/gallery/gallery-16.jpg',
    '/gallery/gallery-17.jpg',
    '/gallery/gallery-18.jpg',
    '/gallery/gallery-19.jpg',
    '/gallery/gallery-20.jpg',
    '/gallery/gallery-21.jpg',
    '/gallery/gallery-22.jpg',
    '/gallery/gallery-23.jpg',
    '/gallery/gallery-24.jpg',
    '/gallery/gallery-25.jpg',
    '/gallery/gallery-26.jpg',
    '/gallery/gallery-27.jpg',
    '/gallery/gallery-28.jpg',
    '/gallery/gallery-29.jpg',
    '/gallery/gallery-30.jpg',
    '/gallery/gallery-31.jpg',
    '/gallery/gallery-32.jpg',
    '/gallery/gallery-33.jpg',
    '/gallery/gallery-34.jpg',
    '/gallery/gallery-35.jpg',
    '/gallery/gallery-36.jpg',
    '/gallery/gallery-37.jpg'
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
