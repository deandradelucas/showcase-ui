import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { PopPreview } from './pop-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Pop',
  component: PopPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/pop'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PopPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
