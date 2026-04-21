'use client';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        {/* Cracked structure SVG */}
        <div className={styles.svg}>
          <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="260" height="260" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" opacity="0.3"/>
            <rect x="50" y="50" width="200" height="200" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
            {/* Main crack */}
            <path d="M150 30 L130 100 L160 115 L115 200 L135 195 L110 265" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            {/* Secondary crack */}
            <path d="M175 50 L192 120 L170 130 L200 180" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
            {/* Fine hairline */}
            <path d="M140 110 L125 145 L148 148" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
            {/* Horizontal rule */}
            <line x1="80" y1="260" x2="220" y2="260" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
            {/* Corner ticks */}
            <path d="M20 40 L20 20 L40 20" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M260 20 L280 20 L280 40" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>

        <div className={styles.code}>404</div>
        <h1 className={styles.heading}>Structure Not Found</h1>
        <p className={styles.message}>
          The blueprint for this page doesn't exist —<br />
          or it was demolished during construction.
        </p>
        <Link href="/" className="btn btn-filled">Return to Base</Link>

        <div className={styles.corner} />
      </div>
    </div>
  );
}
