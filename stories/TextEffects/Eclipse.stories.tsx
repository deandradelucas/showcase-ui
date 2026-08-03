import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { EclipsePreview } from './eclipse-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Eclipse',
  component: EclipsePreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/eclipse'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EclipsePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
