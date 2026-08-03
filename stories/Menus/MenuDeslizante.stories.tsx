import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MenuDeslizante } from './menu-deslizante';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Menus/MenuDeslizante',
  component: MenuDeslizante,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/menu-deslizante'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MenuDeslizante>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
