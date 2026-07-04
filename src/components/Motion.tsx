"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  fade: { opacity: 0 },
  fadeUp: { opacity: 0, y: 40 },
  fadeDown: { opacity: 0, y: -40 },
  fadeLeft: { opacity: 0, x: -60 },
  fadeRight: { opacity: 0, x: 60 },
  scaleUp: { opacity: 0, scale: 0.9 },
  scaleIn: { opacity: 0, scale: 0.85 },
} as const;

type AnimationType = keyof typeof variants;

interface MotionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function Motion({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: MotionProps) {
  const initial = variants[animation] || variants.fadeUp;
  const isHidden = animation === "hidden";

  return (
    <motion.div
      initial={isHidden ? variants.hidden : initial}
      whileInView={isHidden ? variants.visible : undefined}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  animation = "fadeUp",
}: {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
}) {
  const from = variants[animation] || variants.fadeUp;

  return (
    <motion.div
      variants={{
        hidden: from,
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
