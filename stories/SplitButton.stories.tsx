import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import SplitButton from '@/components/ui/split-button';

const meta = {
  title: 'Example/SplitButton',
  component: SplitButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mainButton: 'New Project',
    buttons: ['iOS', 'macOS', 'tvOS'],
  },
};

export const CustomOptions: Story = {
  args: {
    mainButton: 'Export',
    buttons: ['PDF', 'PNG', 'SVG'],
  },
};
