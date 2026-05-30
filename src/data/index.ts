/* ═══════════════════════════════════════════════════════════════
   data/index.ts  —  Replace with your real content
═══════════════════════════════════════════════════════════════ */

import type { Profile, WorkItem, NavCategory, AboutInfo } from "@/types";

export const profile: Profile = {
  name: "[full name]",
  handle: "@[handle]",
  pronouns: "she/her",
  bio: "[year] student at [university] · graphic design @ [org 1] [org 2] and [org 3]",
  bioTags: ["[university]", "[org 1]", "[org 2]", "[org 3]"],
  discord: "[discord handle]",
  avatarSrc: undefined, // "/assets/avatar.jpg"
  socials: [
    { platform: "twitter",   href: "https://twitter.com/[handle]",   label: "Twitter" },
    { platform: "instagram", href: "https://instagram.com/[handle]", label: "Instagram" },
    { platform: "email",     href: "mailto:[email]",                 label: "Email" },
  ],
};

export const navCategories: NavCategory[] = [
  { label: "[category 1]", filter: "[category 1]" },
  { label: "[category 2]", filter: "[category 2]" },
  { label: "[category 3]", filter: "[category 3]" },
  { label: "[category 4]", filter: "[category 4]" },
];

export const work: WorkItem[] = [
  {
    id: "project-1",
    title: "[Project Title]",
    category: "[category 1]",
    year: 2024,
    thumbnailSrc: undefined,
    description: "[Short project description]",
    org: "[org]",
  },
  {
    id: "project-2",
    title: "[Project Title]",
    category: "[category 2]",
    year: 2024,
    thumbnailSrc: undefined,
    description: "[Short project description]",
  },
  {
    id: "project-3",
    title: "[Project Title]",
    category: "[category 1]",
    year: 2023,
    thumbnailSrc: undefined,
    description: "[Short project description]",
    org: "[org]",
  },
  {
    id: "project-4",
    title: "[Project Title]",
    category: "[category 3]",
    year: 2023,
    thumbnailSrc: undefined,
    description: "[Short project description]",
  },
];

export const about: AboutInfo = {
  tagline: "[tagline or about heading]",
  bio: "[About paragraph — who you are, what drives your practice, what you're studying or working on, and what kind of collaborations you're open to.]",
  skills: ["[skill]", "[skill]", "[skill]", "[skill]", "[skill]"],
  tools: ["[tool]", "[tool]", "[tool]", "[tool]"],
};
