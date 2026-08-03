import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MaoCarregandoPreview } from './mao-carregando-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Loading/MaoCarregando',
  component: MaoCarregandoPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/mao-carregando'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MaoCarregandoPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
