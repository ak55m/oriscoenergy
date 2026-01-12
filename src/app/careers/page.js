import styles from './page.module.css';

export const metadata = {
    title: 'Careers | Orisco Energy',
    description: 'Join the Orisco Energy team and help power the future.',
};

export default function CareersPage() {
    return (
        <div className={styles.container}>
            <header className={styles.heroHeader}>
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <h1>Careers at Orisco</h1>
                    <p>
                        Join us in our mission to deliver sustainable energy solutions to the world.
                    </p>
                </div>
            </header>

            <main className={styles.content}>
                <div className={styles.messageBox}>
                    <h2>No Current Openings</h2>
                    <p>
                        We appreciate your interest in joining our team. While we don't have any open positions at the moment,
                        we are always on the lookout for talented individuals. Please check back soon for future opportunities.
                    </p>
                </div>
            </main>
        </div>
    );
}
