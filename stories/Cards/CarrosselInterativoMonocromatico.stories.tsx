import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CarrosselInterativoMonocromatico } from './carrossel-interativo-monocromatico';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CarrosselInterativoMonocromatico',
  component: CarrosselInterativoMonocromatico,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/carrossel-interativo-monocromatico'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CarrosselInterativoMonocromatico>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
