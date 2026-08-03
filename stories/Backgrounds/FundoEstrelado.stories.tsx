import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { FundoEstreladoPreview } from './fundo-estrelado-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Backgrounds/FundoEstrelado',
  component: FundoEstreladoPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/fundo-estrelado'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FundoEstreladoPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
