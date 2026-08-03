import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { BarcodePreview } from './barcode-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Barcode',
  component: BarcodePreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/barcode'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BarcodePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
