
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Sidebar } from './components/navigation/Sidebar';
import { LandingPage } from './pages/LandingPage';
import { WhyNexusPage } from './pages/WhyNexusPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ComponentPage } from './pages/ComponentPage';
import { DashboardPage } from './pages/patterns/DashboardPage';


// Simple Hash-based Router
const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Content Switching Logic
  const renderContent = () => {
    if (currentPath === '#/' || currentPath === '') {
      return <LandingPage />;
    }

    if (currentPath === '#/why-nexus') {
      return <WhyNexusPage />;
    }

    if (currentPath === '#/about') {
      return <AboutPage />;
    }

    if (currentPath === '#/contact') {
      return <ContactPage />;
    }



    if (currentPath.startsWith('#/docs')) {
      const componentName = currentPath.split('/').pop() || '';
      return (
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 lg:pl-64">
            <div className="max-w-5xl mx-auto p-6 lg:p-12">
              <ComponentPage key={componentName} componentId={componentName} />
            </div>
          </main>
        </div>
      );
    }

    if (currentPath === '#/patterns/dashboard') {
      return <DashboardPage />;
    }



    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-neutral-500 mb-8">The page you're looking for doesn't exist.</p>
        <a href="#/" className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
          Go back home
        </a>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-primary-100 selection:text-primary-900 transition-colors">
      <Navbar onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="pt-16">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
