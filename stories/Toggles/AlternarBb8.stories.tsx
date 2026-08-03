import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { AlternarBb8Preview } from './alternar-bb8-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Toggles/AlternarBb8',
  component: AlternarBb8Preview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/alternar-bb8'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlternarBb8Preview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
