'use client';
import { useEffect } from 'react';
import styles from './about.module.css';

/* ── TYPE CONFIG ─────────────────────── */
const TYPE = {
  edu:     { label: 'Education',    color: 'var(--accent)'  },
  work:    { label: 'Internship',   color: '#f59e0b'        },
  cert:    { label: 'Certification',color: '#a78bfa'        },
  project: { label: 'Project',      color: '#34d399'        },
  event:   { label: 'Event',        color: '#fb7185'        },
};

/* ── EDUCATION TIMELINE ──────────────── */
const EDUCATION = [
  {
    period: '2018 – 2020',
    title:  'Matriculation',
    org:    'Indian Public School',
    type:   'edu',
    bullets: [
      'Completed secondary education with focus on academics and creative activities.',
      'Built early interest in design, sketching, and visual creativity.',
    ],
  },
  {
    period: '2020 – 2022',
    title:  'Intermediate Education',
    org:    'Mount Litera Zee School',
    type:   'edu',
    bullets: [
      'Developed communication, presentation, and analytical skills.',
      'Started exploring architecture and design-oriented career paths.',
    ],
  },
  {
    period: 'Aug 2022 – Present',
    title:  'Bachelor of Architecture (B.Arch)',
    org:    'Lovely Professional University',
    loc:    'Punjab, India',
    type:   'edu',
    highlight: 'Current CGPA: 7.40',
    bullets: [
      'Learning architectural planning, sustainable design, drafting, visualization, and project development.',
      'Gained expertise in AutoCAD, Revit, SketchUp, Lumion, Rhino, Illustrator, and InDesign.',
    ],
  },
];

/* ── ACADEMIC & DESIGN JOURNEY ───────── */
const JOURNEY = [
  {
    period: 'Nov 2022',
    title:  'SPECTRA Short Movie Play — Second Runner Up',
    type:   'event',
    bullets: [
      'Showcased creativity, teamwork, and presentation abilities through artistic participation.',
    ],
  },
  {
    period: 'Jun 2023',
    title:  '65th ANC NASA — Creative & Decoration Committee Volunteer',
    org:    'National Association of Students of Architecture',
    type:   'event',
    bullets: [
      'Participated in national-level architectural event activities.',
      'Enhanced creative execution and teamwork experience.',
    ],
  },
  {
    period: 'Oct 2023',
    title:  '5th NICHE & IPM Meet — Technical Committee Volunteer',
    type:   'event',
    bullets: [
      'Contributed to technical coordination and event management activities.',
      'Improved leadership and collaborative skills.',
    ],
  },
  {
    period: 'Aug – Dec 2023',
    title:  'Revit Beginner Certification',
    type:   'cert',
    bullets: [
      'Learned BIM fundamentals and architectural modeling workflows.',
    ],
  },
  {
    period: 'Jan – May 2024',
    title:  'Library Project',
    org:    'Jaipur, Rajasthan',
    type:   'project',
    bullets: [
      'Designed a public library focusing on functionality for diverse user groups.',
      'Learned public-space planning and user-centered architecture.',
    ],
  },
  {
    period: 'Jun – Jul 2024',
    title:  'Internship',
    org:    'Brick Art',
    type:   'work',
    bullets: [
      'Worked on municipal drawings, technical drawings, and working drawings.',
      'Assisted in 3D modeling, rendering, site analysis, and project documentation.',
      'Strengthened practical architectural and project-management experience.',
    ],
  },
  {
    period: 'Aug – Dec 2024',
    title:  'Architecture College Project',
    org:    'Pathankot, Punjab',
    type:   'project',
    bullets: [
      'Focused on institutional and campus planning concepts.',
      'Designed academic, recreational, and administrative spaces.',
    ],
  },
  {
    period: 'Dec 2024',
    title:  'Laurie Baker Workshop Certification',
    type:   'cert',
    bullets: [
      'Explored sustainable and cost-effective architectural practices.',
      'Learned climate-responsive and eco-friendly design approaches.',
    ],
  },
  {
    period: 'Jan – May 2025',
    title:  'Boys Hostel Project',
    org:    'Jalandhar, Punjab',
    type:   'project',
    bullets: [
      'Designed modern hostel spaces balancing privacy and community interaction.',
      'Learned residential planning and ventilation optimization.',
    ],
  },
  {
    period: 'Aug – Dec 2025',
    title:  'Varanasi Ropeway Project',
    org:    'Uttar Pradesh',
    type:   'project',
    bullets: [
      'Studied transit-oriented development and ropeway infrastructure.',
      'Explored urban mobility integration with city fabric and public transport systems.',
    ],
  },
  {
    period: 'Feb 2026',
    title:  'BIM Project Modelling Certification',
    type:   'cert',
    bullets: [
      'Advanced understanding of Building Information Modeling workflows and collaborative architectural systems.',
    ],
  },
];

/* ── TIMELINE ITEM COMPONENT ─────────── */
function TimelineItem({ item, index, last }) {
  const t = TYPE[item.type];
  return (
    <div className={`${styles.timelineItem} fade-in`}>
      {/* Left: period */}
      <div className={styles.timelineYear}>{item.period}</div>

      {/* Centre: node + line */}
      <div className={styles.timelineNode}>
        <div
          className={styles.dot}
          style={{ borderColor: t.color, background: item.type === 'edu' ? t.color : 'var(--bg)' }}
        />
        {!last && <div className={styles.line} />}
      </div>

      {/* Right: content */}
      <div className={styles.timelineContent}>
        <div className={styles.typeTag} style={{ color: t.color, borderColor: t.color }}>
          {t.label}
        </div>
        <h4 className={styles.timelineTitle}>{item.title}</h4>
        {item.org && (
          <span className={styles.timelineSub}>
            {item.org}{item.loc ? ` — ${item.loc}` : ''}
          </span>
        )}
        {item.highlight && (
          <span className={styles.highlight}>{item.highlight}</span>
        )}
        <ul className={styles.bullets}>
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── PAGE ────────────────────────────── */
export default function AboutPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className={styles.page}>

      {/* ── Header ── */}
      <section className={styles.header}>
        <div className="container">
          <p className="section-label">Who I Am</p>
          <h1 className={styles.title}>Akarshan Prashar</h1>
          <div className="accent-line" />
        </div>
      </section>

      {/* ── Intro ── */}
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={`${styles.portraitWrap} fade-in`}>
              <div className={styles.portrait}>
                <img
                  src="/architect.png"
                  alt="Akarshan Prashar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 'inherit',
                    display: 'block',
                  }}
                />
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
                I am an architecture student at Lovely Professional University, Punjab,
                passionate about creating spaces that blend functionality, culture, and
                human experience. My design approach focuses on sustainable planning,
                spatial innovation, and contextual architecture that responds to both
                people and the environment.
              </p>
              <p>
                I have developed skills in architectural design, visualization, technical
                detailing, and concept development through various academic and design
                projects. I enjoy exploring how architecture can influence emotions,
                community interaction, and everyday life while creating meaningful and
                experiential spaces.
              </p>
              <p>
                Proficient in AutoCAD, Revit, SketchUp, Lumion, Rhino, Illustrator,
                and InDesign — and continuously developing my BIM and sustainable design
                practice through real projects and certifications.
              </p>
              <div className={styles.ctaRow}>
                <a href="https://drive.google.com/file/d/1X-mj9BtnmynDm4F_o8I9Ofjx00zI9eI3/view?usp=sharing" className="btn" target="_blank" rel="noopener noreferrer" aria-label="View CV">
                  ↓ View CV
                </a>
                <a href="/about#contact" className="btn btn-filled">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Education Timeline ── */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <p className="section-label fade-in">Academic Background</p>
          <h2 className="section-title fade-in">Education</h2>
          <div className="accent-line fade-in" />

          <div className={styles.timeline}>
            {EDUCATION.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} last={i === EDUCATION.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Academic & Design Journey ── */}
      <section className={`section ${styles.journeySection}`}>
        <div className="container">
          <p className="section-label fade-in">Projects, Events & Certifications</p>
          <h2 className="section-title fade-in">Academic & Design Journey</h2>
          <div className="accent-line fade-in" />

          {/* Legend */}
          <div className={styles.legend}>
            {Object.entries(TYPE).map(([key, val]) => (
              <span key={key} className={styles.legendItem}>
                <span className={styles.legendDot} style={{ background: val.color }} />
                {val.label}
              </span>
            ))}
          </div>

          <div className={styles.timeline}>
            {JOURNEY.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} last={i === JOURNEY.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <p className="section-label fade-in">Reach Out</p>
          <h2 className="section-title fade-in">Contact</h2>
          <div className="accent-line fade-in" />

          <div id="contact" className={`${styles.contactPanel} fade-in`}>
            <div className={styles.contactRuleRow}>
              <span className={styles.contactRuleLabel}>CONTACT DETAILS</span>
              <div className={styles.contactRule} />
            </div>

            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <rect x="2" y="4" width="20" height="16" rx="1" />
                    <path d="M2 4l10 9 10-9" />
                  </svg>
                ),
                label: 'EMAIL',
                value: 'akarshanprashar03@gmail.com',
                href: 'mailto:akarshanprashar03@gmail.com',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <rect x="2" y="2" width="20" height="20" rx="3" />
                    <path d="M16 8h-2a4 4 0 0 0-4 4v2" />
                    <circle cx="8" cy="12" r="1" />
                    <path d="M8 13v4M12 12v4M16 12v4" />
                  </svg>
                ),
                label: 'LINKEDIN',
                value: 'linkedin.com/in/akarshan-prashar',
                href: 'https://www.linkedin.com/in/akarshan-prashar/',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M6.6 10.8a15.3 15.3 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.57 1 1 0 0 1-.25 1z" />
                  </svg>
                ),
                label: 'PHONE',
                value: '+91 70068 35050',
                href: 'tel:+917006835050',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                ),
                label: 'LOCATION',
                value: 'Punjab, India',
                href: null,
              },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className={styles.contactRow}>
                <div className={styles.contactIcon}>{icon}</div>
                <span className={styles.contactLabel}>{label}</span>
                <div className={styles.contactDots} />
                {href ? (
                  <a href={href} className={styles.contactValue} target="_blank" rel="noopener noreferrer">
                    {value}
                  </a>
                ) : (
                  <span className={styles.contactValue}>{value}</span>
                )}
              </div>
            ))}

            <div className={styles.contactFooter}>
              <span className={styles.contactCoord}>31.1471° N · 75.3412° E</span>
              <span className={styles.contactTag}>[ ARCH / PORTFOLIO ]</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
