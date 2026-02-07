
import React from 'react';
import { Container } from '../components/ui/Layout';
import { Heading, Text, Badge } from '../components/ui/Primitives';
import { ComponentGallery } from '../components/ComponentGallery';

export const ComponentsGalleryPage: React.FC = () => {
  return (
    <div className="pb-24 animate-in fade-in duration-500">
      {/* Header Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-primary-50/50 to-white dark:from-neutral-900/50 dark:to-neutral-950 border-b border-neutral-100 dark:border-neutral-800">
        <Container>
          <div className="max-w-4xl">
            <Badge variant="primary" className="mb-6 uppercase tracking-wider text-[10px]">Component Library</Badge>
            <Heading level={1} className="mb-6 text-4xl lg:text-6xl font-bold tracking-tight">
              Modular Components for <span className="text-primary-600">Enterprise Apps</span>
            </Heading>
            <Text size="lg" color="muted" className="max-w-2xl leading-relaxed">
              Browse our complete collection of strictly typed React components. Each one is built with accessibility, performance, and developer experience in mind.
            </Text>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <Heading level={2} className="text-3xl">All Components</Heading>
              <Text color="muted" className="mt-1">Everything you need to build stunning interfaces.</Text>
            </div>
          </div>

          <ComponentGallery />
        </Container>
      </section>
    </div>
  );
};
