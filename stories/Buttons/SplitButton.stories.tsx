import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import SplitButton from './split-button';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/SplitButton',
  component: SplitButton,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/split-button'
      ),
    },
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
