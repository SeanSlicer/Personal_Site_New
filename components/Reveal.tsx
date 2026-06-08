import React, { useEffect, useRef, useState } from "react";

type Props = {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  /** Stagger delay in ms, applied once the element scrolls into view. */
  delay?: number;
  /** "up" fades + slides up; "scale" fades + scales in (Keynote card reveal). */
  variant?: "up" | "scale";
  children: React.ReactNode;
};

/**
 * Wraps content so it fades/scales into view the first time it enters the
 * viewport. Uses IntersectionObserver (no animation libraries) and unobserves
 * after the first reveal so it only plays once.
 */
const Reveal: React.FC<Props> = ({ as = "div", className, delay = 0, variant = "up", children }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as any;
  const classes = [
    variant === "scale" ? "reveal-scale" : "reveal",
    visible ? "is-visible" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} style={delay ? { animationDelay: `${delay}ms` } : undefined} className={classes}>
      {children}
    </Tag>
  );
};

export default Reveal;
