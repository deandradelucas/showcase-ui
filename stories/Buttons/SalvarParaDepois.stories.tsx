import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SalvarParaDepois } from './salvar-para-depois';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/SalvarParaDepois',
  component: SalvarParaDepois,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/salvar-para-depois'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SalvarParaDepois>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
