import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Patrocinador } from './patrocinador';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/Patrocinador',
  component: Patrocinador,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/patrocinador'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Patrocinador>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
