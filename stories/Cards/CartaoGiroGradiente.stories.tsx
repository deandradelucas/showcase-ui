import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CartaoGiroGradiente } from './cartao-giro-gradiente';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CartaoGiroGradiente',
  component: CartaoGiroGradiente,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/cartao-giro-gradiente'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CartaoGiroGradiente>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
