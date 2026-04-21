'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '/',         label: 'Home'     },
  { href: '/projects', label: 'Projects' },
  { href: '/skills',   label: 'Skills'   },
  { href: '/about',    label: 'About'    },
  { href: '/settings', label: 'Settings' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`container ${styles.container}`}>
          <Link href="/" className={styles.navLogo}>
            A<span>.</span>
          </Link>

          <ul className={styles.navLinks}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={pathname === href ? styles.active : ''}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className={styles.navHamburger}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`${styles.navDrawer} ${drawerOpen ? styles.open : ''}`}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setDrawerOpen(false)}
            className={pathname === href ? styles.active : ''}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
