import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { VentiladorRadialDeRoda } from './ventilador-radial-de-roda';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/VentiladorRadialDeRoda',
  component: VentiladorRadialDeRoda,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/ventilador-radial-de-roda'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VentiladorRadialDeRoda>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
