import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { BlackoutPreview } from './blackout-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Blackout',
  component: BlackoutPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/blackout'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlackoutPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
