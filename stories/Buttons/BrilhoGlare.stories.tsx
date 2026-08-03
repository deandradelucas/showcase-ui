import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { BrilhoGlare } from './brilho-glare';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/BrilhoGlare',
  component: BrilhoGlare,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/brilho-glare'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BrilhoGlare>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
