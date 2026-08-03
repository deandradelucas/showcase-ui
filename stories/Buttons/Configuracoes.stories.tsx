import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Configuracoes } from './configuracoes';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Configuracoes',
  component: Configuracoes,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/configuracoes'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Configuracoes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
