
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Sidebar } from './components/navigation/Sidebar';
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ComponentPage } from './pages/ComponentPage';
import { ComponentsGalleryPage } from './pages/ComponentsGalleryPage';
import { FaqPage } from './pages/FaqPage';
import { Orbit } from './components/ui/Orbit';


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


    if (currentPath === '#/about') {
      return <AboutPage />;
    }

    if (currentPath === '#/contact') {
      return <ContactPage />;
    }

    if (currentPath === '#/faq') {
      return <FaqPage />;
    }

    if (currentPath === '#/components' || currentPath.startsWith('#/components/')) {
      const category = currentPath.split('/')[2] || null;
      return <ComponentsGalleryPage initialCategory={category as any} />;
    }

    if (currentPath === '#/orbit') {
      return (
        <div className="flex items-center justify-center min-h-[70vh] p-20">
          <div className="w-[500px] h-[500px] border border-dashed border-neutral-300 dark:border-neutral-700 rounded-full flex items-center justify-center">
            <Orbit 
              radius={180} 
              speed={12} 
              direction="clockwise"
              itemSize={96}
              keepUpright={true}
              pauseOnHover={true}
              borderRadius={16}
            >
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&fit=crop" 
                alt="User 1" 
                className="w-full h-full object-cover border-2 border-primary-500 rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop" 
                alt="User 2" 
                className="w-full h-full object-cover border-2 border-secondary-500 rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&h=128&fit=crop" 
                alt="User 3" 
                className="w-full h-full object-cover border-2 border-accent-500 rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop" 
                alt="User 4" 
                className="w-full h-full object-cover border-2 border-neutral-500 rounded-2xl shadow-lg"
              />
            </Orbit>
          </div>
        </div>
      );
    }


    if (currentPath.startsWith('#/docs/')) {
      const componentName = currentPath.split('/').pop() || '';
      return (
        <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-950">
          <main className="flex-1">
            <div className="max-w-7xl mx-auto p-6 lg:p-12">
              <ComponentPage key={componentName} componentId={componentName} />
            </div>
          </main>
        </div>
      );
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
