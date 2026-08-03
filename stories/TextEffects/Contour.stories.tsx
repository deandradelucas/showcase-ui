import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ContourPreview } from './contour-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Contour',
  component: ContourPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/contour'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContourPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
