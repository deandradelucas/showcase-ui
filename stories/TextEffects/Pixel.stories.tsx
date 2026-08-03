import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { PixelPreview } from './pixel-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Pixel',
  component: PixelPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/pixel'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PixelPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
