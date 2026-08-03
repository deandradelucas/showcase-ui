import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { JitterPreview } from './jitter-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Jitter',
  component: JitterPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/jitter'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof JitterPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
