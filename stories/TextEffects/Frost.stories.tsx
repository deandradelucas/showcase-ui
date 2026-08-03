import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { FrostPreview } from './frost-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Frost',
  component: FrostPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/frost'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FrostPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
