
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, Award, BookOpen, Code } from 'lucide-react';
import Button from '@/components/Button';
import AnimatedSection from '@/components/AnimatedSection';
import SkillBar from '@/components/SkillBar';

// Skills data
const designSkills = [
  { skill: 'User Experience Design', level: 95 },
  { skill: 'User Interface Design', level: 90 },
  { skill: 'Interaction Design', level: 85 },
  { skill: 'Information Architecture', level: 80 },
  { skill: 'Wireframing & Prototyping', level: 90 },
];

const technicalSkills = [
  { skill: 'Figma', level: 95 },
  { skill: 'Adobe XD', level: 85 },
  { skill: 'Sketch', level: 80 },
  { skill: 'HTML/CSS', level: 75 },
  { skill: 'JavaScript', level: 65 },
];

export default function About() {
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
              About Me
            </h1>
            <p className="text-xl text-light-muted dark:text-dark-muted">
              UX/UI designer passionate about creating intuitive and impactful digital experiences.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Profile Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative rounded-lg overflow-hidden aspect-square lg:aspect-auto lg:h-[600px]">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-light-primary/30 to-transparent dark:from-dark-primary/30 mix-blend-overlay" />
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-6">
                My Journey
              </h2>
              
              <div className="space-y-6 text-light-muted dark:text-dark-muted">
                <p>
                  I'm a UX/UI designer with over 7 years of experience creating digital products that balance aesthetic appeal with functional usability. My passion lies in transforming complex problems into intuitive, enjoyable user experiences.
                </p>
                
                <p>
                  After completing my degree in Interaction Design, I've worked with startups, agencies, and enterprise companies across various industries including fintech, healthcare, e-commerce, and education.
                </p>
                
                <p>
                  My design philosophy centers on empathy, accessibility, and data-informed decision making. I believe that great design should be invisible, enabling users to accomplish their goals without friction or confusion.
                </p>
                
                <p>
                  When I'm not designing, you'll find me exploring photography, attending design workshops, or contributing to open-source design systems.
                </p>
              </div>
              
              <div className="mt-8">
                <Button href="/files/resume.pdf" variant="secondary" className="inline-flex items-center">
                  <Download size={18} className="mr-2" />
                  Download Resume
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Education & Experience Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
              Education & Experience
            </h2>
            <p className="text-light-muted dark:text-dark-muted">
              My academic background and professional journey in the field of design.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <AnimatedSection direction="up" className="space-y-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 bg-light-primary/10 dark:bg-dark-primary/20 rounded-full">
                  <BookOpen size={24} className="text-light-primary dark:text-dark-primary" />
                </div>
                <h3 className="ml-4 font-display text-2xl font-semibold text-light-text dark:text-dark-text">
                  Education
                </h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    degree: 'Master of Interaction Design',
                    institution: 'California Institute of Design',
                    period: '2015 - 2017',
                    description: 'Specialized in user research methodologies and interactive prototyping. Thesis focused on improving healthcare interfaces for elderly users.',
                  },
                  {
                    degree: 'Bachelor of Fine Arts, Graphic Design',
                    institution: 'Rhode Island School of Design',
                    period: '2011 - 2015',
                    description: 'Foundation in visual communication principles, typography, and digital media. Graduated with honors.',
                  },
                  {
                    degree: 'UX Design Certification',
                    institution: 'Nielsen Norman Group',
                    period: '2018',
                    description: 'Comprehensive certification covering user research, information architecture, and interaction design.',
                  }
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-light-primary/30 dark:border-dark-primary/30 pl-6 py-2">
                    <h4 className="font-display text-lg font-semibold text-light-text dark:text-dark-text">
                      {item.degree}
                    </h4>
                    <p className="text-light-secondary dark:text-dark-secondary font-medium">
                      {item.institution}
                    </p>
                    <p className="text-sm text-light-muted dark:text-dark-muted mt-1">
                      {item.period}
                    </p>
                    <p className="text-light-muted dark:text-dark-muted mt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            {/* Experience */}
            <AnimatedSection direction="up" delay={0.2} className="space-y-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 bg-light-primary/10 dark:bg-dark-primary/20 rounded-full">
                  <Award size={24} className="text-light-primary dark:text-dark-primary" />
                </div>
                <h3 className="ml-4 font-display text-2xl font-semibold text-light-text dark:text-dark-text">
                  Experience
                </h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    position: 'Senior UX/UI Designer',
                    company: 'TechVision Solutions',
                    period: '2020 - Present',
                    description: 'Lead designer for enterprise SaaS products. Established design system and UX processes. Collaborate with product and engineering teams on feature development.',
                  },
                  {
                    position: 'UX Designer',
                    company: 'InnovateUX Agency',
                    period: '2017 - 2020',
                    description: 'Designed digital products for clients across fintech, healthcare, and retail sectors. Conducted user research and usability testing to inform design decisions.',
                  },
                  {
                    position: 'UI Design Intern',
                    company: 'CreativeWorks Studio',
                    period: '2016 (Summer)',
                    description: 'Assisted senior designers with UI mockups and prototypes. Participated in client meetings and design critiques.',
                  }
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-light-primary/30 dark:border-dark-primary/30 pl-6 py-2">
                    <h4 className="font-display text-lg font-semibold text-light-text dark:text-dark-text">
                      {item.position}
                    </h4>
                    <p className="text-light-secondary dark:text-dark-secondary font-medium">
                      {item.company}
                    </p>
                    <p className="text-sm text-light-muted dark:text-dark-muted mt-1">
                      {item.period}
                    </p>
                    <p className="text-light-muted dark:text-dark-muted mt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="section">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
              Skills & Expertise
            </h2>
            <p className="text-light-muted dark:text-dark-muted">
              Core competencies and tools I've mastered throughout my design journey.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Design Skills */}
            <AnimatedSection direction="left" className="bg-white dark:bg-dark-bg/50 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 p-3 bg-light-primary/10 dark:bg-dark-primary/20 rounded-full">
                  <Award size={24} className="text-light-primary dark:text-dark-primary" />
                </div>
                <h3 className="ml-4 font-display text-xl font-semibold text-light-text dark:text-dark-text">
                  Design Skills
                </h3>
              </div>
              
              <div className="space-y-4">
                {designSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill.skill} level={skill.level} />
                ))}
              </div>
            </AnimatedSection>
            
            {/* Technical Skills */}
            <AnimatedSection direction="right" className="bg-white dark:bg-dark-bg/50 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 p-3 bg-light-primary/10 dark:bg-dark-primary/20 rounded-full">
                  <Code size={24} className="text-light-primary dark:text-dark-primary" />
                </div>
                <h3 className="ml-4 font-display text-xl font-semibold text-light-text dark:text-dark-text">
                  Technical Skills
                </h3>
              </div>
              
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill.skill} level={skill.level} />
                ))}
              </div>
            </AnimatedSection>
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
              Let's Work Together
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Interested in collaborating? I'm currently available for freelance projects and full-time opportunities.
            </p>
            <Button 
              href="/contact" 
              className="bg-white text-light-primary hover:bg-white/90 focus:ring-white"
            >
              Get In Touch
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
