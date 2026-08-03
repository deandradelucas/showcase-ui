import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { NeonPreview } from './neon-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Neon',
  component: NeonPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/neon'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NeonPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
