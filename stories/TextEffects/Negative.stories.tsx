import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { NegativePreview } from './negative-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Negative',
  component: NegativePreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/negative'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NegativePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
