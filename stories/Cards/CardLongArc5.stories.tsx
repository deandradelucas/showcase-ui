import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CardLongArc5 } from './card-long-arc-5';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CardLongArc5',
  component: CardLongArc5,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/card-long-arc-5'
      ),
    },
  },
  tags: ['autodocs'],
  argTypes: {
    angle: { control: { type: 'range', min: 0, max: 60, step: 5 } },
    gap: { control: { type: 'range', min: 0, max: 250, step: 10 } },
    hoverIntensity: { control: { type: 'range', min: 0, max: 2, step: 0.1 } },
  },
} satisfies Meta<typeof CardLongArc5>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    angle: 15,
    gap: 140,
    yOffset: 20,
    hoverIntensity: 1,
  },
};
