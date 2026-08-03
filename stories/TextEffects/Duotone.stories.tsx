import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DuotonePreview } from './duotone-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Duotone',
  component: DuotonePreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/duotone'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DuotonePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
