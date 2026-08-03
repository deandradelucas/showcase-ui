import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { PrismcutPreview } from './prismcut-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Prismcut',
  component: PrismcutPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/prismcut'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PrismcutPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
