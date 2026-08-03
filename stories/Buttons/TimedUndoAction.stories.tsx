import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TimedUndoAction } from './timed-undo-action';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/TimedUndoAction',
  component: TimedUndoAction,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/timed-undo-action'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TimedUndoAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialSeconds: 10,
    deleteLabel: 'Delete Account',
    undoLabel: 'Cancel Delete',
  },
};

export const FastCountdown: Story = {
  args: {
    initialSeconds: 3,
    deleteLabel: 'Delete Account',
    undoLabel: 'Cancel Delete',
  },
};
