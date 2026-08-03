import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SundialPreview } from './sundial-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Sundial',
  component: SundialPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/sundial'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SundialPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
