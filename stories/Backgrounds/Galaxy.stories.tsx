import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Galaxy } from './galaxy';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Backgrounds/Galaxy',
  component: Galaxy,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/galaxy'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Galaxy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
