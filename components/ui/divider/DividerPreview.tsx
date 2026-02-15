import React from 'react';
import { Divider } from './Divider';
import { Card, Stack } from '../Layout';
import { Text, Flex, Heading, Badge } from '../Primitives';

export const DividerPreview: React.FC = () => {
  return (
    <Stack spacing={8} className="p-6 bg-neutral-50 dark:bg-neutral-900 min-h-screen">
      <div className="space-y-2">
        <Heading level={2}>Divider Component</Heading>
        <Text tone="muted">
          A flexible divider component that separates content with various styles, labels, and orientations.
        </Text>
      </div>

      <Card padding="lg" className="space-y-8">

        <div className="space-y-4">
          <Heading level={4}>With Text / Label</Heading>
          <Text variant="body-sm" tone="muted">Dividers can have labels positioned left, center, or right.</Text>
          
          <Stack spacing={4}>
            <Divider label="Center Label" />
            <Divider label="Left Label" labelPosition="left" />
            <Divider label="Right Label" labelPosition="right" />
            
            <div>
              <Text variant="caption" className="mb-2">Custom Styling</Text>
              <Divider 
                label={<Badge variant="primary" size="sm" style="pill">New</Badge>} 
                color="var(--primary-500)"
              />
            </div>
          </Stack>
        </div>


        <div className="space-y-4">
          <Heading level={4}>Vertical Orientation</Heading>
          <Text variant="body-sm" tone="muted">Use in flex containers to separate horizontal items.</Text>
          
          <Flex className="h-24 items-center bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <Text>Blog</Text>
            <Divider orientation="vertical" />
            <Text>Docs</Text>
            <Divider orientation="vertical" variant="dashed" />
            <Text>About</Text>
            <Divider orientation="vertical" label="OR" />
            <Text>Contact</Text>
            <Divider orientation="vertical" variant="gradient-animated" />
            <Badge variant="success">Hiring</Badge>
          </Flex>
        </div>
      </Card>
      
      <Card padding="lg" className="bg-neutral-900 border-neutral-800 text-white">
        <Heading level={4} className="text-white mb-4">Dark Mode Preview</Heading>
        <Stack spacing={4}>
          <Text tone="subtle">The divider automatically adapts colors in dark mode.</Text>
          <Divider />
          <Divider label="Section Break" />
          <Divider variant="dashed" />
        </Stack>
      </Card>
    </Stack>
  );
};
