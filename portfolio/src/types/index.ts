/* ═══════════════════════════════════════════════════════════════
   types/index.ts  —  Shared data types
═══════════════════════════════════════════════════════════════ */

export interface SocialLink {
  platform: "twitter" | "instagram" | "email" | "behance" | "dribbble" | "github";
  href: string;
  label: string;
}

export interface Profile {
  name: string;
  handle: string;
  pronouns: string;
  bio: string;
  /** Highlighted words/phrases in bio that render as tags */
  bioTags: string[];
  discord?: string;
  avatarSrc?: string;
  socials: SocialLink[];
}

export type WorkCategory = string; // e.g. "branding", "motion", "print"

export interface WorkItem {
  id: string;
  title: string;
  category: WorkCategory;
  year: number;
  /** Path to thumbnail image */
  thumbnailSrc?: string;
  /** Short description shown on hover or in detail view */
  description?: string;
  /** Optional external link */
  href?: string;
  /** Org this piece was made for */
  org?: string;
}

export interface NavCategory {
  label: string;
  /** Filters WorkItem.category — if undefined shows all */
  filter?: WorkCategory;
}

export interface AboutInfo {
  tagline: string;
  bio: string;
  skills: string[];
  /** e.g. "Adobe CC", "Figma" etc. */
  tools: string[];
}
