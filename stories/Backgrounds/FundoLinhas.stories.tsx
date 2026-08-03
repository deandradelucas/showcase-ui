import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { FundoLinhasPreview } from './fundo-linhas-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Backgrounds/FundoLinhas',
  component: FundoLinhasPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/fundo-linhas'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FundoLinhasPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
