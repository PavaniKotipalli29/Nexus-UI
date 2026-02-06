import React, { useState } from 'react';
import { Container, Card } from '../components/ui/Layout';
import { Heading, Text, Badge, Button, Icon } from '../components/ui/Primitives';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "srivallir16@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-20 pb-12 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">Get in Touch</Badge>
            <Heading level={1} className="mb-6">Contact Us</Heading>
            <Text size="lg" color="muted">
              We'd love to hear from you. Whether you have a question, a bug report, or just want to say hi.
            </Text>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Email Card */}
          <Card className="flex flex-col items-center text-center p-8 space-y-4">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-full flex items-center justify-center mb-2">
              <Icon size="md"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></Icon>
            </div>
            <Heading level={3}>Email Us</Heading>
            <Text color="muted">
              For general inquiries, support, or partnership opportunities.
            </Text>
            
            <div className="flex items-center gap-2 mt-4 p-2 bg-neutral-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700">
              <code className="text-sm font-mono px-2">{email}</code>
              <Button 
                size="sm" 
                variant="secondary" 
                onClick={handleCopyEmail}
                className="min-w-[80px]"
              >
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </Card>

          {/* GitHub Card */}
          <Card className="flex flex-col items-center text-center p-8 space-y-4">
            <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-full flex items-center justify-center mb-2">
              <Icon size="md"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></Icon>
            </div>
            <Heading level={3}>GitHub</Heading>
            <Text color="muted">
              Report bugs, request features, or join the discussion.
            </Text>
            
            <div className="flex flex-col gap-2 w-full mt-4">
               <a 
                 href="https://github.com/PavaniKotipalli29/Nexus-UI/issues" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block w-full py-2 px-4 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-md text-sm font-medium transition-colors"
               >
                 Report an Issue
               </a>
               <a 
                 href="https://github.com/PavaniKotipalli29/Nexus-UI/discussions" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block w-full py-2 px-4 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-md text-sm font-medium transition-colors"
               >
                 Join Discussions
               </a>
            </div>
          </Card>

        </div>
      </Container>
    </div>
  );
};
