import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { StarlightPreview } from './starlight-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Starlight',
  component: StarlightPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/starlight'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StarlightPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
