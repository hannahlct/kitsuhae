/* ═══════════════════════════════════════════════════════════════
   components/ContactStrip.tsx
═══════════════════════════════════════════════════════════════ */

import styles from "./ContactStrip.module.css";

interface ContactStripProps {
  email: string;
  headline?: string;
  cta?: string;
}

export function ContactStrip({
  email,
  headline = "let's work together.",
  cta = "get in touch →",
}: ContactStripProps) {
  return (
    <section id="contact" className={styles.strip}>
      <p className={`${styles.headline} text-display-italic`}>{headline}</p>
      <a href={`mailto:${email}`} className={`${styles.cta} text-mono`}>
        {cta}
      </a>
    </section>
  );
}
