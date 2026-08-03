import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { IndicadorDeScrollPreview } from './indicador-de-scroll-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/IndicadorDeScroll',
  component: IndicadorDeScrollPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/indicador-de-scroll'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IndicadorDeScrollPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
