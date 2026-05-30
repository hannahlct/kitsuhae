/* ═══════════════════════════════════════════════════════════════
   components/WindowNav.tsx
   OS-window-styled navigation panel.
═══════════════════════════════════════════════════════════════ */

import type { NavCategory, WorkCategory } from "@/types";
import styles from "./WindowNav.module.css";

interface WindowNavProps {
  title: string;
  categories: NavCategory[];
  activeFilter: WorkCategory | null;
  onFilterChange: (filter: WorkCategory | null) => void;
}

export function WindowNav({
  title,
  categories,
  activeFilter,
  onFilterChange,
}: WindowNavProps) {
  return (
    <div className={styles.panel}>
      {/* Title bar */}
      <div className={styles.bar}>
        <span className={`${styles.title} text-mono text-muted`}>{title}</span>
        <div className={styles.controls} aria-hidden>
          <span>─</span>
          <span>□</span>
          <span>✕</span>
        </div>
      </div>

      {/* Nav items */}
      <nav className={styles.nav}>
        {categories.map((cat) => {
          const isActive = activeFilter === (cat.filter ?? null);
          return (
            <button
              key={cat.label}
              className={`${styles.item} text-mono ${isActive ? styles.itemActive : ""}`}
              onClick={() => onFilterChange(cat.filter ?? null)}
              aria-current={isActive ? "true" : undefined}
            >
              {cat.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
