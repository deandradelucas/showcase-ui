import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CardCornerFan } from './card-corner-fan';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CardCornerFan',
  component: CardCornerFan,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/card-corner-fan'
      ),
    },
  },
  tags: ['autodocs'],
  argTypes: {
    angle: { control: { type: 'range', min: 0, max: 90, step: 5 } },
    hoverIntensity: { control: { type: 'range', min: 0, max: 2, step: 0.1 } },
  },
} satisfies Meta<typeof CardCornerFan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    angle: 40,
    hoverIntensity: 1,
  },
};
