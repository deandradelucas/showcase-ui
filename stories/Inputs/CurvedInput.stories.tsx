import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CurvedInput } from './curved-input';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Inputs/CurvedInput',
  component: CurvedInput,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/curved-input'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CurvedInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
