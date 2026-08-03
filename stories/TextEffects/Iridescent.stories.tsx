import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { IridescentPreview } from './iridescent-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'TextEffects/Iridescent',
  component: IridescentPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/iridescent'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IridescentPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
