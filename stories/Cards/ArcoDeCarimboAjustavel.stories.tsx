import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ArcoDeCarimboAjustavel } from './arco-de-carimbo-ajustavel';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/ArcoDeCarimboAjustavel',
  component: ArcoDeCarimboAjustavel,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/arco-de-carimbo-ajustavel'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArcoDeCarimboAjustavel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
