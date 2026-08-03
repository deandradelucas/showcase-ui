import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CardOrbit } from './card-orbit';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CardOrbit',
  component: CardOrbit,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/card-orbit'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardOrbit>;

export default meta;
type Story = StoryObj<typeof meta>;

const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe8f?w=300&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=300&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300&q=80',
];

export const Default: Story = {
  args: {
    images: DEFAULT_IMAGES,
    colorCard: '99,102,241',
  },
};
