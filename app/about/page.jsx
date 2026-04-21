'use client';
import { useEffect } from 'react';
import styles from './about.module.css';

const TIMELINE = [
  { year: '2024–',    title: 'Independent Practice',         sub: 'New Delhi, India',      type: 'work' },
  { year: '2022–24',  title: 'Associate, Studio Parallax',   sub: 'Mumbai, India',          type: 'work' },
  { year: '2021',     title: 'Visiting Critic, SPA Delhi',   sub: 'New Delhi, India',       type: 'edu'  },
  { year: '2019–22',  title: 'M.Arch — Urban Studies',       sub: 'CEPT University, Ahmedabad', type: 'edu' },
  { year: '2015–19',  title: 'B.Arch',                       sub: 'SPA New Delhi',          type: 'edu'  },
  { year: '2018',     title: 'Internship, BV Doshi Office',  sub: 'Ahmedabad',              type: 'work' },
];

export default function AboutPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <p className="section-label">Who I Am</p>
          <h1 className={styles.title}>About</h1>
          <div className="accent-line" />
        </div>
      </section>

      {/* Philosophy + portrait */}
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={`${styles.portraitWrap} fade-in`}>
              <div className={styles.portrait}>
                <div className={styles.portraitGeom} />
                <div className={styles.portraitInitials}>A.</div>
              </div>
              <div className={styles.portraitCaption}>
                <span>Architect</span>
                <span className={styles.divider}>·</span>
                <span>Urban Designer</span>
              </div>
            </div>

            <div className={`${styles.introText} fade-in`}>
              <blockquote className={styles.quote}>
                "Architecture is not about form — it is about the compression
                and release of human experience through space."
              </blockquote>
              <p>
                I am a New Delhi–based architect with seven years of experience
                across residential, civic, and urban scales. My practice centers
                on how materials age, how light moves, and how buildings earn
                their place in a landscape.
              </p>
              <p>
                I studied at SPA New Delhi and CEPT Ahmedabad, and have worked
                with studios ranging from boutique residential offices to large
                urban consultancies. Each project is an attempt to find the
                essential gesture — the least intervention that does the most.
              </p>
              <div className={styles.ctaRow}>
                <a
                  href="/cv-placeholder.pdf"
                  className="btn"
                  download
                  aria-label="Download CV"
                >
                  ↓ Download CV
                </a>
                <a href="mailto:hello@architect.in" className="btn btn-filled">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <p className="section-label fade-in">Career Path</p>
          <h2 className="section-title fade-in">Education &amp; Experience</h2>
          <div className="accent-line fade-in" />
          <div className={styles.timeline}>
            {TIMELINE.map((item, i) => (
              <div key={i} className={`${styles.timelineItem} fade-in`}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineNode}>
                  <div className={`${styles.dot} ${item.type === 'edu' ? styles.dotEdu : ''}`} />
                  {i < TIMELINE.length - 1 && <div className={styles.line} />}
                </div>
                <div className={styles.timelineContent}>
                  <h4 className={styles.timelineTitle}>{item.title}</h4>
                  <span className={styles.timelineSub}>{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
