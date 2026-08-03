import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Energia } from './energia';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Energia',
  component: Energia,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/energia'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Energia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
