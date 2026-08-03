import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { AlternarPulsoPreview } from './alternar-pulso-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Toggles/AlternarPulso',
  component: AlternarPulsoPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/alternar-pulso'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlternarPulsoPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
