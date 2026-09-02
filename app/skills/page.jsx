'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './skills.module.css';

const SKILLS = {
  'Design Software': {
    icon: '⬡',
    color: 'var(--accent)',
    items: [
      { name: 'AutoCAD',          level: 85, tag: 'Expert'    },
      { name: 'Revit',            level: 78, tag: 'Advanced'  },
      { name: 'SketchUp',         level: 82, tag: 'Expert'    },
      { name: 'Lumion',           level: 75, tag: 'Advanced'  },
    ],
  },
  'Construction & Technical': {
    icon: '△',
    color: 'var(--accent)',
    items: [
      { name: 'Structural Systems', level: 80, tag: 'Advanced'  },
      { name: 'Building Services',  level: 72, tag: 'Proficient'},
      { name: 'Site Management',    level: 70, tag: 'Proficient'},
    ],
  },
  'Conceptual & Design': {
    icon: '◯',
    color: 'var(--accent)',
    items: [
      { name: 'Urban Design',      level: 85, tag: 'Advanced'  },
      { name: 'Spatial Thinking',  level: 95, tag: 'Expert'    },
      { name: 'Material Research', level: 88, tag: 'Advanced'  },
      { name: 'Parametric Design', level: 72, tag: 'Proficient'},
    ],
  },
  'Languages': {
    icon: '◇',
    color: 'var(--accent)',
    items: [
      { name: 'Hindi',   level: 100, tag: 'Native' },
      { name: 'English', level: 95,  tag: 'Fluent'  },
      { name: 'Dogri',   level: 100, tag: 'Native'  },
      { name: 'Punjabi', level: 95,  tag: 'Fluent'  },
    ],
  },
};

/* Segment ring – divides 100 into 20 segments, fills proportionally */
function SegmentRing({ level, size = 120 }) {
  const total = 20;
  const filled = Math.round((level / 100) * total);
  const cx = size / 2;
  const cy = size / 2;
  const R = size * 0.38;
  const r = size * 0.26;
  const GAP = 0.08; // radians gap between segments

  const fmt = (n) => +n.toFixed(4);

  const segments = Array.from({ length: total }, (_, i) => {
    const startAngle = (i / total) * Math.PI * 2 - Math.PI / 2 + GAP / 2;
    const endAngle = ((i + 1) / total) * Math.PI * 2 - Math.PI / 2 - GAP / 2;
    const x1 = cx + R * Math.cos(startAngle);
    const y1 = cy + R * Math.sin(startAngle);
    const x2 = cx + R * Math.cos(endAngle);
    const y2 = cy + R * Math.sin(endAngle);
    const x3 = cx + r * Math.cos(endAngle);
    const y3 = cy + r * Math.sin(endAngle);
    const x4 = cx + r * Math.cos(startAngle);
    const y4 = cy + r * Math.sin(startAngle);
    const d = `M ${fmt(x1)} ${fmt(y1)} A ${fmt(R)} ${fmt(R)} 0 0 1 ${fmt(x2)} ${fmt(y2)} L ${fmt(x3)} ${fmt(y3)} A ${fmt(r)} ${fmt(r)} 0 0 0 ${fmt(x4)} ${fmt(y4)} Z`;
    return { d, active: i < filled };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={styles.ring}>
      {segments.map((seg, i) => (
        <path
          key={i}
          d={seg.d}
          className={seg.active ? styles.segActive : styles.segInactive}
          style={{ animationDelay: `${i * 0.04}s` }}
        />
      ))}
      <text x={cx} y={cy + 5} textAnchor="middle" className={styles.ringPct}>
        {level}
      </text>
      <text x={cx} y={cy + 17} textAnchor="middle" className={styles.ringUnit}>%</text>
    </svg>
  );
}

/* Blueprint crosshair card for each skill */
function SkillCard({ skill, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.skillCard} ${visible ? styles.skillCardVisible : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* Corner markers – architectural drawing corners */}
      <span className={`${styles.corner} ${styles.tl}`} />
      <span className={`${styles.corner} ${styles.tr}`} />
      <span className={`${styles.corner} ${styles.bl}`} />
      <span className={`${styles.corner} ${styles.br}`} />

      <div className={styles.cardInner}>
        <SegmentRing level={visible ? skill.level : 0} size={96} />
        <div className={styles.cardMeta}>
          <span className={styles.cardName}>{skill.name}</span>
          <span className={styles.cardTag}>{skill.tag}</span>
        </div>
      </div>
    </div>
  );
}

/* Section panel with architectural floor-plan header */
function CategoryPanel({ category, data, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.panel} ${visible ? styles.panelVisible : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {/* Floor-plan style header */}
      <div className={styles.panelHeader}>
        <div className={styles.panelHeaderLeft}>
          <span className={styles.panelIcon}>{data.icon}</span>
          <div>
            <span className={styles.panelNum}>ZONE 0{index + 1}</span>
            <h3 className={styles.panelTitle}>{category}</h3>
          </div>
        </div>
        <div className={styles.panelStats}>
          <span className={styles.statVal}>{data.items.length}</span>
          <span className={styles.statLabel}>skills</span>
        </div>
      </div>

      {/* Dashed section rule – drafting style */}
      <div className={styles.dashedRule}>
        <span className={styles.dashedLabel}>proficiency matrix</span>
      </div>

      <div className={styles.cardGrid}>
        {data.items.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const panelRef = useRef(null);

  // Auto-scroll to skill panels shortly after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page}>

      {/* ── Header ── */}
      <section className={styles.header}>
        <div className="container">
          <p className="section-label">Expertise</p>
          <h1 className={styles.title}>Skills</h1>

          {/* Architectural title block */}
          <div className={styles.titleBlock}>
            <div className={styles.titleBlockLine} />
            <div className={styles.titleBlockContent}>
              <span className={styles.drawingNo}>DWG-SKL-001</span>
              <span className={styles.drawingScale}>SCALE 1:1</span>
            </div>
            <div className={styles.titleBlockLine} />
          </div>

          <p className={styles.subtitle}>
            A technical schedule of design competencies, software proficiencies,
            and creative capabilities developed across academic and professional practice.
          </p>
        </div>

        {/* Blueprint grid overlay in header */}
        <div className={styles.headerGrid} aria-hidden />
      </section>


      {/* ── Compass / orientation mark ── */}
      <div className={styles.compassWrap} aria-hidden>
        <div className={styles.compass}>
          <span className={styles.compassN}>N</span>
          <div className={styles.compassNeedle} />
          <div className={styles.compassNeedle + ' ' + styles.compassNeedleH} />
          <div className={styles.compassRing} />
        </div>
        <span className={styles.compassLabel}>ORIENTATION MARK</span>
      </div>

      {/* ── Skill panels ── */}
      <section ref={panelRef} className="section">
        <div className="container">
          <div className={styles.panelGrid}>
            {Object.entries(SKILLS).map(([cat, data], i) => (
              <CategoryPanel key={cat} category={cat} data={data} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Legend / stamp ── */}
      <section className={styles.legendSection}>
        <div className="container">
          <div className={styles.legend}>
            {[
              { tag: 'Native / Fluent', range: '95–100%' },
              { tag: 'Expert',          range: '82–94%'  },
              { tag: 'Advanced',        range: '70–81%'  },
              { tag: 'Proficient',      range: '60–69%'  },
            ].map(({ tag, range }) => (
              <div key={tag} className={styles.legendItem}>
                <span className={styles.legendDot} />
                <span className={styles.legendTag}>{tag}</span>
                <span className={styles.legendRange}>{range}</span>
              </div>
            ))}

            {/* Stamp */}
            <div className={styles.stamp}>
              <span className={styles.stampText}>REVIEWED</span>
              <span className={styles.stampSub}>2024–25</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
