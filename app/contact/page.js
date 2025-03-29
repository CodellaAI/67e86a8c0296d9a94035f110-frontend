
'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Dribbble, GitHub, MapPin, Phone, Clock } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
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
              Get In Touch
            </h1>
            <p className="text-xl text-light-muted dark:text-dark-muted">
              I'd love to hear from you. Let's discuss your project or just say hello.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection direction="left">
              <h2 className="font-display text-3xl font-bold text-light-text dark:text-dark-text mb-6">
                Contact Information
              </h2>
              <p className="text-light-muted dark:text-dark-muted mb-8">
                Feel free to reach out through any of the following channels. I'm currently available for freelance work, collaborations, and full-time opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-light-primary/10 dark:bg-dark-primary/20 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-light-text dark:text-dark-text">Email</h3>
                    <a 
                      href="mailto:contact@example.com" 
                      className="text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-light-primary/10 dark:bg-dark-primary/20 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-light-text dark:text-dark-text">Phone</h3>
                    <a 
                      href="tel:+1234567890" 
                      className="text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-light-primary/10 dark:bg-dark-primary/20 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-light-text dark:text-dark-text">Location</h3>
                    <p className="text-light-muted dark:text-dark-muted">
                      San Francisco, California
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-light-primary/10 dark:bg-dark-primary/20 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-light-text dark:text-dark-text">Availability</h3>
                    <p className="text-light-muted dark:text-dark-muted">
                      Currently available for freelance & full-time opportunities
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-display text-xl font-semibold text-light-text dark:text-dark-text mb-4">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-light-bg dark:bg-dark-bg text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://dribbble.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-light-bg dark:bg-dark-bg text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Dribbble"
                  >
                    <Dribbble size={24} />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-light-bg dark:bg-dark-bg text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <GitHub size={24} />
                  </a>
                  <a 
                    href="mailto:contact@example.com" 
                    className="p-3 rounded-full bg-light-bg dark:bg-dark-bg text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Contact Form */}
            <AnimatedSection direction="right">
              <div className="bg-white dark:bg-dark-bg/50 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 className="font-display text-2xl font-bold text-light-text dark:text-dark-text mb-6">
                  Send Me a Message
                </h2>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-light-muted dark:text-dark-muted">
              Common questions about working with me
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: 'What is your typical design process?',
                answer: 'My design process typically includes research, defining the problem, ideation, prototyping, testing, and implementation. I adapt this process based on project needs and constraints.',
              },
              {
                question: 'How do you charge for your services?',
                answer: 'I offer both hourly rates and project-based pricing depending on the scope and requirements. I\'ll provide a detailed quote after discussing your specific needs.',
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on complexity and scope. A website redesign might take 4-8 weeks, while a comprehensive app design could take 2-4 months. I\'ll provide a timeline estimate during our initial consultation.',
              },
              {
                question: 'Do you work remotely?',
                answer: 'Yes, I work remotely with clients worldwide. I use collaborative tools to ensure smooth communication and project management regardless of location.',
              },
              {
                question: 'What information do you need to start a project?',
                answer: 'To get started, I need to understand your business goals, target audience, project requirements, timeline, budget constraints, and any existing brand guidelines or design assets.',
              },
              {
                question: 'Do you offer ongoing support after project completion?',
                answer: 'Yes, I offer support packages for maintenance, updates, and further development after project completion. We can discuss these options based on your needs.',
              },
            ].map((faq, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 0.1}
                className="bg-white dark:bg-dark-bg/50 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <h3 className="font-display text-lg font-semibold text-light-text dark:text-dark-text mb-3">
                  {faq.question}
                </h3>
                <p className="text-light-muted dark:text-dark-muted">
                  {faq.answer}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
