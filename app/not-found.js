
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-9xl font-bold text-light-primary dark:text-dark-primary">
            404
          </h1>
          <h2 className="font-display text-3xl font-bold text-light-text dark:text-dark-text mt-4 mb-6">
            Page Not Found
          </h2>
          <p className="text-light-muted dark:text-dark-muted max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button href="/">
            <Home size={18} className="mr-2" />
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
