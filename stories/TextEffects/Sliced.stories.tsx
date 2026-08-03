import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SlicedPreview } from './sliced-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Sliced',
  component: SlicedPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/sliced'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SlicedPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
