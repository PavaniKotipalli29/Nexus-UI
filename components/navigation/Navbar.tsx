
import React from 'react';
import { Container } from '../ui/Layout';
import { Button } from '../ui/Primitives';

interface NavbarProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleDarkMode, isDarkMode }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <Container size="xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="#/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tight">Nexus<span className="text-primary-600">UI</span></span>
            </a>
            <div className="hidden md:flex items-center space-x-1">
              <a href="#/" className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-white rounded-md transition-colors">Home</a>
              <a href="#/why-nexus" className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-white rounded-md transition-colors">Philosophy</a>
              <a href="#/docs/button" className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-white rounded-md transition-colors">Components</a>
              <a href="#/patterns/dashboard" className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-white rounded-md transition-colors">Patterns</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={onToggleDarkMode}
              className="p-2 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};
