import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { PendulumPreview } from './pendulum-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Pendulum',
  component: PendulumPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/pendulum'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PendulumPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
