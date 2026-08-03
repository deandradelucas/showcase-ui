import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { GlassSurface } from './glass-surface';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Surface/GlassSurface',
  component: GlassSurface,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/glass-surface'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GlassSurface>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
