'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Zap, ChevronDown, ChevronRight } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Zap size={28} fill="currentColor" />
          Orisco <span>Energy</span>
        </Link>

        {/* Mobile Menu Overlay */}
        <nav className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="#" className={styles.navLink} onClick={closeMenu}>
            <span>Company</span>
            <ChevronDown size={14} className={styles.desktopArrow} />
            <ChevronRight size={20} className={styles.mobileArrow} />
          </Link>
          <Link href="#" className={styles.navLink} onClick={closeMenu}>
            <span>Operations</span>
            <ChevronDown size={14} className={styles.desktopArrow} />
            <ChevronRight size={20} className={styles.mobileArrow} />
          </Link>
          <Link href="#" className={styles.navLink} onClick={closeMenu}>
            <span>Sustainability</span>
            <ChevronDown size={14} className={styles.desktopArrow} />
            <ChevronRight size={20} className={styles.mobileArrow} />
          </Link>
          <Link href="#" className={styles.navLink} onClick={closeMenu}>
            <span>Investors</span>
            <ChevronDown size={14} className={styles.desktopArrow} />
            <ChevronRight size={20} className={styles.mobileArrow} />
          </Link>
          <Link href="#" className={styles.navLink} onClick={closeMenu}>
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
