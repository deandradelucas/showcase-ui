import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Masonry } from './masonry';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Galleries/Masonry',
  component: Masonry,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/masonry'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Masonry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
