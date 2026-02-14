import React from 'react';
import { Container, Card, Stack } from '../components/ui/Layout';
import { Heading, Text, Badge } from '../components/ui/Primitives';

const faqs = [
  {
    question: "What is Nexus UI?",
    answer: "Nexus UI is a strictly typed, accessibility-first React component library designed for serious engineering teams. It prioritizes performance, type safety, and a clean, professional aesthetic without the bloat of traditional frameworks."
  },
  {
    question: "Is it building with Tailwind CSS?",
    answer: "While Nexus UI uses Tailwind CSS for its internal styling and rapid development, it is designed to be consumed as a modular component library where you don't need to worry about the underlying utility classes."
  },
  {
    question: "How do I get started?",
    answer: "You can get started by exploring our components gallery and following the documentation for each component. Most components can be easily integrated by importing them into your React project."
  },
  {
    question: "Is it free to use?",
    answer: "Yes, Nexus UI is free for individuals and open-source projects. We also offer commercial licenses for teams that require priority support and advanced architecture consultations."
  },
  {
    question: "Is it accessibility-first?",
    answer: "Absolutely. We follow WAI-ARIA standards out of the box to ensure your applications are inclusive and accessible to everyone."
  },
  {
    question: "Can I customize the theme?",
    answer: "Yes, Nexus UI is built on a simple yet powerful design token system. You can easily customize colors, spacing, and typography to match your brand's identity."
  }
];

export const FaqPage: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-20 pb-16 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">Support</Badge>
            <Heading level={1} className="mb-6">Frequently Asked Questions</Heading>
            <Text size="lg" color="muted">
              Everything you need to know about the Nexus UI system. Can't find the answer you're looking for? Reach out to our community.
            </Text>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="max-w-3xl mx-auto">
          <Stack spacing={8}>
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 md:p-8">
                <Heading level={4} className="mb-4 text-primary-600 dark:text-primary-400">
                  {faq.question}
                </Heading>
                <Text color="muted" className="leading-relaxed">
                  {faq.answer}
                </Text>
              </Card>
            ))}
          </Stack>

          {/* Contact Section */}
          <div className="mt-16 p-8 bg-primary-50 dark:bg-primary-900/10 rounded-2xl border border-primary-100 dark:border-primary-900/20 text-center">
            <Heading level={3} className="mb-4">Still have questions?</Heading>
            <Text color="muted" className="mb-8">
              We're here to help. Join our Discord community or open an issue on GitHub.
            </Text>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#/contact" 
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors w-full sm:w-auto"
              >
                Contact Support
              </a>
              <a 
                href="https://github.com/PavaniKotipalli29/Nexus-UI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors w-full sm:w-auto"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
