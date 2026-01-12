import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="#">About Orisco</Link></li>
                            <li><Link href="#">Leadership</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h4>Operations</h4>
                        <ul>
                            <li><Link href="#">Exploration</Link></li>
                            <li><Link href="#">Production</Link></li>
                            <li><Link href="#">Processing</Link></li>
                            <li><Link href="#">Technology</Link></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h4>Sustainability</h4>
                        <ul>
                            <li><Link href="#">Environment</Link></li>
                            <li><Link href="#">Social Responsibility</Link></li>
                            <li><Link href="#">Reports</Link></li>
                            <li><Link href="#">Climate Change</Link></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h4>Investors</h4>
                        <ul>
                            <li><Link href="#">Stock Information</Link></li>
                            <li><Link href="#">Financial Reports</Link></li>
                            <li><Link href="#">Events & Presentations</Link></li>
                            <li><Link href="#">Shareholder Services</Link></li>
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
