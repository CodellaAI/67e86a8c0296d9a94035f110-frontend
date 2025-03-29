
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Palette, TestTube, Users, Layout, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';

export const metadata = {
  title: 'Design Process | UX/UI Designer Portfolio',
  description: 'Learn about my UX/UI design process, methodology, and approach to creating effective digital experiences.',
};

export default function Process() {
  const processSteps = [
    {
      id: 1,
      title: 'Research & Discovery',
      description: 'I begin every project with thorough research to understand the users, business goals, and market context. This includes user interviews, competitive analysis, and reviewing analytics data.',
      icon: <Search className="h-7 w-7 text-white" />,
      color: 'bg-blue-600',
      deliverables: [
        'User Interviews',
        'Competitive Analysis',
        'Market Research',
        'Analytics Review',
        'Stakeholder Interviews'
      ],
      image: '/images/process/research.jpg'
    },
    {
      id: 2,
      title: 'Define & Strategize',
      description: 'Based on research insights, I define the problem space and develop a strategic approach. This includes creating user personas, journey maps, and establishing project goals and metrics.',
      icon: <Users className="h-7 w-7 text-white" />,
      color: 'bg-indigo-600',
      deliverables: [
        'User Personas',
        'Journey Maps',
        'Problem Statements',
        'Project Goals',
        'Success Metrics'
      ],
      image: '/images/process/define.jpg'
    },
    {
      id: 3,
      title: 'Ideate & Explore',
      description: 'With a clear understanding of the problem, I explore multiple solutions through sketching, wireframing, and collaborative design thinking sessions.',
      icon: <Lightbulb className="h-7 w-7 text-white" />,
      color: 'bg-purple-600',
      deliverables: [
        'Sketches',
        'Concept Maps',
        'Information Architecture',
        'Low-fidelity Wireframes',
        'User Flows'
      ],
      image: '/images/process/ideate.jpg'
    },
    {
      id: 4,
      title: 'Design & Prototype',
      description: 'I develop high-fidelity designs with attention to visual hierarchy, accessibility, and brand consistency, creating interactive prototypes to simulate the user experience.',
      icon: <Palette className="h-7 w-7 text-white" />,
      color: 'bg-pink-600',
      deliverables: [
        'High-fidelity Mockups',
        'Design Systems',
        'Interactive Prototypes',
        'Animation Specs',
        'Responsive Designs'
      ],
      image: '/images/process/design.jpg'
    },
    {
      id: 5,
      title: 'Test & Validate',
      description: 'I validate designs through user testing and gather feedback to ensure the solution effectively addresses user needs and business goals.',
      icon: <TestTube className="h-7 w-7 text-white" />,
      color: 'bg-red-600',
      deliverables: [
        'Usability Testing',
        'A/B Testing',
        'Heatmaps',
        'User Feedback Sessions',
        'Accessibility Audits'
      ],
      image: '/images/process/test.jpg'
    },
    {
      id: 6,
      title: 'Implement & Iterate',
      description: 'I work closely with development teams to ensure accurate implementation, and continue to refine the design based on user feedback and performance data.',
      icon: <Layout className="h-7 w-7 text-white" />,
      color: 'bg-orange-600',
      deliverables: [
        'Developer Handoff',
        'Implementation Support',
        'QA Testing',
        'Performance Monitoring',
        'Iterative Improvements'
      ],
      image: '/images/process/implement.jpg'
    }
  ];

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
              My Design Process
            </h1>
            <p className="text-xl text-light-muted dark:text-dark-muted">
              A structured yet flexible approach that adapts to each project's unique requirements.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Process Overview */}
      <section className="section">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-6">
              Process Overview
            </h2>
            <p className="text-light-muted dark:text-dark-muted">
              My design process is iterative and user-centered, focusing on understanding user needs and business goals to create effective digital experiences.
            </p>
          </AnimatedSection>
          
          <div className="relative">
            {/* Process Steps Timeline */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
            
            <div className="space-y-24">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.id} className="relative">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Timeline marker (desktop only) */}
                    <div className="hidden lg:flex absolute left-1/2 top-24 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className={`${step.color} h-12 w-12 rounded-full flex items-center justify-center shadow-lg`}>
                        {step.icon}
                      </div>
                    </div>
                    
                    <div className={index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}>
                      {/* Timeline marker (mobile only) */}
                      <div className="lg:hidden flex items-center mb-6">
                        <div className={`${step.color} h-10 w-10 rounded-full flex items-center justify-center shadow-md mr-4`}>
                          {step.icon}
                        </div>
                        <span className="text-sm font-semibold text-light-muted dark:text-dark-muted">
                          STEP {step.id}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-2xl font-bold text-light-text dark:text-dark-text mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-light-muted dark:text-dark-muted mb-6">
                        {step.description}
                      </p>
                      
                      <div className="bg-white dark:bg-dark-bg/50 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <h4 className="font-medium text-light-text dark:text-dark-text mb-4">
                          Key Deliverables:
                        </h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-start">
                              <ArrowRight size={16} className="text-light-primary dark:text-dark-primary mt-1 mr-2 flex-shrink-0" />
                              <span className="text-light-muted dark:text-dark-muted">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className={index % 2 === 0 ? '' : ''}>
                      <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <span className="inline-block px-3 py-1 bg-white/90 dark:bg-dark-bg/90 text-light-primary dark:text-dark-primary text-sm font-medium rounded-full">
                            Step {step.id}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* UX Methodology */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
              UX Methodology
            </h2>
            <p className="text-light-muted dark:text-dark-muted">
              My approach to user experience design is based on established principles and methodologies.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'User-Centered Design',
                description: 'I place users at the center of the design process, ensuring their needs, limitations, and preferences drive decision-making.',
                icon: <Users className="h-6 w-6 text-light-primary dark:text-dark-primary" />,
              },
              {
                title: 'Design Thinking',
                description: 'I employ a problem-solving approach that combines empathy, creativity, and rationality to meet user needs and drive innovation.',
                icon: <Lightbulb className="h-6 w-6 text-light-primary dark:text-dark-primary" />,
              },
              {
                title: 'Lean UX',
                description: 'I focus on reducing waste and maximizing value by working in rapid, iterative cycles and validating assumptions with real users.',
                icon: <TestTube className="h-6 w-6 text-light-primary dark:text-dark-primary" />,
              },
              {
                title: 'Accessibility-First',
                description: 'I design with accessibility in mind from the start, ensuring digital products are usable by people of all abilities.',
                icon: <Users className="h-6 w-6 text-light-primary dark:text-dark-primary" />,
              },
              {
                title: 'Data-Informed Design',
                description: 'I use qualitative and quantitative data to inform design decisions and measure the success of solutions.',
                icon: <Search className="h-6 w-6 text-light-primary dark:text-dark-primary" />,
              },
              {
                title: 'Systems Thinking',
                description: 'I consider how design elements work together as part of a larger system, creating cohesive and scalable experiences.',
                icon: <Layout className="h-6 w-6 text-light-primary dark:text-dark-primary" />,
              },
            ].map((method, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 0.1}
                className="bg-white dark:bg-dark-bg/50 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <div className="p-3 bg-light-primary/10 dark:bg-dark-primary/20 rounded-full w-fit mb-6">
                  {method.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-light-text dark:text-dark-text mb-3">
                  {method.title}
                </h3>
                <p className="text-light-muted dark:text-dark-muted">
                  {method.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tools Section */}
      <section className="section">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
              Tools & Software
            </h2>
            <p className="text-light-muted dark:text-dark-muted">
              The digital tools I use to bring designs to life.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Figma', logo: '/images/tools/figma.svg' },
              { name: 'Adobe XD', logo: '/images/tools/xd.svg' },
              { name: 'Sketch', logo: '/images/tools/sketch.svg' },
              { name: 'InVision', logo: '/images/tools/invision.svg' },
              { name: 'Principle', logo: '/images/tools/principle.svg' },
              { name: 'Framer', logo: '/images/tools/framer.svg' },
              { name: 'Photoshop', logo: '/images/tools/photoshop.svg' },
              { name: 'Illustrator', logo: '/images/tools/illustrator.svg' },
              { name: 'Miro', logo: '/images/tools/miro.svg' },
              { name: 'Notion', logo: '/images/tools/notion.svg' },
              { name: 'Zeplin', logo: '/images/tools/zeplin.svg' },
              { name: 'Hotjar', logo: '/images/tools/hotjar.svg' },
            ].map((tool, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 0.05}
                className="bg-white dark:bg-dark-bg/50 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center text-center"
              >
                <div className="relative h-12 w-12 mb-4">
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-medium text-light-text dark:text-dark-text">
                  {tool.name}
                </h3>
              </AnimatedSection>
            ))}
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
              See My Process in Action
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Explore my portfolio to see how I've applied this process to create effective digital solutions.
            </p>
            <Button 
              href="/portfolio" 
              className="bg-white text-light-primary hover:bg-white/90 focus:ring-white"
            >
              View Portfolio
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
