import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Compartilhar } from './compartilhar';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Compartilhar',
  component: Compartilhar,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/compartilhar'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Compartilhar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
