'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Zap, ChevronDown } from 'lucide-react';
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
            Company <ChevronDown size={14} />
          </Link>
          <Link href="#" className={styles.navLink} onClick={closeMenu}>
            Operations <ChevronDown size={14} />
          </Link>
          <Link href="#" className={styles.navLink} onClick={closeMenu}>
            Sustainability <ChevronDown size={14} />
          </Link>
          <Link href="#" className={styles.navLink} onClick={closeMenu}>
            Investors <ChevronDown size={14} />
          </Link>
          <Link href="#" className={styles.navLink} onClick={closeMenu}>
            Careers
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
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
