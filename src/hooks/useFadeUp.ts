import { useEffect } from "react";

/**
 * Adds the "visible" class to every element with `.fade-up`
 * inside the given container when it scrolls into view.
 * Staggers children with 80ms increments.
 */
export function useFadeUp(containerRef?: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root: ParentNode = containerRef?.current ?? document;
    const targets = Array.from(root.querySelectorAll<HTMLElement>(".fade-up"));

    const groups = new Map<Element, HTMLElement[]>();
    targets.forEach((el) => {
      const parent = el.parentElement ?? document.body;
      const arr = groups.get(parent) ?? [];
      arr.push(el);
      groups.set(parent, arr);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const siblings = groups.get(el.parentElement ?? document.body) ?? [el];
          const index = siblings.indexOf(el);
          el.style.transitionDelay = `${Math.max(0, index) * 80}ms`;
          el.classList.add("visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerRef]);
}
