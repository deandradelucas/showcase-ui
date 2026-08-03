import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CarrosselCoverflowMonocromatico } from './carrossel-coverflow-monocromatico';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CarrosselCoverflowMonocromatico',
  component: CarrosselCoverflowMonocromatico,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/carrossel-coverflow-monocromatico'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CarrosselCoverflowMonocromatico>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
