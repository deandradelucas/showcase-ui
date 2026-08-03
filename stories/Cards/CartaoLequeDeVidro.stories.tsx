import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CartaoLequeDeVidroPreview } from './cartao-leque-de-vidro-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CartaoLequeDeVidro',
  component: CartaoLequeDeVidroPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/cartao-leque-de-vidro'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CartaoLequeDeVidroPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
