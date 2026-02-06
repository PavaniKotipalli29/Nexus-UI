import React from 'react';
import { Container, Card } from '../components/ui/Layout';
import { Heading, Text, Badge } from '../components/ui/Primitives';

export const AboutPage: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-20 pb-16 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">About Us</Badge>
            <Heading level={1} className="mb-6">About Nexus UI</Heading>
            <Text size="lg" color="muted">
              We are a team of passionate developers dedicated to building the solid foundation for the next generation of web applications.
            </Text>
          </div>
        </Container>
      </section>

      <Container className="py-16 space-y-16">
        
        {/* Mission */}
        <section>
          <Heading level={2} className="mb-6">Our Mission</Heading>
          <Text className="mb-4 max-w-2xl">
            Our mission is to empower developers with a UI system that balances flexibility with strict architectural standards. We believe that great software is built on great foundations, and Nexus UI is designed to be that foundation.
          </Text>
          <Text className="max-w-2xl">
            We prioritize accessibility, performance, and type safety above all else. We don't just want to help you build faster; we want to help you build <em>better</em>.
          </Text>
        </section>

        {/* Team */}
        <section>
          <Heading level={2} className="mb-8">The Team</Heading>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Core Team', role: 'System Architecture', desc: 'Responsible for the core component design and accessibility compliance.' },
              { name: 'Design Ops', role: 'Visual Language', desc: 'Crafting the design tokens, spacing scales, and visual consistency.' },
              { name: 'Community', role: 'Contributors', desc: 'Developers from around the world helping to improve Nexus UI every day.' }
            ].map((member, i) => (
              <Card key={i}>
                <Heading level={4} className="mb-1">{member.name}</Heading>
                <Text size="sm" className="text-primary-600 dark:text-primary-400 mb-3 font-medium">{member.role}</Text>
                <Text size="sm" color="muted">{member.desc}</Text>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-xl border border-neutral-200 dark:border-neutral-800">
          <Heading level={2} className="mb-4">Get in Touch</Heading>
          <Text className="mb-6">
            Have questions or want to contribute? The best way to reach us is through our GitHub repository.
          </Text>
          <a 
            href="https://github.com/PavaniKotipalli29/Nexus-UI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Visit GitHub
          </a>
        </section>

      </Container>
    </div>
  );
};
