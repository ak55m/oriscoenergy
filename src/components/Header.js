'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Search, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLightTheme = pathname === '/team' || pathname === '/operations' || pathname === '/company' || pathname === '/sustainability' || pathname === '/careers' || pathname === '/gallery' || pathname === '/contact-us';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.header} ${isLightTheme ? styles.lightTheme : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu} aria-label="Orisco Energy home">
          <Image
            src="/logo_nav.png"
            alt="Orisco Energy"
            width={64}
            height={64}
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* Mobile Menu Overlay */}
        <nav className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/" className={styles.navLink} onClick={closeMenu}>
            <span>Home</span>
            <ChevronRight size={20} className={styles.mobileArrow} />
          </Link>
          <Link href="/company" className={styles.navLink} onClick={closeMenu}>
            <span>Company</span>
            <ChevronRight size={20} className={styles.mobileArrow} />
          </Link>
          <Link href="/operations" className={styles.navLink} onClick={closeMenu}>
            <span>Operations</span>
            <ChevronRight size={20} className={styles.mobileArrow} />
          </Link>
          <Link href="/sustainability" className={styles.navLink} onClick={closeMenu}>
            <span>Sustainability</span>
            <ChevronRight size={20} className={styles.mobileArrow} />
          </Link>
          <Link href="/team" className={styles.navLink} onClick={closeMenu}>
            <span>Team</span>
            <ChevronRight size={20} className={styles.mobileArrow} />
          </Link>
          <Link href="/careers" className={styles.navLink} onClick={closeMenu}>
            <span>Careers</span>
            {/* No desktop arrow for Careers usually, but consistency for mobile */}
            <ChevronRight size={20} className={styles.mobileArrow} />
          </Link>
        </nav>

        <div className={styles.utilityNav}>
          <button className={styles.searchBtn}>
            <Search size={20} />
          </button>
        </div>

        <button
          className={styles.menuBtn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} color="#003155" /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
