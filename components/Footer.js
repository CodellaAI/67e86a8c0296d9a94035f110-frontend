
'use client';

import Link from 'next/link';
import { Linkedin, Dribbble, GitHub, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center">
              <span className="font-display text-xl font-bold text-light-primary dark:text-dark-primary">
                UX<span className="text-light-secondary dark:text-dark-secondary">Portfolio</span>
              </span>
            </Link>
            <p className="mt-4 text-light-muted dark:text-dark-muted max-w-md">
              Creating thoughtful user experiences through design, research, and a passion for solving complex problems.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-light-text dark:text-dark-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold text-light-text dark:text-dark-text mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-light-bg dark:bg-dark-bg text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-light-bg dark:bg-dark-bg text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-light-bg dark:bg-dark-bg text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="p-2 rounded-full bg-light-bg dark:bg-dark-bg text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-light-muted dark:text-dark-muted">
          <p>© {currentYear} UX Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
