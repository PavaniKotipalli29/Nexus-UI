
import React from 'react';
import { Container, Stack, Card } from '../components/ui/Layout';
import { Heading, Text, Button, Badge } from '../components/ui/Primitives';

export const LandingPage: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32 bg-gradient-to-b from-primary-50/50 to-white dark:from-neutral-900/50 dark:to-neutral-950">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="primary" className="mb-6 px-4 py-1.5 text-sm">v1.0.0 is now live!</Badge>
            <Heading level={1} className="mb-6">
              Build Scalable Systems, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-violet-600">Not Just Pages</span>
            </Heading>
            <Text size="lg" color="muted" className="mb-10 max-w-2xl mx-auto leading-relaxed">
              A strictly typed, accessibility-first React component library. No Tailwind dependencies, no Bootstrap bloat—just pure CSS Modules and robust TypeScript patterns for serious engineering teams.
            </Text>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => window.location.hash = '#/docs/button'}>Get Started</Button>
              <Button size="lg" variant="secondary" onClick={() => window.location.hash = '#/patterns/dashboard'}>View Dashboard Example</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Grid */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">Everything you need to ship fast</Heading>
            <Text color="muted">Over 50+ enterprise-ready components built with TypeScript and Tailwind CSS.</Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Accessible', desc: 'Compliant with WAI-ARIA standards out of the box for a better inclusive web.' },
              { title: 'Customizable', desc: 'Extremely flexible design tokens based on a simple 8px spacing system.' },
              { title: 'Type Safe', desc: 'Written in 100% TypeScript. Say goodbye to runtime property errors.' },
              { title: 'Dark Mode', desc: 'Automatic support for dark mode with seamless CSS variable transitions.' },
              { title: 'Performance', desc: 'Zero runtime CSS injection. Ultra-lean bundles for high performance.' },
              { title: 'Modern', desc: 'Inspired by modern SaaS interfaces like Linear, Stripe, and Untitled UI.' },
            ].map((f, i) => (
              <Card key={i} className="hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <Heading level={4} className="mb-2">{f.title}</Heading>
                <Text color="muted">{f.desc}</Text>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 bg-neutral-100 dark:bg-neutral-900/50">
        <Container>
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <Heading level={3} className="mb-4">Ready to level up your UI game?</Heading>
                <Text color="muted" className="mb-8">Join over 10,000 developers building better software with Nexus UI.</Text>
                <ul className="space-y-4 mb-8">
                  {['Free forever for individuals', 'Commercial license for teams', 'Priority support channels'].map(item => (
                    <li key={item} className="flex items-center text-sm">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button fullWidth>Get Started for Free</Button>
              </div>
              <div className="bg-primary-600 p-8 md:p-12 flex flex-col justify-center text-white">
                <Text className="text-primary-100 mb-2 uppercase font-bold tracking-widest text-xs">Enterprise</Text>
                <Heading level={2} className="text-white mb-4">Scale with confidence</Heading>
                <Text className="text-primary-100 mb-8">Custom components, theme audits, and architecture consultations.</Text>
                <Button variant="secondary" className="!bg-white !text-primary-600 border-none">Contact Sales</Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Footer */}
      <footer className="pt-24 border-t border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <a href="#/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
                </div>
                <span className="text-xl font-bold tracking-tight">NexusUI</span>
              </a>
              <Text color="muted" className="max-w-xs">The world's most advanced component library for high-performance React applications.</Text>
            </div>
            <div>
              <h5 className="font-bold mb-6">Product</h5>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-primary-600">Documentation</a></li>
                <li><a href="#" className="hover:text-primary-600">Components</a></li>
                <li><a href="#" className="hover:text-primary-600">Templates</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Company</h5>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li><a href="#/about" className="hover:text-primary-600">About</a></li>

                <li><a href="#/contact" className="hover:text-primary-600">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="py-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <Text size="sm" color="muted">© 2026 Nexus UI System. All rights reserved.</Text>
            <div className="flex space-x-6">
              <a href="https://github.com/PavaniKotipalli29/Nexus-UI.git" className="text-neutral-400 hover:text-primary-600"><span className="sr-only">GitHub</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};
