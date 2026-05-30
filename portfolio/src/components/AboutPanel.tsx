/* ═══════════════════════════════════════════════════════════════
   components/AboutPanel.tsx
═══════════════════════════════════════════════════════════════ */

import type { AboutInfo } from "@/types";
import styles from "./AboutPanel.module.css";

interface AboutPanelProps {
  about: AboutInfo;
}

export function AboutPanel({ about }: AboutPanelProps) {
  return (
    <section id="about" className={styles.panel}>
      {/* Left: bio */}
      <div className={styles.bio}>
        <h2 className={`${styles.tagline} text-display-italic`}>
          {about.tagline}
        </h2>
        <p className={styles.text}>{about.bio}</p>
      </div>

      {/* Right: skills + tools */}
      <div className={styles.right}>
        <div className={styles.group}>
          <p className="label" style={{ marginBottom: "var(--space-3)" }}>
            skills
          </p>
          <div className={styles.tags}>
            {about.skills.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.group}>
          <p className="label" style={{ marginBottom: "var(--space-3)" }}>
            tools
          </p>
          <div className={styles.tags}>
            {about.tools.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
