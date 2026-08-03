import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Curtir } from './curtir';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Curtir',
  component: Curtir,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/curtir'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Curtir>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
