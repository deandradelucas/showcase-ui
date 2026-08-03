import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { PilhaDeMaquinaDoTempoMonocromatica } from './pilha-de-maquina-do-tempo-monocromatica';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/PilhaDeMaquinaDoTempoMonocromatica',
  component: PilhaDeMaquinaDoTempoMonocromatica,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/pilha-de-maquina-do-tempo-monocromatica'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PilhaDeMaquinaDoTempoMonocromatica>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
