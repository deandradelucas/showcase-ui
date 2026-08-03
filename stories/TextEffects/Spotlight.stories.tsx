import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SpotlightPreview } from './spotlight-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Spotlight',
  component: SpotlightPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/spotlight'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SpotlightPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
