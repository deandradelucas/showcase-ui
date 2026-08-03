import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { RansomPreview } from './ransom-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Ransom',
  component: RansomPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/ransom'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RansomPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
