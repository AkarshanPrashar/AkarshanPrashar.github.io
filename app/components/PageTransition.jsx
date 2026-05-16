'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './PageTransition.module.css';

export default function PageTransition() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const prevPath = useRef(pathname);

  useEffect(() => {
    // Only trigger on actual path changes (not the initial mount)
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;

    // Reset & start
    setProgress(0);
    setVisible(true);

    let current = 0;
    timerRef.current = setInterval(() => {
      // Fast at start, slow near end (never reaches 100 until done)
      current += current < 60 ? Math.random() * 15 + 8 : Math.random() * 3 + 1;
      if (current >= 90) current = 90; // stall near the end, finish on cleanup
      setProgress(current);
    }, 120);

    // Finish after a short delay (page content should be ready)
    const done = setTimeout(() => {
      clearInterval(timerRef.current);
      setProgress(100);
      setTimeout(() => setVisible(false), 400);
    }, 600);

    return () => {
      clearInterval(timerRef.current);
      clearTimeout(done);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className={styles.bar} style={{ width: `${progress}%` }}>
      <div className={styles.glow} />
    </div>
  );
}
