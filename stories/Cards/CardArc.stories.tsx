import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import CardArc from './card-arc';
import { makeDocPageWithInstall } from '../doc-page-with-install';

const meta = {
  title: 'Cards/CardArc',
  component: CardArc,
  parameters: {
    layout: 'centered',
    docs: {
      page: makeDocPageWithInstall(
        'npx shadcn add deandradelucas/showcase-ui/card-arc'
      ),
    },
  },
  tags: ['autodocs'],
  argTypes: {
    animated: {
      control: 'boolean',
      description: 'Dispara o sweep automaticamente ao montar, sem precisar do mouse.',
    },
    edgeSensitivity: {
      control: { type: 'range', min: 0, max: 90, step: 5 },
    },
    glowIntensity: {
      control: { type: 'range', min: 0, max: 3, step: 0.1 },
    },
  },
} satisfies Meta<typeof CardArc>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    animated: true,
  },
  render: (args) => (
    <CardArc {...args}>
      <div className="flex h-64 w-80 items-center justify-center p-6 text-center text-sm text-white/70">
        Passe o mouse perto da borda pra ver o arco brilhar.
      </div>
    </CardArc>
  ),
};
