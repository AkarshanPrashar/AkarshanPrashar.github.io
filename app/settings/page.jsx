'use client';
import { useTheme } from '../components/ThemeProvider';
import styles from './settings.module.css';

const THEMES = [
  {
    id: 'blueprint',
    name: 'Blueprint',
    desc: 'Technical, precise — drafting table by night',
    bg: '#0a1628', surface: '#162444', accent: '#00d4ff', text: '#e8f4f8',
  },
  {
    id: 'brutalist',
    name: 'Brutalist',
    desc: 'Raw concrete, bold structure, honest material',
    bg: '#f5f0eb', surface: '#ede7df', accent: '#c44b2b', text: '#2d2d2d',
  },
  {
    id: 'organic',
    name: 'Organic',
    desc: 'Earth, timber, and growing things',
    bg: '#ede0ce', surface: '#d9c8ae', accent: '#3d5a3e', text: '#292318',
  },
  {
    id: 'noir',
    name: 'Noir',
    desc: 'Midnight steel, gilded details, pure contrast',
    bg: '#080808', surface: '#1a1a1a', accent: '#d4a843', text: '#f0ece4',
  },
];

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className="container">
          <p className="section-label">Preferences</p>
          <h1 className={styles.title}>Settings</h1>
          <div className="accent-line" />
          <p className={styles.subtitle}>
            Customise the portfolio's aesthetic. All preferences are saved locally to your device.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Theme Section */}
          <div className={styles.settingBlock}>
            <h2 className={styles.blockTitle}>Colour Theme</h2>
            <p className={styles.blockDesc}>
              Four architecture-inspired palettes. Each reflects a distinct material and spatial philosophy.
            </p>
            <div className={styles.themeGrid}>
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  className={`${styles.themeCard} ${theme === t.id ? styles.themeActive : ''}`}
                  onClick={() => setTheme(t.id)}
                  aria-pressed={theme === t.id}
                  aria-label={`Select ${t.name} theme`}
                >
                  {/* Mini preview */}
                  <div
                    className={styles.preview}
                    style={{ background: t.bg }}
                  >
                    {/* Nav bar */}
                    <div className={styles.previewNav} style={{ borderColor: `${t.accent}30`, background: `${t.bg}cc` }}>
                      <div className={styles.previewLogo} style={{ color: t.accent }}>A.</div>
                      <div className={styles.previewDots}>
                        {[1,2,3].map(d => (
                          <div key={d} className={styles.previewDot} style={{ background: `${t.text}30` }} />
                        ))}
                      </div>
                    </div>
                    {/* Content */}
                    <div className={styles.previewBody}>
                      <div className={styles.previewLine}
                        style={{ background: t.accent, width: '30%', height: '2px', marginBottom: '6px' }} />
                      <div className={styles.previewLine}
                        style={{ background: `${t.text}80`, width: '70%', height: '8px', marginBottom: '4px' }} />
                      <div className={styles.previewLine}
                        style={{ background: `${t.text}40`, width: '50%', height: '6px' }} />
                      <div className={styles.previewCard} style={{ background: t.surface, border: `1px solid ${t.accent}30` }}>
                        <div style={{ background: t.accent, width: '20%', height: '4px', borderRadius: '1px' }} />
                      </div>
                    </div>
                    {/* Grid overlay */}
                    <div className={styles.previewGrid}
                      style={{ backgroundImage: `linear-gradient(${t.accent}10 1px, transparent 1px), linear-gradient(90deg, ${t.accent}10 1px, transparent 1px)` }}
                    />
                    {/* Active check */}
                    {theme === t.id && (
                      <div className={styles.activeCheck} style={{ background: t.accent, color: t.bg }}>✓</div>
                    )}
                  </div>

                  <div className={styles.themeInfo}>
                    <h3 className={styles.themeName}>{t.name}</h3>
                    <p className={styles.themeDesc}>{t.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.divider} />

          {/* Reset */}
          <div className={styles.settingBlock}>
            <h2 className={styles.blockTitle}>Reset</h2>
            <p className={styles.blockDesc}>Restore all preferences to their defaults.</p>
            <button
              className="btn"
              onClick={() => setTheme('blueprint')}
            >
              Reset to Blueprint (default)
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
