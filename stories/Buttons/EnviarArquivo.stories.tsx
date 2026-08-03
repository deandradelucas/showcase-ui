import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { EnviarArquivo } from './enviar-arquivo';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/EnviarArquivo',
  component: EnviarArquivo,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/enviar-arquivo'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EnviarArquivo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
