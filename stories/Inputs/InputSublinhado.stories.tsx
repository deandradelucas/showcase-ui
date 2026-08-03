import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { InputSublinhado } from './input-sublinhado';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Inputs/InputSublinhado',
  component: InputSublinhado,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/input-sublinhado'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputSublinhado>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
