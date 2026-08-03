import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SignalPreview } from './signal-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Signal',
  component: SignalPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/signal'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SignalPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
