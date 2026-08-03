import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ParallaxPreview } from './parallax-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Parallax',
  component: ParallaxPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/parallax'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ParallaxPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
