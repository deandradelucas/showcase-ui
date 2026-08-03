import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { AlternarTema } from './alternar-tema';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/AlternarTema',
  component: AlternarTema,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/alternar-tema'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlternarTema>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
