import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TypewriterPreview } from './typewriter-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Typewriter',
  component: TypewriterPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/typewriter'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TypewriterPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
