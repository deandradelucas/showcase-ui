import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DeUmaEstrelaNoGithub } from './de-uma-estrela-no-github';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Buttons/DeUmaEstrelaNoGithub',
  component: DeUmaEstrelaNoGithub,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/de-uma-estrela-no-github'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DeUmaEstrelaNoGithub>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
