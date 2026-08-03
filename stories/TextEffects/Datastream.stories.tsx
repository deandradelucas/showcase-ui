import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DatastreamPreview } from './datastream-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Datastream',
  component: DatastreamPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/datastream'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatastreamPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
