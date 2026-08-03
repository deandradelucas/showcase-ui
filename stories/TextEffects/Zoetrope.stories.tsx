import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ZoetropePreview } from './zoetrope-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Zoetrope',
  component: ZoetropePreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/zoetrope'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ZoetropePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
