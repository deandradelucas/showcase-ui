import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { EmberPreview } from './ember-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Ember',
  component: EmberPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/ember'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmberPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
