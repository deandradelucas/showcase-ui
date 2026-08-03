import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { PreVisualizacao } from './pre-visualizacao';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/PreVisualizacao',
  component: PreVisualizacao,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/pre-visualizacao'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PreVisualizacao>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
