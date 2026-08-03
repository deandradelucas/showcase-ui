import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SoftblurPreview } from './softblur-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Softblur',
  component: SoftblurPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/softblur'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SoftblurPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
