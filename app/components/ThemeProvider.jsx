'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ theme: 'blueprint', setTheme: () => {} });

export function ThemeProvider({ children }) {
  // Default to 'blueprint'; will sync from localStorage after mount
  const [theme, setThemeState] = useState('blueprint');

  useEffect(() => {
    const saved = localStorage.getItem('arch-theme') || 'blueprint';
    // Only update if different to avoid extra render
    if (saved !== 'blueprint') {
      setThemeState(saved);
    }
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const setTheme = (t) => {
    setThemeState(t);
    localStorage.setItem('arch-theme', t);
    document.documentElement.setAttribute('data-theme', t);
  };

  // Always render children — no more null return that causes hydration mismatch
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
