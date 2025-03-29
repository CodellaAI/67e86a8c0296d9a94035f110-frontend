
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    slug: 'ecommerce-redesign',
    description: 'A complete overhaul of an e-commerce platform focusing on improved user experience and conversion rates.',
    coverImage: '/images/projects/ecommerce.jpg',
    tags: ['UX Design', 'UI Design', 'E-commerce'],
    category: 'Web Design',
  },
  {
    id: 2,
    title: 'Banking App',
    slug: 'banking-app',
    description: 'A mobile banking application designed with a focus on security, accessibility, and ease of use.',
    coverImage: '/images/projects/banking.jpg',
    tags: ['Mobile App', 'FinTech', 'UI Design'],
    category: 'Mobile App',
  },
  {
    id: 3,
    title: 'Healthcare Portal',
    slug: 'healthcare-portal',
    description: 'A patient-centered healthcare portal that simplifies appointment scheduling and medical record access.',
    coverImage: '/images/projects/healthcare.jpg',
    tags: ['Healthcare', 'UX Research', 'Web App'],
    category: 'Web Design',
  },
  {
    id: 4,
    title: 'Travel Booking Platform',
    slug: 'travel-booking',
    description: 'A travel booking platform with an intuitive interface for finding and booking flights, hotels, and experiences.',
    coverImage: '/images/projects/travel.jpg',
    tags: ['Travel', 'UI Design', 'UX Design'],
    category: 'Web Design',
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    slug: 'fitness-app',
    description: 'A fitness tracking mobile application that helps users monitor workouts, nutrition, and progress.',
    coverImage: '/images/projects/fitness.jpg',
    tags: ['Mobile App', 'Health', 'UI Design'],
    category: 'Mobile App',
  },
  {
    id: 6,
    title: 'Educational Platform',
    slug: 'educational-platform',
    description: 'An online learning platform designed to enhance student engagement and facilitate remote education.',
    coverImage: '/images/projects/education.jpg',
    tags: ['Education', 'UX Research', 'Web App'],
    category: 'Web Design',
  },
];

// Extract unique categories
const allCategories = ['All', ...new Set(projects.map(project => project.category))];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text mb-6">
              My Portfolio
            </h1>
            <p className="text-xl text-light-muted dark:text-dark-muted">
              A collection of my design work across various industries and platforms.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="section">
        <div className="container-custom">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h2 className="font-display text-2xl font-bold text-light-text dark:text-dark-text">
                Projects <span className="text-light-muted dark:text-dark-muted">({filteredProjects.length})</span>
              </h2>
              
              {/* Mobile filter toggle */}
              <button 
                className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-light-text dark:text-dark-text"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} />
                Filter
              </button>
              
              {/* Desktop filters */}
              <div className="hidden md:flex flex-wrap items-center gap-2">
                {allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeFilter === category
                        ? 'bg-light-primary dark:bg-dark-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-light-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile filters */}
            {showFilters && (
              <div className="md:hidden flex flex-wrap gap-2 mb-6">
                {allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveFilter(category);
                      setShowFilters(false);
                    }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeFilter === category
                        ? 'bg-light-primary dark:bg-dark-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-light-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-light-muted dark:text-dark-muted text-lg">
                No projects found for this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
