
import React from 'react';
import { Container } from '../components/ui/Layout';
import { Heading, Text, Badge, Icon } from '../components/ui/Primitives';
import { ComponentGallery } from '../components/ComponentGallery';
import { Card } from '../components/ui/Layout';

import { components, Category } from '../data/ComponentsData';

export const ComponentsGalleryPage: React.FC<{ initialCategory?: Category | null }> = ({ initialCategory = null }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<Category | null>(initialCategory);

  // Sync state with prop if it changes
  React.useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const handleCategorySelect = (catId: Category) => {
    setSelectedCategory(catId);
    window.location.hash = `#/components/${catId}`;
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    window.location.hash = '#/components';
  };

  const categories: { id: Category; name: string; description: string; count: number; icon: React.ReactNode }[] = [
    { 
      id: 'Atomic', 
      name: 'Atomic Components', 
      description: 'The smallest building blocks of your UI. Stateless, highly reusable, and design-token driven.',
      count: components.filter(c => c.category === 'Atomic').length,
      icon: <path d="M11 4a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V8H9a1 1 0 010-2h1V5a1 1 0 011-1z" />
    },
    { 
      id: 'Reusable', 
      name: 'Reusable Molecules', 
      description: 'Combinations of atomic components that solve specific UX problems.',
      count: components.filter(c => c.category === 'Reusable').length,
      icon: <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
    },
    { 
      id: 'Composite', 
      name: 'Composite Organisms', 
      description: 'Complex UI sections representing complete functional patterns.',
      count: components.filter(c => c.category === 'Composite').length,
      icon: <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    },
    { 
      id: 'App-level', 
      name: 'App-level Templates', 
      description: 'Full-page layouts reflecting real product flows.',
      count: components.filter(c => c.category === 'App-level').length,
      icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    }
  ];

  const currentCategory = categories.find(c => c.id === selectedCategory);

  return (
    <div className="pb-24 animate-in fade-in duration-500">
      {/* Header Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-primary-50/50 to-white dark:from-neutral-900/50 dark:to-neutral-950 border-b border-neutral-100 dark:border-neutral-800">
        <Container>
          <div className="max-w-4xl">
            <Badge variant="primary" className="mb-6 uppercase tracking-wider text-[10px]">Component Library</Badge>
            <Heading level={1} className="mb-6 text-4xl lg:text-6xl font-bold tracking-tight">
              {selectedCategory ? (
                currentCategory?.name
              ) : (
                <>Explore Our <span className="text-primary-600">UI Ecosystem</span></>
              )}
            </Heading>

            <Text size="lg" color="muted" className="max-w-2xl leading-relaxed">
              {selectedCategory 
                ? currentCategory?.description 
                : 'Choose a category to browse our collection of strictly typed React components, designed for scalability and performance.'}
            </Text>
            
            {selectedCategory && (
              <button 
                onClick={handleBackToCategories}
                className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group"
              >
                <Icon size="xs" className="transition-transform group-hover:-translate-x-1 rotate-180"><path d="M9 5l7 7-7 7" /></Icon>
                Back to Categories
              </button>
            )}
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <Container>
          {!selectedCategory ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {categories.map((cat) => (
                <Card 
                  key={cat.id}
                  interactive
                  onClick={() => handleCategorySelect(cat.id)}
                  className="p-8 group hover:border-primary-500 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-[0.05] scale-[4] group-hover:scale-[4.5] transition-transform duration-500 text-primary-600">
                    <Icon size="xl">{cat.icon}</Icon>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                      <Icon size="md">{cat.icon}</Icon>
                    </div>
                    
                    <Heading level={2} className="text-2xl font-bold mb-3">{cat.name}</Heading>
                    <Text color="muted" className="mb-6 leading-relaxed">
                      {cat.description}
                    </Text>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest px-2 py-0 border-neutral-200 text-neutral-500">
                        {cat.count} Components
                      </Badge>
                      <div className="text-primary-600 flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                        Explore Category
                        <Icon size="xs"><path d="M9 5l7 7-7 7" /></Icon>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <ComponentGallery items={components.filter(c => c.category === selectedCategory)} />
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};


