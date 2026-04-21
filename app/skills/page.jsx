'use client';
import { useEffect, useRef } from 'react';
import styles from './skills.module.css';

const SKILLS = {
  'Design Software': [
    { name: 'AutoCAD',         level: 95, tag: 'Expert'       },
    { name: 'Revit',           level: 88, tag: 'Advanced'     },
    { name: 'SketchUp',        level: 92, tag: 'Expert'       },
    { name: 'Rhino + Grasshopper', level: 78, tag: 'Advanced' },
    { name: 'Lumion',          level: 85, tag: 'Advanced'     },
    { name: 'Adobe Suite',     level: 90, tag: 'Expert'       },
  ],
  'Construction & Technical': [
    { name: 'Structural Systems',   level: 80, tag: 'Advanced' },
    { name: 'Building Services',    level: 72, tag: 'Proficient'},
    { name: 'Site Management',      level: 70, tag: 'Proficient'},
    { name: 'Sustainability / LEED',level: 75, tag: 'Advanced' },
  ],
  'Conceptual & Design': [
    { name: 'Urban Design',     level: 85, tag: 'Advanced' },
    { name: 'Spatial Thinking', level: 95, tag: 'Expert'   },
    { name: 'Material Research',level: 88, tag: 'Advanced' },
    { name: 'Parametric Design',level: 72, tag: 'Proficient'},
  ],
  'Languages': [
    { name: 'Hindi',   level: 100, tag: 'Native'     },
    { name: 'English', level: 95,  tag: 'Fluent'     },
    { name: 'French',  level: 45,  tag: 'Elementary' },
  ],
};

export default function SkillsPage() {
  const barsRef = useRef([]);

  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));

    // Animate bars on scroll
    const barElements = document.querySelectorAll('[data-pct]');
    const barObs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          const pct = e.target.getAttribute('data-pct');
          e.target.style.width = `${pct}%`;
        }
      }),
      { threshold: 0.2 }
    );
    barElements.forEach(el => barObs.observe(el));

    return () => { obs.disconnect(); barObs.disconnect(); };
  }, []);

  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className="container">
          <p className="section-label">Expertise</p>
          <h1 className={styles.title}>Skills</h1>
          <div className="accent-line" />
          <p className={styles.subtitle}>
            A blueprint of technical proficiencies, design competencies, and creative tools
            developed across academic and professional practice.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {Object.entries(SKILLS).map(([category, skills], ci) => (
              <div key={category} className={`${styles.category} fade-in`}>
                <div className={styles.catHeader}>
                  <span className={styles.catNum}>0{ci + 1}</span>
                  <h3 className={styles.catTitle}>{category}</h3>
                </div>
                <div className={styles.skillList}>
                  {skills.map((skill, si) => (
                    <div key={skill.name} className={styles.skillItem}>
                      <div className={styles.skillTop}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <div className={styles.skillRight}>
                          <span className={styles.skillTag}>{skill.tag}</span>
                          <span className={styles.skillPct}>{skill.level}%</span>
                        </div>
                      </div>
                      <div className={styles.barTrack}>
                        {/* Tick marks */}
                        {[25, 50, 75].map(t => (
                          <div key={t} className={styles.barTick} style={{ left: `${t}%` }} />
                        ))}
                        {/* Animated fill */}
                        <div
                          className={styles.barFill}
                          data-pct={skill.level}
                          style={{ width: 0, transitionDelay: `${si * 0.1}s` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
