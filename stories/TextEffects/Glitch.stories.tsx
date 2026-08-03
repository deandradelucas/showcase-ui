import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { GlitchPreview } from './glitch-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Glitch',
  component: GlitchPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/glitch'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GlitchPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
