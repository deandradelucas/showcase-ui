import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Camera } from './camera';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Camera',
  component: Camera,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/camera'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Camera>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
