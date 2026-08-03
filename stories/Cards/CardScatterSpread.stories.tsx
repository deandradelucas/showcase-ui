import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CardScatterSpread } from './card-scatter-spread';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CardScatterSpread',
  component: CardScatterSpread,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/card-scatter-spread'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardScatterSpread>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
