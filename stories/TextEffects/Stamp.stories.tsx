import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { StampPreview } from './stamp-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Stamp',
  component: StampPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/stamp'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StampPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
