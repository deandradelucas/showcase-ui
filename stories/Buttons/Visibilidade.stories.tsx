import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Visibilidade } from './visibilidade';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Visibilidade',
  component: Visibilidade,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/visibilidade'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Visibilidade>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
