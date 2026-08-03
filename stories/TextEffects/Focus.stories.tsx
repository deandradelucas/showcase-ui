import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { FocusPreview } from './focus-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Focus',
  component: FocusPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/focus'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FocusPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
