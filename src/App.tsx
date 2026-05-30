/* ═══════════════════════════════════════════════════════════════
   App.tsx  —  Root layout
═══════════════════════════════════════════════════════════════ */

import { useState } from "react";
import type { WorkCategory } from "@/types";
import { profile, navCategories, work, about } from "@/data";
import { useWorkFilter } from "@/hooks/useWorkFilter";

import { ProfileCard } from "@/components/ProfileCard";
import { WindowNav } from "@/components/WindowNav";
import { WorkCard } from "@/components/WorkCard";
import { AboutPanel } from "@/components/AboutPanel";
import { ContactStrip } from "@/components/ContactStrip";

import styles from "./App.module.css";

export default function App() {
  const { filtered, activeFilter, setActiveFilter } = useWorkFilter(work);

  return (
    <div className={styles.page}>

      {/* ── Profile card ──────────────────────────────── */}
      <ProfileCard profile={profile} />

      {/* ── Nav window ───────────────────────────────── */}
      <WindowNav
        title={profile.handle}
        categories={navCategories}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* ── Work grid ─────────────────────────────────── */}
      <section id="work" className={styles.workSection}>
        <p className={`${styles.sectionLabel} label`}>selected work</p>
        <div className={styles.workGrid}>
          {filtered.map((item, i) => (
            <WorkCard key={item.id} item={item} index={i} />
          ))}

          {filtered.length === 0 && (
            <p className={`${styles.empty} text-mono text-muted`}>
              no work in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* ── About ─────────────────────────────────────── */}
      <AboutPanel about={about} />

      {/* ── Contact ───────────────────────────────────── */}
      <ContactStrip email="[email]" />

    </div>
  );
}
