import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Favorito } from './favorito';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Favorito',
  component: Favorito,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/favorito'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Favorito>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
