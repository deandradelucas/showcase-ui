import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TimedUndoAction } from '@/components/ui/timed-undo-action';

const meta = {
  title: 'Example/TimedUndoAction',
  component: TimedUndoAction,
  parameters: {
    layout: 'centered',
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
