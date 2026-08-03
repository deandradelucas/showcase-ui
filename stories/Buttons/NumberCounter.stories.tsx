import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { NumberCounter } from './number-counter';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/NumberCounter',
  component: NumberCounter,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/number-counter'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NumberCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
