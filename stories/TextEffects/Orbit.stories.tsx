import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { OrbitPreview } from './orbit-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Orbit',
  component: OrbitPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/orbit'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OrbitPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
