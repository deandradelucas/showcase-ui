import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CardLinearSpread } from './card-linear-spread';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CardLinearSpread',
  component: CardLinearSpread,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/card-linear-spread'
      ),
    },
  },
  tags: ['autodocs'],
  argTypes: {
    gap: { control: { type: 'range', min: 0, max: 200, step: 10 } },
    hoverIntensity: { control: { type: 'range', min: 0, max: 2, step: 0.1 } },
  },
} satisfies Meta<typeof CardLinearSpread>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gap: 90,
    hoverIntensity: 1,
  },
};
