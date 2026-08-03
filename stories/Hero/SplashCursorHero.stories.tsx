import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SplashCursorHero } from './splash-cursor-hero';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Hero/SplashCursorHero',
  component: SplashCursorHero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/splash-cursor-hero'
      ),
    },
  },
  tags: ['autodocs'],
  argTypes: {
    splatForce: {
      control: { type: 'range', min: 1000, max: 15000, step: 500 },
      description: 'Intensidade do respingo ao mover o mouse (o "volume" da animação).',
    },
    splatRadius: {
      control: { type: 'range', min: 0.05, max: 1, step: 0.05 },
      description: 'Tamanho do respingo ao mover o mouse.',
    },
  },
} satisfies Meta<typeof SplashCursorHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    splatForce: 6000,
    splatRadius: 0.2,
  },
};
