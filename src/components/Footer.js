import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <ul>
                            <li><Link href="/company">About Us</Link></li>
                            <li><Link href="/team">Team</Link></li>
                            <li><Link href="/gallery">Gallery</Link></li>
                            <li><Link href="/contact-us">Contact Us</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Orisco Energy. All rights reserved.</p>
                    <div>
                        <Link href="#">Privacy Policy</Link> &bull; <Link href="#">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
