import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CartaoLuminoso } from './cartao-luminoso';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CartaoLuminoso',
  component: CartaoLuminoso,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/cartao-luminoso'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CartaoLuminoso>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Reading Lamp',
    description: 'Ilumine o ambiente com um clique. Efeito de luz totalmente em CSS.',
    toggleLabel: 'Light',
  },
};
