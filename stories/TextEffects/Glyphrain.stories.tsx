import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { GlyphrainPreview } from './glyphrain-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Glyphrain',
  component: GlyphrainPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/glyphrain'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GlyphrainPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
