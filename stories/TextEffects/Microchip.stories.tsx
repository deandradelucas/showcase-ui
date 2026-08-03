import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MicrochipPreview } from './microchip-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Microchip',
  component: MicrochipPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/microchip'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MicrochipPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
