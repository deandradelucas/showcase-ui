import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Rede } from './rede';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Rede',
  component: Rede,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/rede'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Rede>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
