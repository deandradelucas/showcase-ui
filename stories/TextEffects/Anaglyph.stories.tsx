import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { AnaglyphPreview } from './anaglyph-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Anaglyph',
  component: AnaglyphPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/anaglyph'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AnaglyphPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
