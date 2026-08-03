import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { GooeyNav } from './gooey-nav';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Menus/GooeyNav',
  component: GooeyNav,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/gooey-nav'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GooeyNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
