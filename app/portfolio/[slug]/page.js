
'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    slug: 'ecommerce-redesign',
    client: 'FashionTrend Inc.',
    timeline: '3 months',
    role: 'Lead UX/UI Designer',
    description: 'A complete overhaul of an e-commerce platform focusing on improved user experience and conversion rates.',
    coverImage: '/images/projects/ecommerce.jpg',
    heroImage: '/images/projects/ecommerce-hero.jpg',
    tags: ['UX Design', 'UI Design', 'E-commerce'],
    overview: 'FashionTrend Inc. approached me to redesign their e-commerce platform which was experiencing high cart abandonment rates and poor mobile conversion. The goal was to create a more intuitive, visually appealing shopping experience that would increase customer engagement and sales.',
    challenge: 'The existing platform had a dated interface, complex navigation, and a checkout process that frustrated users. Mobile users in particular experienced difficulty with product filtering and the payment process, leading to high abandonment rates.',
    approach: [
      {
        title: 'Research & Discovery',
        description: 'I conducted extensive user research including interviews with current customers, usability testing of the existing platform, and competitive analysis of leading e-commerce sites.',
        image: '/images/projects/ecommerce-research.jpg',
      },
      {
        title: 'Information Architecture',
        description: 'Based on research findings, I restructured the site navigation and product categorization to create more intuitive paths to discovery.',
        image: '/images/projects/ecommerce-ia.jpg',
      },
      {
        title: 'Wireframing & Prototyping',
        description: 'I created low-fidelity wireframes to establish the basic structure, followed by interactive prototypes that were tested with users.',
        image: '/images/projects/ecommerce-wireframes.jpg',
      },
      {
        title: 'Visual Design',
        description: 'The final designs featured a clean, modern aesthetic with strong visual hierarchy, ensuring products remained the focus while providing clear paths to purchase.',
        image: '/images/projects/ecommerce-design.jpg',
      },
    ],
    results: 'Following the redesign launch, FashionTrend saw a 35% decrease in cart abandonment, a 28% increase in mobile conversions, and a 42% increase in time spent on the site. Customer feedback highlighted the improved ease of navigation and checkout process.',
    testimonial: {
      quote: 'The redesign completely transformed our online presence. Not only do we have a beautiful, modern site, but the improved user experience has directly impacted our bottom line.',
      author: 'Sarah Johnson',
      position: 'CMO, FashionTrend Inc.',
    },
    liveSite: 'https://example.com',
  },
  {
    id: 2,
    title: 'Banking App',
    slug: 'banking-app',
    client: 'SecureBank',
    timeline: '4 months',
    role: 'UX Designer & Researcher',
    description: 'A mobile banking application designed with a focus on security, accessibility, and ease of use.',
    coverImage: '/images/projects/banking.jpg',
    heroImage: '/images/projects/banking-hero.jpg',
    tags: ['Mobile App', 'FinTech', 'UI Design'],
    overview: 'SecureBank needed a mobile banking application that would provide their customers with a secure, intuitive way to manage their finances on the go. The app needed to accommodate users of all ages and technical abilities while maintaining the highest security standards.',
    challenge: 'The main challenge was balancing robust security features with ease of use. Additionally, the app needed to be accessible to older users who might be less comfortable with technology, while still appealing to younger, tech-savvy customers.',
    approach: [
      {
        title: 'User Research',
        description: 'I conducted interviews and surveys with a diverse group of bank customers to understand their needs, pain points, and expectations for a mobile banking app.',
        image: '/images/projects/banking-research.jpg',
      },
      {
        title: 'Security & UX Balance',
        description: 'I worked closely with the security team to implement authentication methods that were both secure and user-friendly, including biometric options.',
        image: '/images/projects/banking-security.jpg',
      },
      {
        title: 'Prototyping & Testing',
        description: 'Interactive prototypes were created and tested with users of various age groups to ensure the interface was intuitive across demographics.',
        image: '/images/projects/banking-prototype.jpg',
      },
      {
        title: 'Accessibility Focus',
        description: 'The design incorporated accessibility best practices including adjustable text sizes, high contrast options, and screen reader compatibility.',
        image: '/images/projects/banking-accessibility.jpg',
      },
    ],
    results: 'The app launched to positive user feedback, with 78% of customers adopting it within the first three months. Customer service calls related to online banking decreased by 25%, and the app received a 4.7/5 rating in app stores.',
    testimonial: {
      quote: 'Our customers have embraced the new mobile app enthusiastically. The thoughtful design makes banking tasks simple for everyone, regardless of their technical expertise.',
      author: 'Michael Chen',
      position: 'Digital Banking Director, SecureBank',
    },
    liveSite: 'https://example.com',
  },
  {
    id: 3,
    title: 'Healthcare Portal',
    slug: 'healthcare-portal',
    client: 'MediCare Solutions',
    timeline: '5 months',
    role: 'UX/UI Designer',
    description: 'A patient-centered healthcare portal that simplifies appointment scheduling and medical record access.',
    coverImage: '/images/projects/healthcare.jpg',
    heroImage: '/images/projects/healthcare-hero.jpg',
    tags: ['Healthcare', 'UX Research', 'Web App'],
    overview: 'MediCare Solutions sought to develop a patient portal that would streamline healthcare management for both patients and providers. The goal was to create a secure platform where patients could easily schedule appointments, access medical records, communicate with providers, and manage prescriptions.',
    challenge: 'Healthcare interfaces often suffer from complexity and poor usability, leading to patient frustration and reduced engagement. Additionally, strict privacy regulations and the sensitive nature of medical information required careful consideration of security and data presentation.',
    approach: [
      {
        title: 'Patient-Centered Research',
        description: 'I conducted extensive interviews with patients of varying ages and health conditions, as well as healthcare providers, to understand their needs and pain points.',
        image: '/images/projects/healthcare-research.jpg',
      },
      {
        title: 'Information Architecture',
        description: 'I created a clear, logical structure for the portal that grouped related functions and presented medical information in an understandable way for non-medical users.',
        image: '/images/projects/healthcare-ia.jpg',
      },
      {
        title: 'Iterative Design Process',
        description: 'Multiple rounds of wireframing, prototyping, and usability testing were conducted to refine the interface and ensure it met both patient and provider needs.',
        image: '/images/projects/healthcare-wireframes.jpg',
      },
      {
        title: 'Accessibility Implementation',
        description: 'Given the diverse user base, I implemented WCAG AA compliance standards throughout the design to ensure the portal was accessible to users with various disabilities.',
        image: '/images/projects/healthcare-accessibility.jpg',
      },
    ],
    results: 'After implementation, appointment scheduling through the portal increased by 45%, patient satisfaction scores improved by 32%, and administrative staff reported saving 15 hours per week on phone calls and paperwork.',
    testimonial: {
      quote: 'The patient portal has transformed how we interact with our patients. The intuitive design makes it easy for patients of all ages to manage their healthcare, which has improved engagement and ultimately patient outcomes.',
      author: 'Dr. Alicia Martinez',
      position: 'Chief Medical Officer, MediCare Solutions',
    },
    liveSite: 'https://example.com',
  },
  {
    id: 4,
    title: 'Travel Booking Platform',
    slug: 'travel-booking',
    client: 'Wanderlust Travel',
    timeline: '4 months',
    role: 'Lead UI/UX Designer',
    description: 'A travel booking platform with an intuitive interface for finding and booking flights, hotels, and experiences.',
    coverImage: '/images/projects/travel.jpg',
    heroImage: '/images/projects/travel-hero.jpg',
    tags: ['Travel', 'UI Design', 'UX Design'],
    overview: 'Wanderlust Travel wanted to create a comprehensive travel booking platform that would differentiate itself through an exceptional user experience. The goal was to create a visually inspiring interface that simplified the complex process of planning and booking travel.',
    challenge: 'Travel booking involves numerous variables and decision points, which can quickly lead to cognitive overload. The challenge was to create an interface that guided users through the booking process while inspiring them with destination imagery and maintaining clarity in information presentation.',
    approach: [
      {
        title: 'Travel Behavior Research',
        description: 'I conducted research into travel planning behaviors, identifying key pain points in existing booking platforms and opportunities for improvement.',
        image: '/images/projects/travel-research.jpg',
      },
      {
        title: 'Visual Inspiration System',
        description: 'I designed a visual system that incorporated high-quality destination imagery at strategic points to inspire users while maintaining focus on the booking process.',
        image: '/images/projects/travel-visual.jpg',
      },
      {
        title: 'Streamlined Booking Flow',
        description: 'I created a step-by-step booking flow that broke the complex process into manageable segments, with clear progress indicators and the ability to save and return.',
        image: '/images/projects/travel-flow.jpg',
      },
      {
        title: 'Personalization Features',
        description: 'The design incorporated personalization elements that remembered user preferences and provided tailored recommendations based on previous searches and bookings.',
        image: '/images/projects/travel-personalization.jpg',
      },
    ],
    results: 'The platform launched to enthusiastic user reception, achieving a 40% higher conversion rate than industry average. Users particularly praised the intuitive interface and inspiring visual elements, with 68% reporting they discovered destinations they hadn\'t previously considered.',
    testimonial: {
      quote: 'The design perfectly balances inspiration with functionality. Our customers find it easy to book their travel while enjoying the process, which has led to higher booking values and customer loyalty.',
      author: 'James Rodriguez',
      position: 'CEO, Wanderlust Travel',
    },
    liveSite: 'https://example.com',
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    slug: 'fitness-app',
    client: 'FitLife',
    timeline: '3 months',
    role: 'UX/UI Designer',
    description: 'A fitness tracking mobile application that helps users monitor workouts, nutrition, and progress.',
    coverImage: '/images/projects/fitness.jpg',
    heroImage: '/images/projects/fitness-hero.jpg',
    tags: ['Mobile App', 'Health', 'UI Design'],
    overview: 'FitLife commissioned a fitness tracking app that would help users maintain their health and fitness goals. The app needed to track workouts, nutrition, and progress while providing motivation and guidance for users at all fitness levels.',
    challenge: 'Many fitness apps suffer from feature bloat and complexity that overwhelms users, leading to abandonment. The challenge was to create an interface that presented comprehensive tracking capabilities in a simple, motivating way that would encourage consistent use.',
    approach: [
      {
        title: 'User Behavior Research',
        description: 'I researched fitness habits and app usage patterns to understand what motivates users to maintain fitness routines and what causes them to abandon health apps.',
        image: '/images/projects/fitness-research.jpg',
      },
      {
        title: 'Gamification Elements',
        description: 'I incorporated carefully designed gamification elements to provide positive reinforcement and motivation without creating artificial pressure.',
        image: '/images/projects/fitness-gamification.jpg',
      },
      {
        title: 'Data Visualization',
        description: 'I created intuitive data visualizations that helped users understand their progress at a glance while providing access to more detailed information when desired.',
        image: '/images/projects/fitness-data.jpg',
      },
      {
        title: 'Personalized Experience',
        description: 'The app was designed to adapt to user preferences and fitness levels, providing a personalized experience that grew with the user\'s abilities and goals.',
        image: '/images/projects/fitness-personalization.jpg',
      },
    ],
    results: 'The app achieved a 72% retention rate after 3 months (compared to the industry average of 30% for fitness apps). Users reported high satisfaction with the interface simplicity and motivational elements, with 85% stating they exercised more consistently with the app.',
    testimonial: {
      quote: 'The design team created an app that truly understands what motivates people to stay active. The intuitive interface and thoughtful motivational elements have been key to our high user retention.',
      author: 'Emma Lewis',
      position: 'Fitness Director, FitLife',
    },
    liveSite: 'https://example.com',
  },
  {
    id: 6,
    title: 'Educational Platform',
    slug: 'educational-platform',
    client: 'LearnWell Academy',
    timeline: '6 months',
    role: 'UX Designer & Researcher',
    description: 'An online learning platform designed to enhance student engagement and facilitate remote education.',
    coverImage: '/images/projects/education.jpg',
    heroImage: '/images/projects/education-hero.jpg',
    tags: ['Education', 'UX Research', 'Web App'],
    overview: 'LearnWell Academy needed a comprehensive online learning platform to support their transition to hybrid and remote learning models. The platform needed to serve students of various ages, learning styles, and technical abilities while providing robust tools for educators.',
    challenge: 'Educational platforms must balance the needs of multiple user types (students, teachers, administrators, parents) while accommodating diverse learning styles and accessibility requirements. Additionally, maintaining student engagement in digital environments presents unique challenges compared to traditional classrooms.',
    approach: [
      {
        title: 'Educational Research',
        description: 'I conducted extensive research with students, teachers, and education experts to understand effective digital learning strategies and pain points in existing platforms.',
        image: '/images/projects/education-research.jpg',
      },
      {
        title: 'Engagement-Focused Design',
        description: 'I developed design patterns that promoted active learning and engagement, incorporating elements that reduced screen fatigue and maintained attention.',
        image: '/images/projects/education-engagement.jpg',
      },
      {
        title: 'Adaptive Learning Paths',
        description: 'The platform was designed to support personalized learning paths that adapted to individual student progress and learning styles.',
        image: '/images/projects/education-adaptive.jpg',
      },
      {
        title: 'Collaborative Tools',
        description: 'I designed intuitive collaboration features that facilitated student-teacher and peer-to-peer interaction, simulating the collaborative aspects of physical classrooms.',
        image: '/images/projects/education-collaboration.jpg',
      },
    ],
    results: 'After implementation, student engagement metrics increased by 60% compared to previous digital learning attempts. Teacher satisfaction with the platform rated at 4.8/5, and student academic performance showed measurable improvement across multiple subject areas.',
    testimonial: {
      quote: 'This platform has transformed our approach to digital learning. The thoughtful design keeps students engaged and makes teaching more effective and enjoyable in the digital space.',
      author: 'Professor Thomas Wright',
      position: 'Academic Director, LearnWell Academy',
    },
    liveSite: 'https://example.com',
  },
];

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className="container-custom pt-40 pb-20 text-center">
        <h1 className="font-display text-3xl font-bold text-light-text dark:text-dark-text mb-6">
          Project Not Found
        </h1>
        <p className="text-light-muted dark:text-dark-muted mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Button href="/portfolio" variant="primary">
          <ArrowLeft size={18} className="mr-2" />
          Back to Portfolio
        </Button>
      </div>
    );
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Portfolio
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text mb-6">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-sm font-medium rounded-full bg-light-primary/10 dark:bg-dark-primary/20 text-light-primary dark:text-dark-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-xl text-light-muted dark:text-dark-muted mb-8">
              {project.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-light-muted dark:text-dark-muted mb-1">
                  CLIENT
                </h3>
                <p className="text-light-text dark:text-dark-text font-medium">
                  {project.client}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-light-muted dark:text-dark-muted mb-1">
                  TIMELINE
                </h3>
                <p className="text-light-text dark:text-dark-text font-medium">
                  {project.timeline}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-light-muted dark:text-dark-muted mb-1">
                  ROLE
                </h3>
                <p className="text-light-text dark:text-dark-text font-medium">
                  {project.role}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src={project.heroImage || project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </section>
      
      {/* Project Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold text-light-text dark:text-dark-text mb-6">
                  Project Overview
                </h2>
                <p className="text-light-muted dark:text-dark-muted mb-8">
                  {project.overview}
                </p>
                
                <h2 className="font-display text-3xl font-bold text-light-text dark:text-dark-text mb-6">
                  The Challenge
                </h2>
                <p className="text-light-muted dark:text-dark-muted">
                  {project.challenge}
                </p>
              </AnimatedSection>
            </div>
            
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2} className="bg-white dark:bg-dark-bg/50 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 sticky top-32">
                <h3 className="font-display text-xl font-semibold text-light-text dark:text-dark-text mb-4">
                  Project Links
                </h3>
                
                {project.liveSite && (
                  <a 
                    href={project.liveSite} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg mb-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <span className="font-medium">Visit Live Site</span>
                    <ExternalLink size={18} className="text-light-primary dark:text-dark-primary" />
                  </a>
                )}
                
                <div className="mt-6">
                  <h3 className="font-display text-xl font-semibold text-light-text dark:text-dark-text mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'].map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-light-muted dark:text-dark-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Design Process */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
              Design Process
            </h2>
            <p className="text-light-muted dark:text-dark-muted">
              My approach to solving this design challenge
            </p>
          </AnimatedSection>
          
          <div className="space-y-24">
            {project.approach.map((step, index) => (
              <AnimatedSection key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                  <span className="inline-block px-3 py-1 bg-light-primary/10 dark:bg-dark-primary/20 text-light-primary dark:text-dark-primary text-sm font-medium rounded-full mb-4">
                    Step {index + 1}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-light-text dark:text-dark-text mb-4">
                    {step.title}
                  </h3>
                  <p className="text-light-muted dark:text-dark-muted">
                    {step.description}
                  </p>
                </div>
                
                <div className={index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Results */}
      <section className="section">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-6 text-center">
              Results & Impact
            </h2>
            <p className="text-light-muted dark:text-dark-muted text-lg mb-12">
              {project.results}
            </p>
            
            {project.testimonial && (
              <div className="bg-light-primary/5 dark:bg-dark-primary/10 p-8 rounded-xl border border-light-primary/20 dark:border-dark-primary/20 mb-12">
                <div className="relative">
                  <svg className="absolute -top-4 -left-4 h-12 w-12 text-light-primary/20 dark:text-dark-primary/30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-light-text dark:text-dark-text text-lg italic mb-6 pl-8">
                    "{project.testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="ml-8">
                    <p className="font-medium text-light-text dark:text-dark-text">
                      {project.testimonial.author}
                    </p>
                    <p className="text-sm text-light-muted dark:text-dark-muted">
                      {project.testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
      
      {/* Next/Prev Project */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Button 
              href="/portfolio" 
              variant="secondary"
              className="mb-4 md:mb-0"
            >
              <ArrowLeft size={18} className="mr-2" />
              All Projects
            </Button>
            
            <div className="flex space-x-4">
              {project.id > 1 && (
                <Button 
                  href={`/portfolio/${projects.find(p => p.id === project.id - 1).slug}`}
                  variant="primary"
                >
                  Previous Project
                </Button>
              )}
              
              {project.id < projects.length && (
                <Button 
                  href={`/portfolio/${projects.find(p => p.id === project.id + 1).slug}`}
                  variant="primary"
                >
                  Next Project
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
