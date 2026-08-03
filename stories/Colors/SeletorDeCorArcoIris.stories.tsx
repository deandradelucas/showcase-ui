import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { SeletorDeCorArcoIrisPreview } from './seletor-de-cor-arco-iris-preview';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Colors/SeletorDeCorArcoIris',
  component: SeletorDeCorArcoIrisPreview,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/seletor-de-cor-arco-iris'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SeletorDeCorArcoIrisPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
