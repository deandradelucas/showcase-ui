import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CrtPreview } from './crt-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Crt',
  component: CrtPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/crt'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CrtPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
