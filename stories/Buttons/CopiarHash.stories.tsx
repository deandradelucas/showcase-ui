import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CopiarHash } from './copiar-hash';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/CopiarHash',
  component: CopiarHash,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/copiar-hash'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CopiarHash>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
