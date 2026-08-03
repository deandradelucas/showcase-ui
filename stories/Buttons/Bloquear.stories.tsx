import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Bloquear } from './bloquear';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Bloquear',
  component: Bloquear,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/bloquear'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Bloquear>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
