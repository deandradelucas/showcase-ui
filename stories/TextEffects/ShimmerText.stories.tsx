import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ShimmerTextPreview } from './shimmer-text-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/ShimmerText',
  component: ShimmerTextPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/shimmer-text'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShimmerTextPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
