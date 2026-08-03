import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TiltshiftPreview } from './tiltshift-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Tiltshift',
  component: TiltshiftPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/tiltshift'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TiltshiftPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
