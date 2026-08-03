import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Diretorio } from './diretorio';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Diretorio',
  component: Diretorio,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/diretorio'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Diretorio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
