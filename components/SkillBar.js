
'use client';

import { motion } from 'framer-motion';

export default function SkillBar({ skill, level }) {
  // Convert level (0-100) to width percentage
  const width = `${level}%`;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-light-text dark:text-dark-text">{skill}</span>
        <span className="text-xs font-medium text-light-muted dark:text-dark-muted">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
