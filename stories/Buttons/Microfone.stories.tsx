import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Microfone } from './microfone';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Microfone',
  component: Microfone,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/microfone'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Microfone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
