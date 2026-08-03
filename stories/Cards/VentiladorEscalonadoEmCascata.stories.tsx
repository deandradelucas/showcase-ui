import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { VentiladorEscalonadoEmCascata } from './ventilador-escalonado-em-cascata';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/VentiladorEscalonadoEmCascata',
  component: VentiladorEscalonadoEmCascata,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/ventilador-escalonado-em-cascata'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VentiladorEscalonadoEmCascata>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
