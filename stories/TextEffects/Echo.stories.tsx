import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { EchoPreview } from './echo-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Echo',
  component: EchoPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/echo'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EchoPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
