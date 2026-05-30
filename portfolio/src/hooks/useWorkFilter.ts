/* ═══════════════════════════════════════════════════════════════
   hooks/useWorkFilter.ts
   Filters WorkItem[] by category with an "all" default.
═══════════════════════════════════════════════════════════════ */

import { useState, useMemo } from "react";
import type { WorkItem, WorkCategory } from "@/types";

export function useWorkFilter(items: WorkItem[]) {
  const [activeFilter, setActiveFilter] = useState<WorkCategory | null>(null);

  const filtered = useMemo(
    () =>
      activeFilter
        ? items.filter((item) => item.category === activeFilter)
        : items,
    [items, activeFilter]
  );

  return { filtered, activeFilter, setActiveFilter };
}
