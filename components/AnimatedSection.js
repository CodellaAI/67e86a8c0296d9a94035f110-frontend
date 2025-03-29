
'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function AnimatedSection({ 
  children, 
  className = '',
  delay = 0,
  duration = 0.5,
  direction = 'up', // 'up', 'down', 'left', 'right'
  once = true,
  ...props 
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  
  // Define animation variants based on direction
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
