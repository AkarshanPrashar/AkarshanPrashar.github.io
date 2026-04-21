'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './projects.module.css';

const PROJECTS = [
  {
    id: 1,
    title: 'The Suspended House',
    typology: 'Residential',
    year: '2024',
    location: 'Shimla, India',
    area: '340 m²',
    status: 'Completed',
    materials: ['Exposed Concrete', 'Weathered Corten Steel', 'Local Stone'],
    concept: 'A weekend home designed to float above the Himalayan slope — minimizing ground contact while maximizing the panoramic view through dramatic cantilevers.',
    color: '#00d4ff',
    tags: ['Residential', 'Cantilever', 'Mountain'],
  },
  {
    id: 2,
    title: 'Civic Library of Light',
    typology: 'Public',
    year: '2023',
    location: 'Jaipur, India',
    area: '2,800 m²',
    status: 'Built',
    materials: ['Sandstone Lattice', 'Timber Ceilings', 'Perforated Brass'],
    concept: 'A public library that filters the harsh Rajasthan sun through a double-skin sandstone lattice, casting ever-changing shadow patterns across reading spaces.',
    color: '#d4a843',
    tags: ['Public', 'Library', 'Daylight'],
  },
  {
    id: 3,
    title: 'Urban Threshold',
    typology: 'Urban',
    year: '2023',
    location: 'Mumbai, India',
    area: '–',
    status: 'Concept',
    materials: ['Prefabricated Modules', 'Greenwall Systems', 'Recycled Materials'],
    concept: 'A speculative masterplan reimagining the space between highway and neighborhood as a productive green buffer — a threshold that gives back to the city.',
    color: '#3d5a3e',
    tags: ['Urban', 'Masterplan', 'Sustainable'],
  },
  {
    id: 4,
    title: 'The Woven Pavilion',
    typology: 'Installation',
    year: '2022',
    location: 'New Delhi, India',
    area: '120 m²',
    status: 'Built',
    materials: ['Bent Bamboo', 'Hemp Rope', 'Clay Tiles'],
    concept: 'A temporary pavilion for the India Design Festival — exploring the structural potential of traditional weaving through a 3-m-tall load-bearing bamboo lattice.',
    color: '#c44b2b',
    tags: ['Installation', 'Bamboo', 'Temporary'],
  },
  {
    id: 5,
    title: 'Glass Monolith Office',
    typology: 'Commercial',
    year: '2024',
    location: 'Bengaluru, India',
    area: '6,400 m²',
    status: 'In Progress',
    materials: ['Full-height Glazing', 'White Concrete Core', 'Reclaimed Timber'],
    concept: 'A corporate headquarters designed around biophilic principles — a 12-storey atrium with planted terraces creates a vertical park inside the city block.',
    color: '#7bbacc',
    tags: ['Commercial', 'Office', 'Biophilic'],
  },
  {
    id: 6,
    title: 'Memory Museum',
    typology: 'Cultural',
    year: '2022',
    location: 'Varanasi, India',
    area: '1,200 m²',
    status: 'Concept',
    materials: ['Handmade Brick', 'Bronze Screens', 'Water Channels'],
    concept: 'A proposed museum on the Ganges ghats — below-grade galleries lit by water reflection and punctuated by voids that frame the sacred river above.',
    color: '#9b7fb6',
    tags: ['Cultural', 'Museum', 'Contextual'],
  },
];

const FILTERS = ['All', 'Residential', 'Public', 'Commercial', 'Urban', 'Cultural', 'Installation'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [modal, setModal] = useState(null);
  const modalRef = useRef(null);

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.typology === activeFilter || p.tags.includes(activeFilter));

  // Fade-in observer
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [filtered]);

  // Close modal on backdrop click / escape
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

      {/* Filters */}
      <section className={styles.filtersSection}>
        <div className="container">
          <div className={styles.filters}>
            {FILTERS.map(f => (
              <button
                key={f}
                className={`${styles.filterBtn} ${activeFilter === f ? styles.active : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className={`section ${styles.gridSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setModal(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modal && (
        <ProjectModal
          project={modal}
          onClose={() => setModal(null)}
          ref={modalRef}
        />
      )}
    </div>
  );
}

/* ── PROJECT CARD with Hover Reveal ── */
function ProjectCard({ project, index, onClick }) {
  return (
    <article
      className={`${styles.card} fade-in`}
      style={{ animationDelay: `${index * 0.08}s`, '--card-accent': project.color }}
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View ${project.title}`}
    >
      {/* Background visual — abstract geometric */}
      <div className={styles.cardBg}>
        <div className={styles.cardGeom} style={{ '--c': project.color }} />
      </div>

      {/* Always-visible footer */}
      <div className={styles.cardFooter}>
        <div className={styles.cardMeta}>
          <span className={styles.cardTypology}>{project.typology}</span>
          <span className={styles.cardYear}>{project.year}</span>
        </div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
      </div>

      {/* ── HOVER REVEAL OVERLAY ── */}
      <div className={styles.cardOverlay}>
        {/* Sliding panel from bottom */}
        <div className={styles.overlayContent}>
          <div className={styles.overlayHeader}>
            <h3 className={styles.overlayTitle}>{project.title}</h3>
            <div className={styles.overlayAccent} style={{ background: project.color }} />
          </div>

          <div className={styles.overlayMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Location</span>
              <span className={styles.metaValue}>{project.location}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Area</span>
              <span className={styles.metaValue}>{project.area}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Status</span>
              <span className={styles.metaValue} style={{ color: project.color }}>{project.status}</span>
            </div>
          </div>

          <p className={styles.overlayConcept}>{project.concept}</p>

          <div className={styles.overlayTags}>
            {project.tags.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <div className={styles.overlayView}>
            <span>View Full Project</span>
            <span className={styles.overlayArrow}>→</span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── MODAL ── */
function ProjectModal({ project, onClose }) {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={e => e.stopPropagation()}
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
                {project.materials.map(m => (
                  <li key={m} style={{ '--c': project.color }}>{m}</li>
                ))}
              </ul>
            </div>

            <div className={styles.modalStats}>
              {[
                { label: 'Typology', val: project.typology },
                { label: 'Location', val: project.location },
                { label: 'Year',     val: project.year },
                { label: 'Area',     val: project.area },
                { label: 'Status',   val: project.status },
              ].map(({ label, val }) => (
                <div key={label} className={styles.statItem}>
                  <span className={styles.statLabel}>{label}</span>
                  <span className={styles.statVal}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.modalTags}>
            {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
