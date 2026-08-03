import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CardFlipPerfil } from './card-flip-perfil';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CardFlipPerfil',
  component: CardFlipPerfil,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/card-flip-perfil'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardFlipPerfil>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badge: 'NEW',
    title: 'Title',
    subtitle: 'Subtitle',
    description: 'Passe o mouse para virar o card e ver o verso.',
    footer: 'example.com',
    backLabel: 'Hover to flip',
  },
};
