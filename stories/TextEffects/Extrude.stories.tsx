import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ExtrudePreview } from './extrude-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Extrude',
  component: ExtrudePreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/extrude'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExtrudePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
