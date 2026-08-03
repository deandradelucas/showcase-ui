import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { WavePreview } from './wave-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Wave',
  component: WavePreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/wave'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WavePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
