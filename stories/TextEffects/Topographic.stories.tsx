import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TopographicPreview } from './topographic-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Topographic',
  component: TopographicPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/topographic'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TopographicPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
