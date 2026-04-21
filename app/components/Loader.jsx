'use client';
import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

const MESSAGES = [
  'Rendering foundations…',
  'Pouring concrete…',
  'Installing glass panels…',
  'Calibrating blueprints…',
  'Final inspection…',
];

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [msgIdx, setMsgIdx] = useState(0);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate load progress
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 18 + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 600);
        }, 400);
      }
      setProgress(Math.min(current, 100));
    }, 180);

    // Cycle messages
    const msgInterval = setInterval(() => {
      setMsgIdx(i => (i + 1) % MESSAGES.length);
    }, 900);

    // Detect offline
    if (!navigator.onLine) setError(true);
    const handleOffline = () => setError(true);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearInterval(interval);
      clearInterval(msgInterval);
      window.removeEventListener('offline', handleOffline);
    };
  }, [onComplete]);

  if (error) {
    return (
      <div className={styles.loader}>
        <div className={styles.errorState}>
          <div className={styles.crackSvg}>
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="180" height="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
              <path d="M100 20 L88 80 L110 90 L82 160 L95 155 L78 185" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M120 30 L132 85 L118 92 L138 140" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            </svg>
          </div>
          <h2>Structure Compromised</h2>
          <p>Connection lost. The blueprint cannot be loaded.</p>
          <button className="btn" onClick={() => window.location.reload()}>
            Rebuild
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.loader} ${done ? styles.exit : ''}`}>
      {/* Blueprint grid lines drawing animation */}
      <div className={styles.gridLines} />

      <div className={styles.content}>
        {/* Monogram */}
        <div className={styles.monogram}>A.</div>

        {/* Progress beam */}
        <div className={styles.beamWrap}>
          <div className={styles.beamTrack}>
            <div
              className={styles.beamFill}
              style={{ width: `${progress}%` }}
            />
            {/* Tick marks */}
            {[25, 50, 75].map(t => (
              <div
                key={t}
                className={styles.tick}
                style={{ left: `${t}%` }}
              />
            ))}
          </div>
          <div className={styles.beamLabels}>
            <span className={styles.pct}>{Math.floor(progress)}</span>
            <span className={styles.pctSym}>%</span>
          </div>
        </div>

        {/* Cycling message */}
        <p className={styles.message} key={msgIdx}>
          {MESSAGES[msgIdx]}
        </p>

        {/* Corner brackets */}
        <div className={`${styles.corner} ${styles.cornerTl}`} />
        <div className={`${styles.corner} ${styles.cornerTr}`} />
        <div className={`${styles.corner} ${styles.cornerBl}`} />
        <div className={`${styles.corner} ${styles.cornerBr}`} />
      </div>
    </div>
  );
}
