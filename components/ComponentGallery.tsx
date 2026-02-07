
import React from 'react';
import { Card, Stack } from '../components/ui/Layout';
import { Heading, Text, Badge, Icon } from '../components/ui/Primitives';
import { Tabs, Tooltip } from '../components/ui/Composite';
import { CodeBlock } from '../components/ui/Utilities';
import { components, ComponentItem } from '../data/ComponentsData';

interface ComponentGalleryProps {
  items?: ComponentItem[];
  limit?: number;
}

export const ComponentGallery: React.FC<ComponentGalleryProps> = ({ items = components, limit }) => {
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayItems.map((comp) => (
        <Card 
          key={comp.id} 
          className="group flex flex-col h-full overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex-1">
            <Tabs 
              variant="pills"
              className="h-64"
              items={[
                {
                  id: 'preview',
                  label: (
                    <Tooltip content="Preview">
                      <Icon size="sm"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></Icon>
                    </Tooltip>
                  ),
                  content: (
                    <div className="h-48 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg flex items-center justify-center overflow-hidden border border-neutral-100 dark:border-neutral-800 transition-colors">
                      <div className="w-full flex justify-center scale-110">
                        {comp.preview}
                      </div>
                    </div>
                  )
                },
                {
                  id: 'code',
                  label: (
                    <Tooltip content="Source Code">
                      <Icon size="sm"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></Icon>
                    </Tooltip>
                  ),
                  content: (
                    <div className="h-48 overflow-y-auto">
                      <CodeBlock code={comp.code} language="tsx" showLineNumbers={false} className="!bg-transparent !border-none" />
                    </div>
                  )
                },
                {
                  id: 'info',
                  label: (
                    <Tooltip content="Information">
                      <Icon size="sm"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>
                    </Tooltip>
                  ),
                  content: (
                    <div className="h-48 p-4 flex flex-col justify-center">
                      <Text size="sm" color="muted" className="leading-relaxed">
                        {comp.info}
                      </Text>
                    </div>
                  )
                }
              ]}
            />
          </div>
          
          <div className="p-6 pt-0 mt-auto">
            <Stack spacing={2} className="mb-6">
              <div className="flex justify-between items-start">
                <Heading level={4}>{comp.name}</Heading>
                <Badge variant="outline" size="sm">{comp.variants} Variants</Badge>
              </div>
              <Text size="sm" color="muted" className="line-clamp-2">
                {comp.description}
              </Text>
            </Stack>

            <div 
              className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center text-xs font-medium text-primary-600 cursor-pointer hover:text-primary-700 transition-colors"
              onClick={() => window.location.hash = `#/docs/${comp.id}`}
            >
              <span>View Full Documentation</span>
              <Icon size="xs"><path d="M9 5l7 7-7 7" /></Icon>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
