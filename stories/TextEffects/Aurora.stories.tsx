import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { AuroraPreview } from './aurora-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Aurora',
  component: AuroraPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/aurora'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AuroraPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
