import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CardArc5 } from './card-arc-5';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CardArc5',
  component: CardArc5,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/card-arc-5'
      ),
    },
  },
  tags: ['autodocs'],
  argTypes: {
    angle: {
      control: { type: 'range', min: 0, max: 60, step: 5 },
      description: 'Ângulo de rotação de cada carta no leque.',
    },
    gap: {
      control: { type: 'range', min: 0, max: 150, step: 10 },
      description: 'Distância horizontal entre as cartas ao abrir.',
    },
    hoverIntensity: {
      control: { type: 'range', min: 0, max: 2, step: 0.1 },
    },
  },
} satisfies Meta<typeof CardArc5>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    angle: 30,
    gap: 70,
    yOffset: 10,
    hoverIntensity: 1,
  },
};
