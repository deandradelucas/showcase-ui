import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MoirePreview } from './moire-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Moire',
  component: MoirePreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/moire'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MoirePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
