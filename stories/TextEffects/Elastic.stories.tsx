import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ElasticPreview } from './elastic-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Elastic',
  component: ElasticPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/elastic'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ElasticPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
