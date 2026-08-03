import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MeshPreview } from './mesh-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Mesh',
  component: MeshPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/mesh'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MeshPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
