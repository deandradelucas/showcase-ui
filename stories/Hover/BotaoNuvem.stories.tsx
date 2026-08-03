import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { BotaoNuvem } from './botao-nuvem';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Hover/BotaoNuvem',
  component: BotaoNuvem,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/botao-nuvem'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BotaoNuvem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
