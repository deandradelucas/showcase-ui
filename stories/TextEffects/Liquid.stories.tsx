import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { LiquidPreview } from './liquid-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Liquid',
  component: LiquidPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/liquid'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LiquidPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
