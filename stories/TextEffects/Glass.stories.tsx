import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { GlassPreview } from './glass-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Glass',
  component: GlassPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/glass'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GlassPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
