import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { HeatmapPreview } from './heatmap-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Heatmap',
  component: HeatmapPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/heatmap'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeatmapPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
