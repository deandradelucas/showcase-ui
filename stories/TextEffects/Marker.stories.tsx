import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MarkerPreview } from './marker-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Marker',
  component: MarkerPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/marker'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MarkerPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
