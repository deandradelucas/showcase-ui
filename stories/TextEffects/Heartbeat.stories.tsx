import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { HeartbeatPreview } from './heartbeat-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Heartbeat',
  component: HeartbeatPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/heartbeat'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeartbeatPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
