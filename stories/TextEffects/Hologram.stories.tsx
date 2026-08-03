import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { HologramPreview } from './hologram-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Hologram',
  component: HologramPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/hologram'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HologramPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
