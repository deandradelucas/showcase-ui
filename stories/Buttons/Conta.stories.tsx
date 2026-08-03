import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Conta } from './conta';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Conta',
  component: Conta,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/conta'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Conta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
