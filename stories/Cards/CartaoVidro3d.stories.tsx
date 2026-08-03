import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CartaoVidro3d } from './cartao-vidro-3d';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CartaoVidro3d',
  component: CartaoVidro3d,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/cartao-vidro-3d'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CartaoVidro3d>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'UIVERSE (3D UI)',
    text: 'Create, share, and use beautiful custom elements made with CSS',
  },
};
