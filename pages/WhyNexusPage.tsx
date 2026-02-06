import React from 'react';
import { Container, Stack, Card } from '../components/ui/Layout';
import { Heading, Text, Badge, Box } from '../components/ui/Primitives';

export const WhyNexusPage: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-20 pb-16 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">Philosophy</Badge>
            <Heading level={1} className="mb-6">Why Nexus UI Exists</Heading>
            <Text size="lg" color="muted">
              We didn't build this because the world needed another component library. 
              We built it because existing solutions forced us to choose between <strong>control</strong> and <strong>convenience</strong>.
            </Text>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* The Problem */}
            <section>
              <Heading level={2} className="mb-6">The Problem</Heading>
              <Text className="mb-4">
                Most React UI libraries fall into two buckets:
              </Text>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-neutral-600 dark:text-neutral-400">
                <li><strong>The monoliths (MUI, AntD):</strong> Heavy, hard to customize, and bring their own styling engines (emotion, styled-components) that wreck runtime performance.</li>
                <li><strong>The headless (Radix, Headless UI):</strong> Great accessibility, but you start from zero styles. You spend weeks building basic inputs before shipping features.</li>
                <li><strong>The utility-first (Tailwind UI):</strong> Copy-paste chaos. Great for speed, terrible for long-term maintenance of complex systems.</li>
              </ul>
            </section>

            {/* The Solution */}
            <section>
              <Heading level={2} className="mb-6">Our Solution: The "System-First" Approach</Heading>
              <Text className="mb-4">
                Nexus UI aims for the sweet spot: <strong>Production-ready patterns with zero runtime styling.</strong>
              </Text>
              
              <div className="space-y-6 mt-8">
                <Card>
                  <Heading level={4} className="mb-2">1. Plain CSS & Variables</Heading>
                  <Text color="muted">No CSS-in-JS. No runtime interpolation. Just standard CSS Modules and CSS Variables. This means instant load times and easier debugging.</Text>
                </Card>
                <Card>
                  <Heading level={4} className="mb-2">2. Strict TypeScript</Heading>
                  <Text color="muted">We don't just use `any`. Our components export strict types for props, refs, and event handlers. If it compiles, it works.</Text>
                </Card>
                <Card>
                  <Heading level={4} className="mb-2">3. Real-World Patterns</Heading>
                  <Text color="muted">We don't stop at Buttons and Inputs. We give you comprehensive layouts for Dashboards, Authentication, and Landing Pages.</Text>
                </Card>
              </div>
            </section>

            {/* Who is this for? */}
            <section>
              <div className="grid md:grid-cols-2 gap-8">
                <Box className="bg-green-50 dark:bg-green-900/10 p-6 rounded-lg border border-green-100 dark:border-green-900/30">
                  <Heading level={3} className="mb-4 text-green-800 dark:text-green-400">Who is this for?</Heading>
                  <ul className="space-y-3 text-sm text-green-900 dark:text-green-300">
                    <li className="flex items-start">
                      <span className="mr-2">✓</span> Teams building long-term SaaS products.
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span> Engineers who value type safety and strict contracts.
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span> Companies that need a solid foundation for their own design system.
                    </li>
                  </ul>
                </Box>

                <Box className="bg-red-50 dark:bg-red-900/10 p-6 rounded-lg border border-red-100 dark:border-red-900/30">
                  <Heading level={3} className="mb-4 text-red-800 dark:text-red-400">Who is this NOT for?</Heading>
                  <ul className="space-y-3 text-sm text-red-900 dark:text-red-300">
                    <li className="flex items-start">
                      <span className="mr-2">✕</span> Weekend hackathons (use Chakra or Tailwind UI).
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✕</span> Projects that need to look exactly like Material Design.
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✕</span> Developers who prefer writing inline styles or utility classes for everything.
                    </li>
                  </ul>
                </Box>
              </div>
            </section>

          </div>

          {/* Sidebar / Meta */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <section>
                <Heading level={4} className="mb-4 uppercase tracking-wider text-xs text-neutral-500">Architecture</Heading>
                <div className="space-y-4">
                  <div>
                    <Text weight="bold">Language</Text>
                    <Text size="sm" color="muted">TypeScript 5.0+</Text>
                  </div>
                  <div>
                    <Text weight="bold">Styling</Text>
                    <Text size="sm" color="muted">CSS Modules + Variables</Text>
                  </div>
                  <div>
                    <Text weight="bold">Framework</Text>
                    <Text size="sm" color="muted">React 18+</Text>
                  </div>
                  <div>
                    <Text weight="bold">Icons</Text>
                    <Text size="sm" color="muted">SVG (Lucide compatible)</Text>
                  </div>
                </div>
              </section>

              <section>
                 <Heading level={4} className="mb-4 uppercase tracking-wider text-xs text-neutral-500">Author</Heading>
                 <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">
                     N
                   </div>
                   <div>
                     <Text weight="bold">Nexus Team</Text>
                     <Text size="sm" color="muted">System Architects</Text>
                   </div>
                 </div>
              </section>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};
