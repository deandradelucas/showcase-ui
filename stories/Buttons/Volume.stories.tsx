import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Volume } from './volume';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Volume',
  component: Volume,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/volume'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Volume>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
