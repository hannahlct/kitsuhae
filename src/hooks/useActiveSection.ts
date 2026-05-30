/* ═══════════════════════════════════════════════════════════════
   hooks/useActiveSection.ts
   Tracks which page section is in view via IntersectionObserver.
═══════════════════════════════════════════════════════════════ */

import { useState, useEffect, useRef } from "react";

export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [ids]);

  return active;
}
