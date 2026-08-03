import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ImplantarAplicativo } from './implantar-aplicativo';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/ImplantarAplicativo',
  component: ImplantarAplicativo,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/implantar-aplicativo'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImplantarAplicativo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
