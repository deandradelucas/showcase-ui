import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Excluir } from './excluir';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Excluir',
  component: Excluir,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/excluir'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Excluir>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
