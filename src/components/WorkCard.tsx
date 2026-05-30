/* ═══════════════════════════════════════════════════════════════
   components/WorkCard.tsx
═══════════════════════════════════════════════════════════════ */

import type { WorkItem } from "@/types";
import styles from "./WorkCard.module.css";

interface WorkCardProps {
  item: WorkItem;
  /** Animation stagger index */
  index?: number;
}

export function WorkCard({ item, index = 0 }: WorkCardProps) {
  const delay = `${index * 60}ms`;

  return (
    <article
      className={styles.card}
      style={{ animationDelay: delay }}
      tabIndex={0}
      role={item.href ? "link" : "article"}
      onClick={() => item.href && window.open(item.href, "_blank")}
      onKeyDown={(e) => {
        if (item.href && (e.key === "Enter" || e.key === " ")) {
          window.open(item.href, "_blank");
        }
      }}
    >
      {/* Thumbnail */}
      <div className={styles.thumb}>
        {item.thumbnailSrc ? (
          <img src={item.thumbnailSrc} alt={item.title} loading="lazy" />
        ) : (
          <div className={styles.thumbPlaceholder} aria-hidden />
        )}
      </div>

      {/* Body */}
      <div className={styles.body}>
        <h3 className={`${styles.title} text-display`}>{item.title}</h3>
        <div className={`${styles.meta} text-mono text-muted`}>
          <span>{item.category}</span>
          <span className={styles.dot}>·</span>
          <span>{item.year}</span>
          {item.org && (
            <>
              <span className={styles.dot}>·</span>
              <span>{item.org}</span>
            </>
          )}
        </div>
        {item.description && (
          <p className={styles.description}>{item.description}</p>
        )}
      </div>
    </article>
  );
}
