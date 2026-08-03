import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { BlueprintPreview } from './blueprint-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Blueprint',
  component: BlueprintPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/blueprint'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlueprintPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
