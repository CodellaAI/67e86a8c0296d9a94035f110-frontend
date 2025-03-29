
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mouse, ChevronDown } from 'lucide-react';
import Button from '@/components/Button';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';

// Sample featured projects data
const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    slug: 'ecommerce-redesign',
    description: 'A complete overhaul of an e-commerce platform focusing on improved user experience and conversion rates.',
    coverImage: '/images/projects/ecommerce.jpg',
    tags: ['UX Design', 'UI Design', 'E-commerce'],
  },
  {
    id: 2,
    title: 'Banking App',
    slug: 'banking-app',
    description: 'A mobile banking application designed with a focus on security, accessibility, and ease of use.',
    coverImage: '/images/projects/banking.jpg',
    tags: ['Mobile App', 'FinTech', 'UI Design'],
  },
  {
    id: 3,
    title: 'Healthcare Portal',
    slug: 'healthcare-portal',
    description: 'A patient-centered healthcare portal that simplifies appointment scheduling and medical record access.',
    coverImage: '/images/projects/healthcare.jpg',
    tags: ['Healthcare', 'UX Research', 'Web App'],
  },
];

export default function Home() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Design background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-light-bg/90 to-light-bg/70 dark:from-dark-bg/90 dark:to-dark-bg/70" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-light-text dark:text-dark-text mb-6">
              Crafting <span className="text-light-primary dark:text-dark-primary">Digital</span> Experiences
            </h1>
            
            <p className="text-xl text-light-muted dark:text-dark-muted mb-8 max-w-lg">
              UX/UI designer focused on creating intuitive, accessible, and visually striking digital products that solve real user problems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button href="/portfolio">
                View My Work
              </Button>
              <Button href="/contact" variant="secondary">
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-light-muted dark:text-dark-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button 
            onClick={scrollToContent}
            className="flex flex-col items-center space-y-2 focus:outline-none"
            aria-label="Scroll down"
          >
            <Mouse size={24} />
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </motion.div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
                  Featured Projects
                </h2>
                <p className="text-light-muted dark:text-dark-muted max-w-2xl">
                  A selection of my recent work showcasing my approach to solving design challenges.
                </p>
              </div>
              <Link 
                href="/portfolio"
                className="hidden md:flex items-center text-light-primary dark:text-dark-primary font-medium group"
              >
                View All Projects
                <ArrowRight 
                  size={18} 
                  className="ml-2 transform transition-transform group-hover:translate-x-1" 
                />
              </Link>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button href="/portfolio" variant="secondary">
              View All Projects
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-6">
                Designing with Purpose
              </h2>
              
              <p className="text-light-muted dark:text-dark-muted mb-6">
                As a UX/UI designer with a passion for creating intuitive and engaging digital experiences, I combine research-driven insights with aesthetic sensibility to craft products that users love.
              </p>
              
              <p className="text-light-muted dark:text-dark-muted mb-6">
                My approach centers on understanding user needs, business goals, and technological possibilities to create designs that are not just beautiful, but functional and impactful.
              </p>
              
              <Button href="/about" variant="secondary">
                More About Me
              </Button>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden aspect-square lg:aspect-auto lg:h-[500px]">
                <Image
                  src="/images/designer-working.jpg"
                  alt="Designer working on a project"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-light-primary/30 to-transparent dark:from-dark-primary/30 mix-blend-overlay" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Process Preview Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
              My Design Process
            </h2>
            <p className="text-light-muted dark:text-dark-muted">
              A structured yet flexible approach that adapts to each project's unique requirements.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Research',
                description: 'Understanding users, business goals, and market context through qualitative and quantitative research.',
                delay: 0.1,
              },
              {
                number: '02',
                title: 'Ideate',
                description: 'Exploring multiple solutions through sketching, wireframing, and collaborative design thinking.',
                delay: 0.2,
              },
              {
                number: '03',
                title: 'Design',
                description: 'Creating high-fidelity designs with attention to visual hierarchy, accessibility, and brand consistency.',
                delay: 0.3,
              },
              {
                number: '04',
                title: 'Test & Iterate',
                description: 'Validating designs through user testing and refining based on feedback and analytics.',
                delay: 0.4,
              }
            ].map((step, index) => (
              <AnimatedSection 
                key={index} 
                delay={step.delay}
                className="bg-white dark:bg-dark-bg/50 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <span className="text-5xl font-display font-bold text-light-primary/20 dark:text-dark-primary/20">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-semibold mt-4 mb-3 text-light-text dark:text-dark-text">
                  {step.title}
                </h3>
                <p className="text-light-muted dark:text-dark-muted">
                  {step.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/process">
              Explore My Process
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-light-primary dark:bg-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button 
              href="/contact" 
              className="bg-white text-light-primary hover:bg-white/90 focus:ring-white"
            >
              Let's Connect
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
