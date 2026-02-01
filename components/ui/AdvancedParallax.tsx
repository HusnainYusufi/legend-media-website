'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AdvancedParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function AdvancedParallax({
  children,
  speed = 50,
  direction = 'up',
  className = '',
}: AdvancedParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  let transform: MotionValue<string>;

  switch (direction) {
    case 'up':
      transform = useTransform(scrollYProgress, [0, 1], [`${speed}px`, `-${speed}px`]);
      return (
        <motion.div ref={ref} style={{ y: transform }} className={className}>
          {children}
        </motion.div>
      );
    case 'down':
      transform = useTransform(scrollYProgress, [0, 1], [`-${speed}px`, `${speed}px`]);
      return (
        <motion.div ref={ref} style={{ y: transform }} className={className}>
          {children}
        </motion.div>
      );
    case 'left':
      transform = useTransform(scrollYProgress, [0, 1], [`${speed}px`, `-${speed}px`]);
      return (
        <motion.div ref={ref} style={{ x: transform }} className={className}>
          {children}
        </motion.div>
      );
    case 'right':
      transform = useTransform(scrollYProgress, [0, 1], [`-${speed}px`, `${speed}px`]);
      return (
        <motion.div ref={ref} style={{ x: transform }} className={className}>
          {children}
        </motion.div>
      );
  }
}

