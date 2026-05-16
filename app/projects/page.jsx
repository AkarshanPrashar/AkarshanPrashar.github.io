'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './projects.module.css';

const PROJECTS = [
  {
    id: 10,
    title: 'Varanasi Ropeway',
    typology: 'Urban Planning',
    location: 'Varanasi, India',
    area: '6041 m²',
    materials: ['Granite', 'Kota Stone', 'Concrete'],
    concept: 'A proposal for a ropeway system to connect the ghats of Varanasi, reducing congestion and preserving the cultural heritage of the city.',
    color: '#b8d4e8',
    tags: ['Urban Planning', 'Architecture'],
    embedSrc: 'https://heyzine.com/flip-book/801146c95c.html',
  },
  {
    id: 9,
    title: 'Architecture College',
    typology: 'Campus Planning',
    location: 'Sonipat, Haryana',
    area: '3407 m²',
    materials: ['RCC', 'Brick', 'Steel'],
    concept: 'A proposal for an architecture college campus in Sonipat, Haryana, designed to provide students with a stimulating learning environment that fosters creativity, collaboration, and innovation.',
    color: '#e8a87c',
    tags: ['Institutional', 'Education', 'Architecture'],
    embedSrc: 'https://heyzine.com/flip-book/eb77194776.html',
  },
  {
    id: 8,
    title: 'Boys Hostel',
    typology: 'Academic Project',
    location: 'Jalandhar, Punjab',
    area: '38188 m²',
    materials: ['Concrete', 'Brick', 'Steel'],
    concept: 'A residential campus designed around the idea of community and transition — where shared corridors, common courts, and layered social spaces guide students from private study to collective life.',
    color: '#a3c4bc',
    tags: ['Institutional', 'Education', 'Architecture'],
    embedSrc: 'https://heyzine.com/flip-book/a57b435d49.html',
  },
  {
    id: 7,
    title: 'Library',
    typology: 'Academic Project',
    location: 'Jalandhar, Punjab',
    area: '3,000 m²',
    materials: ['Acoustic Panels', 'Exposed Concrete', 'Glass Curtain Wall'],
    concept:
      'A community library rooted in culture and heritage — designed around light-filled reading halls, acoustic interiors, and a glazed facade that opens the institution to the public life of Jalandhar.',
    color: '#ff4d4d',
    tags: ['Culture & Heritage', 'Community'],
    embedSrc: 'https://heyzine.com/flip-book/6456cfcdfa.html',
  },
];

export default function ProjectsPage() {
  const [modal, setModal] = useState(null);

  // Fade-in observer
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setModal(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <p className="section-label">Selected Works</p>
          <h1 className={styles.title}>Projects</h1>
          <div className="accent-line" />
          <p className={styles.subtitle}>
            A curated selection of residential, civic, commercial, and speculative projects
            across India — each an exploration of material, light, and context.
          </p>
        </div>
      </section>

      {/* Project Entries */}
      <section className={styles.projectsSection}>
        <div className="container">
          {PROJECTS.map((project, i) => (
            <ProjectEntry
              key={project.id}
              project={project}
              index={i}
              onViewDetails={() => setModal(project)}
            />
          ))}
        </div>
      </section>

      {/* ── Working Drawings ── */}
      <section className={styles.subSection}>
        <div className="container">
          <div className={styles.subSectionHeader}>
            <p className="section-label">Execution</p>
            <h2 className={styles.subTitle}>Working Drawings</h2>
            <div className="accent-line" />
            <p className={styles.subSubtitle}>
              Technical construction documents, detail drawings, and annotated plans produced
              for built and speculative projects — bridging design intent and site reality.
            </p>
          </div>

          <div className={styles.flipbookWrapper}>
            <div className={styles.flipbookContainer}>
              <iframe
                src="https://heyzine.com/flip-book/6a70e6ba3c.html"
                width="100%"
                height="100%"
                style={{ border: 'none', borderRadius: '12px' }}
                allowFullScreen
                title="Boys Hostel Working Drawings"
              />
            </div>
            <div className={styles.flipbookMeta}>
              <h3 className={styles.flipbookTitle}>Boys Hostel</h3>
              <span className={styles.flipbookIndex}>01</span>
            </div>
          </div>

          <div className={styles.flipbookWrapper}>
            <div className={styles.flipbookContainer}>
              <iframe
                src="https://heyzine.com/flip-book/154431f265.html"
                width="100%"
                height="100%"
                style={{ border: 'none', borderRadius: '12px' }}
                allowFullScreen
                title="Kitchen and Washrooms Working Drawings"
              />
            </div>
            <div className={styles.flipbookMeta}>
              <h3 className={styles.flipbookTitle}>Kitchen and Washrooms</h3>
              <span className={styles.flipbookIndex}>02</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Walkthroughs ── */}
      <section className={`${styles.subSection} ${styles.walkthroughSection}`}>
        <div className="container">
          <div className={styles.subSectionHeader}>
            <p className="section-label">Spatial Narratives</p>
            <h2 className={styles.subTitle}>Walkthroughs</h2>
            <div className="accent-line" />
            <p className={styles.subSubtitle}>
              Sequential spatial experiences — a series of rendered perspectives and annotated
              promenades that communicate the atmosphere and sequence of each project.
            </p>
          </div>

          <div className={styles.walkthroughList}>
            {WALKTHROUGHS.map((wt, i) => (
              <WalkthroughRow key={i} wt={wt} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modal && (
        <ProjectModal project={modal} onClose={() => setModal(null)} />
      )}
    </div>
  );
}

/* ── DATA: WALKTHROUGHS ── */
const WALKTHROUGHS = [
  {
    title: 'Residential Villa — Exterior Sequence',
    project: 'Residential Project',
    frames: 1,
    medium: 'Cinematic Walkthrough',
    color: '#00d4ff',
    description: 'This exterior walkthrough presents a seamless architectural journey, highlighting the relationship between built form, landscape, materials, and lighting while creating an immersive experience that captures the project’s spatial character, scale, and overall design intent.',
    embedSrc: 'https://drive.google.com/file/d/1c2VtS2mfOyYbPdybzaV9lZdRlUeCoRD0/preview?mute=0',
    embedRounded: true,
  },
  {
    title: 'Residential Villa — Spatial Flow',
    project: 'Residential Project',
    frames: 1,
    medium: 'Cinematic Walkthrough',
    color: '#d4a843',
    description: 'An immersive exterior walkthrough designed to showcase the project’s architectural form, spatial flow, façade composition, and surrounding landscape, creating a compelling visual narrative that enhances the understanding of the overall design concept and experience',
    embedSrc: 'https://drive.google.com/file/d/1i6Z7MgfyGZCsRAEWBXY2On8hmxwUJg6Y/preview?mute=0',
    embedRounded: true,
  },
];

/* ── WALKTHROUGH ROW ── */
function WalkthroughRow({ wt, index }) {
  const rowRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!wt.embedSrc || !rowRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, [wt.embedSrc]);

  return (
    <div ref={rowRef} className={`${styles.walkthroughRow} fade-in`} style={{ '--c': wt.color }}>
      <span className={styles.wtIndex}>{String(index + 1).padStart(2, '0')}</span>
      <div className={styles.wtBar} style={{ background: wt.color }} />
      <div className={styles.wtBody}>
        <div className={styles.wtTop}>
          <h3 className={styles.wtTitle}>{wt.title}</h3>
          <div className={styles.wtChips}>
            <span className={styles.wtChip}>{wt.frames} {wt.frames === 1 ? 'Video' : 'Frames'}</span>
            <span className={styles.wtChip}>{wt.medium}</span>
          </div>
        </div>
        <p className={styles.wtDesc}>{wt.description}</p>
        {wt.embedSrc ? (
          <div className={`${styles.wtEmbed} ${wt.embedRounded ? styles.wtEmbedRounded : ''}`}>
            {visible ? (
              <iframe
                src={wt.embedSrc}
                width="640"
                height="360"
                style={{ height: 'auto', width: '100%', aspectRatio: '640 / 360' }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                title={`${wt.title} — Video`}
              />
            ) : (
              <div style={{ width: '100%', aspectRatio: '640 / 360', background: 'transparent' }} />
            )}
          </div>
        ) : null}

        <span className={styles.wtProject} style={{ color: wt.color }}>↳ {wt.project}</span>
      </div>
    </div>
  );
}

/* ── PROJECT ENTRY (standalone row) ── */
function ProjectEntry({ project, index, onViewDetails }) {
  if (project.embedSrc) {
    return (
      <article
        className={`${styles.cinematicEntry} fade-in`}
        style={{ '--entry-accent': project.color }}
      >
        <div className={styles.cinematicHeader}>
          <span className={styles.entryNumber}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className={styles.cinematicHeaderMeta}>
            <span className={styles.entryTypology}>{project.typology}</span>
            <span className={styles.entryYear}>{project.year}</span>
          </div>
        </div>

        <div className={styles.cinematicIframeContainer}>
          <iframe
            src={project.embedSrc}
            width="100%"
            height="100%"
            style={{ border: 'none', borderRadius: '12px' }}
            allowFullScreen
            title={project.title}
          />
        </div>

        <div className={styles.cinematicFooter}>
          <div className={styles.cinematicTitleBlock}>
            <h2 className={styles.entryTitle}>{project.title}</h2>
            <div className={styles.entryAccent} style={{ background: project.color }} />
          </div>
          <div className={styles.cinematicDetails}>
            <p className={styles.entryConcept}>{project.concept}</p>
            <div className={styles.entryMeta}>
              {[
                { label: 'Location', val: project.location },
                { label: 'Area', val: project.area },
              ].map(({ label, val }) => (
                <div key={label} className={styles.entryMetaItem}>
                  <span className={styles.entryMetaLabel}>{label}</span>
                  <span
                    className={styles.entryMetaVal}
                    style={label === 'Status' ? { color: project.color } : {}}
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>
            <div className={styles.entryMaterials}>
              <span className={styles.materialsLabel}>Materials</span>
              <div className={styles.materialsPills}>
                {project.materials.map((m) => (
                  <span key={m} className={styles.materialPill} style={{ '--c': project.color }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.entryTags}>
              {project.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  const isEven = index % 2 === 0;
  return (
    <article
      className={`${styles.entry} fade-in`}
      style={{ '--entry-accent': project.color }}
    >
      {/* Index number */}
      <span className={styles.entryNumber}>
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className={`${styles.entryInner} ${isEven ? styles.entryLeft : styles.entryRight}`}>
        {/* Visual panel */}
        <div className={styles.entryVisual}>
          <div className={styles.entryGeom} style={{ '--c': project.color }}>
            <div className={styles.geomShape1} />
            <div className={styles.geomShape2} />
            <div className={styles.geomShape3} />
          </div>
          <div className={styles.entryVisualLabel}>
            <span className={styles.entryTypology}>{project.typology}</span>
            <span className={styles.entryYear}>{project.year}</span>
          </div>
        </div>

        {/* Content panel */}
        <div className={styles.entryContent}>
          <div className={styles.entryHeader}>
            <h2 className={styles.entryTitle}>{project.title}</h2>
            <div className={styles.entryAccent} style={{ background: project.color }} />
          </div>

          <p className={styles.entryConcept}>{project.concept}</p>

          <div className={styles.entryMeta}>
            {[
              { label: 'Location', val: project.location },
              { label: 'Area', val: project.area },
              { label: 'Status', val: project.status },
            ].map(({ label, val }) => (
              <div key={label} className={styles.entryMetaItem}>
                <span className={styles.entryMetaLabel}>{label}</span>
                <span
                  className={styles.entryMetaVal}
                  style={label === 'Status' ? { color: project.color } : {}}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.entryMaterials}>
            <span className={styles.materialsLabel}>Materials</span>
            <div className={styles.materialsPills}>
              {project.materials.map((m) => (
                <span key={m} className={styles.materialPill} style={{ '--c': project.color }}>
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.entryFooter}>
            <div className={styles.entryTags}>
              {project.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <button
              className={styles.detailsBtn}
              style={{ '--c': project.color }}
              onClick={onViewDetails}
            >
              <span>Full Details</span>
              <span className={styles.detailsArrow}>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className={styles.entryDivider} style={{ background: project.color }} />
    </article>
  );
}

/* ── MODAL ── */
function ProjectModal({ project, onClose }) {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <button className={styles.modalClose} onClick={onClose} aria-label="Close">✕</button>

        <div className={styles.modalTop} style={{ '--c': project.color }}>
          <div className={styles.modalGeom} />
          <div className={styles.modalTopContent}>
            <span className={styles.cardTypology}>{project.typology}</span>
            <h2 className={styles.modalTitle}>{project.title}</h2>
            <p className={styles.modalLocation}>{project.location} · {project.year}</p>
          </div>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.modalGrid}>
            <div className={styles.modalInfo}>
              <h4 className={styles.modalSectionHead}>Concept</h4>
              <p className={styles.modalConcept}>{project.concept}</p>

              <h4 className={styles.modalSectionHead}>Materials</h4>
              <ul className={styles.materialsList}>
                {project.materials.map((m) => (
                  <li key={m} style={{ '--c': project.color }}>{m}</li>
                ))}
              </ul>
            </div>

            <div className={styles.modalStats}>
              {[
                { label: 'Typology', val: project.typology },
                { label: 'Location', val: project.location },
                { label: 'Year', val: project.year },
                { label: 'Area', val: project.area },
                { label: 'Status', val: project.status },
              ].map(({ label, val }) => (
                <div key={label} className={styles.statItem}>
                  <span className={styles.statLabel}>{label}</span>
                  <span className={styles.statVal}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.modalTags}>
            {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
