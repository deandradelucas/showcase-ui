import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { PortalPreview } from './portal-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Portal',
  component: PortalPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/portal'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PortalPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
