import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { InputGlow } from './input-glow';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Inputs/InputGlow',
  component: InputGlow,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/input-glow'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputGlow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
