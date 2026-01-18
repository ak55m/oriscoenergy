'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Search, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import styles from './Header.module.css';
import { services } from '@/data/services';
import { searchIndex } from '@/data/searchIndex';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const pathname = usePathname();

  const isLightTheme = pathname === '/team' || pathname === '/operations' || pathname === '/company' || pathname === '/sustainability' || pathname === '/careers' || pathname === '/gallery' || pathname === '/contact-us';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => {
    setIsSearchOpen(false);
    setQuery('');
  };

  const searchItems = useMemo(() => ([
    ...searchIndex,
    ...services.map((service) => ({
      label: service,
      href: '/operations',
      type: 'Service'
    }))
  ]), []);

  const filteredItems = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return searchItems.slice(0, 12);
    }
    return searchItems.filter((item) => item.label.toLowerCase().includes(trimmed)).slice(0, 20);
  }, [query, searchItems]);

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
          <button className={styles.searchBtn} onClick={openSearch} aria-label="Open site search">
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

      {isSearchOpen && (
        <div className={styles.searchOverlay} role="dialog" aria-modal="true" aria-label="Site search">
          <button className={styles.searchBackdrop} onClick={closeSearch} aria-label="Close search" />
          <div className={styles.searchModal}>
            <div className={styles.searchHeader}>
              <h3>Search</h3>
              <button className={styles.searchClose} onClick={closeSearch} aria-label="Close search">
                <X size={18} />
              </button>
            </div>
            <div className={styles.searchInputRow}>
              <Search size={18} />
              <input
                type="search"
                placeholder="Search pages or services"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                autoFocus
              />
            </div>
            <div className={styles.searchResults}>
              {filteredItems.length === 0 ? (
                <p className={styles.searchEmpty}>No results found.</p>
              ) : (
                filteredItems.map((item) => (
                  <Link
                    key={`${item.type}-${item.label}`}
                    href={item.href}
                    className={styles.searchResult}
                    onClick={closeSearch}
                  >
                    <span>{item.label}</span>
                    <em>{item.type}</em>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
