import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SmokePreview } from './smoke-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Smoke',
  component: SmokePreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/smoke'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SmokePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
