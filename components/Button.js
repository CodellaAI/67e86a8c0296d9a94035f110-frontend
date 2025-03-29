
'use client';

import Link from 'next/link';
import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'text-white bg-light-primary dark:bg-dark-primary hover:bg-light-primary/90 dark:hover:bg-dark-primary/90 focus:ring-light-primary dark:focus:ring-dark-primary shadow-sm',
    secondary: 'border border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary bg-transparent hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 focus:ring-light-primary dark:focus:ring-dark-primary',
    outline: 'border border-gray-300 dark:border-gray-700 text-light-text dark:text-dark-text hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-300 dark:focus:ring-gray-700',
    text: 'text-light-primary dark:text-dark-primary hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 focus:ring-light-primary dark:focus:ring-dark-primary px-4 py-2',
  };
  
  const allStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={allStyles} ref={ref} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={allStyles} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
