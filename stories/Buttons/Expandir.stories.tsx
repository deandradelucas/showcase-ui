import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Expandir } from './expandir';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Expandir',
  component: Expandir,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/expandir'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Expandir>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
