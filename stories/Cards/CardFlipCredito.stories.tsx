import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CardFlipCredito } from './card-flip-credito';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CardFlipCredito',
  component: CardFlipCredito,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/card-flip-credito'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardFlipCredito>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brandLabel: 'BANK',
    number: '1234 5678 9012 3456',
    name: 'Card Holder',
    expiry: '12/28',
    cvv: '123',
  },
};
