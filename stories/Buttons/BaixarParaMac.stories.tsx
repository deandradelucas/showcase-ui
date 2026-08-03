import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { BaixarParaMac } from './baixar-para-mac';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/BaixarParaMac',
  component: BaixarParaMac,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/baixar-para-mac'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BaixarParaMac>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
