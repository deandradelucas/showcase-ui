import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { FileUpload } from './file-upload';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Inputs/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/file-upload'
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
