import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ScannerPreview } from './scanner-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Scanner',
  component: ScannerPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/scanner'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScannerPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
