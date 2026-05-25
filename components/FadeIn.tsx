"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  amount?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
  amount = 0.15,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });

  const initial = {
    up: { opacity: 0, y: 36 },
    left: { opacity: 0, x: -36 },
    right: { opacity: 0, x: 36 },
    none: { opacity: 0 },
  }[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.58, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
