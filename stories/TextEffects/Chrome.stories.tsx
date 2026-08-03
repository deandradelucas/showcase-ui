import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ChromePreview } from './chrome-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Chrome',
  component: ChromePreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/chrome'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChromePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
