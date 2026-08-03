import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CircularGallery } from './circular-gallery';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Galleries/CircularGallery',
  component: CircularGallery,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/circular-gallery'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CircularGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
