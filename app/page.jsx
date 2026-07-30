// 'use client';
// import Link from 'next/link';
// import { useEffect, useRef } from 'react';
// import styles from './page.module.css';

// const quickLinks = [
//   { href: '/projects', label: 'Projects', desc: 'Residential · Commercial · Concept', num: '01' },
//   { href: '/skills', label: 'Skills', desc: 'Software · Construction · Design', num: '02' },
//   { href: '/about', label: 'About', desc: 'Philosophy · Education · Timeline', num: '03' },
// ];

// export default function HomePage() {
//   const heroRef = useRef(null);

//   // Parallax hero text on mouse move
//   useEffect(() => {
//     const hero = heroRef.current;
//     if (!hero) return;
//     const handle = (e) => {
//       const { innerWidth: W, innerHeight: H } = window;
//       const dx = (e.clientX / W - 0.5) * 18;
//       const dy = (e.clientY / H - 0.5) * 10;
//       hero.style.setProperty('--mx', `${dx}px`);
//       hero.style.setProperty('--my', `${dy}px`);
//     };
//     window.addEventListener('mousemove', handle);
//     return () => window.removeEventListener('mousemove', handle);
//   }, []);

//   // Fade-in on scroll
//   useEffect(() => {
//     const els = document.querySelectorAll('.fade-in');
//     const obs = new IntersectionObserver(
//       (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
//       { threshold: 0.15 }
//     );
//     els.forEach(el => obs.observe(el));
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <div className={styles.page}>
//       {/* ── HERO ── */}
//       <section className={styles.hero} ref={heroRef}>
//         <div className={`container ${styles.heroInner}`}>
//           {/* ── Left: text content ── */}
//           <div className={styles.heroText}>
//             <div className={styles.heroLabel}>
//               <span className="section-label">Architecture Portfolio</span>
//             </div>

//             <h1
//               className={styles.heroTitle}
//               style={{ transform: 'translate(var(--mx, 0), var(--my, 0))' }}
//             >
//               Designing<br />
//               <em>Space &amp;</em><br />
//               <span className={styles.heroAccent}>Form.</span>
//             </h1>

//             <p className={styles.heroSub}>
//               Architect &amp; Urban Designer based in Punjab.<br />
//               Merging materiality, light, and human experience.
//             </p>

//             <div className={styles.heroCtas}>
//               <Link href="/projects" className="btn btn-filled">View Projects</Link>
//               <Link href="/about" className="btn">About Me</Link>
//               <Link href="/about#contact" className="btn">Contact Me</Link>
//             </div>

//             {/* Decorative coordinate text */}
//             <div className={styles.coords}>
//               <span>31.1471° N</span>
//               <span className={styles.divider}>  ·  </span>
//               <span>75.3412° E</span>
//             </div>
//           </div>

//           {/* ── Right: architect image ── */}
//           <div className={styles.heroImageWrap}>
//             <div className={styles.heroImagePlaceholder}>
//               <div className={styles.heroImageCornerTl} />
//               <div className={styles.heroImageCornerBr} />
//               <img
//                 src="/architect.png"
//                 alt="Architect"
//                 className={styles.heroImage}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Scroll hint */}
//         <div className={styles.scrollHint}>
//           <span>Scroll</span>
//           <div className={styles.scrollLine} />
//         </div>

//         {/* Decorative corner marks */}
//         <div className={`${styles.hCorner} ${styles.hCornerTl}`} />
//         <div className={`${styles.hCorner} ${styles.hCornerBr}`} />
//       </section>

//       {/* ── QUICK NAV ── */}
//       <section className={`section ${styles.quickNav}`}>
//         <div className="container">
//           <p className="section-label fade-in">Navigate</p>
//           <h2 className={`section-title fade-in`}>Explore the Portfolio</h2>
//           <div className="accent-line fade-in" />

//           <div className={`${styles.quickGrid} fade-in`}>
//             {quickLinks.map(({ href, label, desc, num }) => (
//               <Link key={href} href={href} className={styles.quickCard}>
//                 <div className={styles.quickNum}>{num}</div>
//                 <div className={styles.quickBody}>
//                   <h3>{label}</h3>
//                   <p>{desc}</p>
//                 </div>
//                 <div className={styles.quickArrow}>→</div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── PHILOSOPHY STRIP ── */}
//       <section className={styles.philosophy}>
//         <div className={styles.marqueeOuter}>
//           <div className={styles.marqueeInner}>
//             {Array(4).fill('Architecture is the art of creating order out of chaos · Materials speak truth · Space is the silent language ·  ').map((t, i) => (
//               <span key={i}>{t}</span>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }































// Under Maintainence Page

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>

      <div className={styles.grid}></div>

      <div className={styles.blur1}></div>
      <div className={styles.blur2}></div>

      <section className={styles.hero}>

        <div className={styles.left}>

          <span className={styles.label}>
            ARCHITECTING • EXPERIENCES • 2026
          </span>

          <h1>
            Portfolio
            <br />
            Under
            <br />
            Construction
          </h1>

          <p>
            Great work deserves thoughtful presentation.

            <br /><br />

            I'm redesigning every detail—from interaction
            to storytelling—to create a cleaner, faster,
            and more immersive portfolio.

            <br /><br />

            See you soon.
          </p>

          <div className={styles.signature}>
            <div className={styles.line}></div>

            <span>Akarshan Prashar</span>
          </div>

        </div>

        <div className={styles.right}>

          <div className={styles.architecture}>

            <div className={styles.square}></div>

            <div className={styles.squareSmall}></div>

            <div className={styles.circle}></div>

            <div className={styles.cross}></div>

          </div>

        </div>

      </section>

      <footer>

        <div>
          <span className={styles.dot}></span>

          Carefully rebuilding the experience.
        </div>

        <div>© 2026</div>

      </footer>

    </main>
  );
}












