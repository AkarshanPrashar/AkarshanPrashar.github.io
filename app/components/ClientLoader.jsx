'use client';
import { useState, useEffect } from 'react';
import Loader from './Loader';

export default function ClientLoader() {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);

  // Only show loader on first visit per session
  useEffect(() => {
    const seen = sessionStorage.getItem('arch-loaded');
    if (seen) {
      setLoading(false);
      setShow(false);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem('arch-loaded', '1');
    setLoading(false);
    setTimeout(() => setShow(false), 700);
  };

  if (!show) return null;

  return <Loader onComplete={handleComplete} />;
}
