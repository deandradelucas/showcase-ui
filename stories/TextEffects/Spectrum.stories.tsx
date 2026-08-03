import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SpectrumPreview } from './spectrum-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Spectrum',
  component: SpectrumPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/spectrum'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SpectrumPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
