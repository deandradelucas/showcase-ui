import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Carousel } from './carousel';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/carousel'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
