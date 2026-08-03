import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Enviar } from './enviar';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Enviar',
  component: Enviar,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/enviar'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Enviar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
