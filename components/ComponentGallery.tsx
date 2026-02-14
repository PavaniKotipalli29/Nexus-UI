
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
          className="group flex flex-col h-full overflow-hidden border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          <div className="flex-1 p-1">
            <Tabs 
              variant="pills"
              className="h-72"
              items={[
                {
                  id: 'preview',
                  label: (
                    <Tooltip content="Preview">
                      <div className="p-2 rounded-lg transition-colors group-data-[state=active]:bg-primary-600 group-data-[state=active]:text-white text-neutral-500">
                        <Icon size="sm"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></Icon>
                      </div>
                    </Tooltip>
                  ),
                  content: (
                    <div className="h-56 bg-neutral-50/50 dark:bg-neutral-900/30 rounded-xl flex items-center justify-center overflow-hidden border border-neutral-100 dark:border-neutral-800 m-2 transition-colors">
                      <div className="w-full flex justify-center transform transition-transform duration-500 group-hover:scale-110">
                        {comp.preview}
                      </div>
                    </div>
                  )
                },
                {
                  id: 'code',
                  label: (
                    <Tooltip content="Source Code">
                      <div className="p-2 rounded-lg transition-colors group-data-[state=active]:bg-primary-600 group-data-[state=active]:text-white text-neutral-500">
                        <Icon size="sm"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></Icon>
                      </div>
                    </Tooltip>
                  ),
                  content: (
                    <div className="h-56 m-2 p-2 bg-neutral-900 rounded-xl overflow-hidden">
                      <div className="h-full overflow-y-auto scrollbar-hide">
                        <CodeBlock code={comp.code} language="tsx" showLineNumbers={false} className="!bg-transparent !border-none !p-0 !text-[10px]" />
                      </div>
                    </div>
                  )
                },
                {
                  id: 'info',
                  label: (
                    <Tooltip content="Information">
                      <div className="p-2 rounded-lg transition-colors group-data-[state=active]:bg-primary-600 group-data-[state=active]:text-white text-neutral-500">
                        <Icon size="sm"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>
                      </div>
                    </Tooltip>
                  ),
                  content: (
                    <div className="h-56 m-2 p-6 flex flex-col justify-center bg-neutral-50 dark:bg-neutral-900 rounded-xl">
                      <Text size="sm" color="muted" className="leading-relaxed">
                        {comp.info}
                      </Text>
                    </div>
                  )
                }
              ]}
            />
          </div>
          
          <div className="p-8 pt-2 mt-auto">
            <Stack spacing={2} className="mb-6">
              <div className="flex justify-between items-center">
                <Heading level={4} className="text-xl font-bold tracking-tight">{comp.name}</Heading>
                <Badge variant="outline" size="sm" className="font-medium text-[10px] px-2 py-0 border-neutral-200 text-neutral-500">{comp.variants} Variants</Badge>
              </div>
              <Text size="sm" color="muted" className="line-clamp-2 leading-relaxed h-10">
                {comp.description}
              </Text>
            </Stack>

            <div 
              className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center text-xs font-semibold text-primary-600 cursor-pointer hover:text-primary-700 transition-colors group/link"
              onClick={() => window.location.hash = `#/docs/${comp.id}`}
            >
              <span>View Full Documentation</span>
              <Icon size="xs" className="transition-transform group-hover/link:translate-x-1"><path d="M9 5l7 7-7 7" /></Icon>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

