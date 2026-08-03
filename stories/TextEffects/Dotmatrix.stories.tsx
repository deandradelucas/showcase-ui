import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DotmatrixPreview } from './dotmatrix-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Dotmatrix',
  component: DotmatrixPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/dotmatrix'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DotmatrixPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
