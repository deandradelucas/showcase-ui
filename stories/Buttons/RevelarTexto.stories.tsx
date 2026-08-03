import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { RevelarTexto } from './revelar-texto';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/RevelarTexto',
  component: RevelarTexto,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/revelar-texto'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RevelarTexto>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
