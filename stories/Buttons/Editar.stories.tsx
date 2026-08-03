import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Editar } from './editar';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Editar',
  component: Editar,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/editar'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Editar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
