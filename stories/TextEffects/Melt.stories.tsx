import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MeltPreview } from './melt-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Melt',
  component: MeltPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/melt'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MeltPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
