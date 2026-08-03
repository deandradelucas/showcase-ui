import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MirrorPreview } from './mirror-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Mirror',
  component: MirrorPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/mirror'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MirrorPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
