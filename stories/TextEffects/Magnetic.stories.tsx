import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MagneticPreview } from './magnetic-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Magnetic',
  component: MagneticPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/magnetic'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MagneticPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
