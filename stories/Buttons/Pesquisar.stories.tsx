import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Pesquisar } from './pesquisar';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Pesquisar',
  component: Pesquisar,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/pesquisar'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pesquisar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
