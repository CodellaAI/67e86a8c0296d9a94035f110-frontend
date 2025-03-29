
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      className="card h-full flex flex-col group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="flex flex-col flex-grow p-6">
        <div className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs font-medium rounded-full bg-light-primary/10 dark:bg-dark-primary/20 text-light-primary dark:text-dark-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="font-display text-xl font-semibold mb-2 text-light-text dark:text-dark-text group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-light-muted dark:text-dark-muted text-sm">
            {project.description}
          </p>
        </div>
        
        <Link 
          href={`/portfolio/${project.slug}`}
          className="mt-4 inline-flex items-center text-light-primary dark:text-dark-primary font-medium text-sm group/link"
        >
          View Case Study
          <ArrowRight 
            size={16} 
            className="ml-1 transform transition-transform group-hover/link:translate-x-1" 
          />
        </Link>
      </div>
    </motion.div>
  );
}
