import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { AlternarDiaENoitePreview } from './alternar-dia-e-noite-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Toggles/AlternarDiaENoite',
  component: AlternarDiaENoitePreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/alternar-dia-e-noite'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlternarDiaENoitePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
