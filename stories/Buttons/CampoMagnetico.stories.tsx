import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CampoMagnetico } from './campo-magnetico';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/CampoMagnetico',
  component: CampoMagnetico,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/campo-magnetico'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CampoMagnetico>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
