import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CartaoNeumorficoPreview } from './cartao-neumorfico-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CartaoNeumorfico',
  component: CartaoNeumorficoPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/cartao-neumorfico'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CartaoNeumorficoPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
