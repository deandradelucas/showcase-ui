import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { VaporPreview } from './vapor-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Vapor',
  component: VaporPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/vapor'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VaporPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
