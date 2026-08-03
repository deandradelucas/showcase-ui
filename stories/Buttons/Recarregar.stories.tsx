import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Recarregar } from './recarregar';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Recarregar',
  component: Recarregar,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/recarregar'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Recarregar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
