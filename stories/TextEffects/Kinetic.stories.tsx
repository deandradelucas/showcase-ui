import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { KineticPreview } from './kinetic-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Kinetic',
  component: KineticPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/kinetic'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KineticPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
