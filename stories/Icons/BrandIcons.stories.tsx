import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { BrandIcons } from './brand-icons';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Icons/BrandIcons',
  component: BrandIcons,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/brand-icons'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BrandIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
