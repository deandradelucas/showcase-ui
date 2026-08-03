import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { VaporizeTextCycle } from './text-vaporize';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/TextVaporize',
  component: VaporizeTextCycle,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/text-vaporize'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VaporizeTextCycle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
