import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DecoderPreview } from './decoder-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Decoder',
  component: DecoderPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/decoder'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DecoderPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
