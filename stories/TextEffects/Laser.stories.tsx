import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { LaserPreview } from './laser-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Laser',
  component: LaserPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/laser'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LaserPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
