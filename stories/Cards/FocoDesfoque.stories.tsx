import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { FocoDesfoque } from './foco-desfoque';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/FocoDesfoque',
  component: FocoDesfoque,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/foco-desfoque'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FocoDesfoque>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
