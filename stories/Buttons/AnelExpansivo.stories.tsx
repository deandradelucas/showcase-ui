import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { AnelExpansivo } from './anel-expansivo';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/AnelExpansivo',
  component: AnelExpansivo,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/anel-expansivo'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AnelExpansivo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
