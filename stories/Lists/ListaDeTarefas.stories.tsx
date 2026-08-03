import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ListaDeTarefas } from './lista-de-tarefas';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Lists/ListaDeTarefas',
  component: ListaDeTarefas,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/lista-de-tarefas'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ListaDeTarefas>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
