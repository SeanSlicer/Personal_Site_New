import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  /** Stagger delay in ms, applied once the element scrolls into view. */
  delay?: number;
  children: React.ReactNode;
};

/**
 * Wraps content so it fades + slides up the first time it enters the viewport.
 * Uses IntersectionObserver (no animation libraries) and unobserves after the
 * first reveal so it only plays once.
 */
const Reveal: React.FC<Props> = ({ as = "div", className, delay = 0, children }) => {
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
  return (
    <Tag
      ref={ref}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      className={classNames("reveal", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
