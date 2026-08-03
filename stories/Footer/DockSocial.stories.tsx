import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DockSocial } from './dock-social';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Footer/DockSocial',
  component: DockSocial,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/dock-social'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DockSocial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
