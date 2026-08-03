import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Baixar } from './baixar';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Baixar',
  component: Baixar,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/baixar'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Baixar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
