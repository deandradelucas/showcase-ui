import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CardArc7 } from './card-arc-7';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CardArc7',
  component: CardArc7,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/card-arc-7'
      ),
    },
  },
  tags: ['autodocs'],
  argTypes: {
    angle: { control: { type: 'range', min: 0, max: 90, step: 5 } },
    gap: { control: { type: 'range', min: 0, max: 200, step: 10 } },
    hoverIntensity: { control: { type: 'range', min: 0, max: 2, step: 0.1 } },
  },
} satisfies Meta<typeof CardArc7>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    angle: 45,
    gap: 110,
    yOffset: 30,
    hoverIntensity: 1,
  },
};
