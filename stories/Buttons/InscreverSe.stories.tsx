import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { InscreverSe } from './inscrever-se';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/InscreverSe',
  component: InscreverSe,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/inscrever-se'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InscreverSe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
