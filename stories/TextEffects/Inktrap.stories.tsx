import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { InktrapPreview } from './inktrap-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Inktrap',
  component: InktrapPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/inktrap'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InktrapPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
