import type { Meta, StoryObj } from '@storybook/react';
import { fn, within, expect } from '@storybook/test';
import { Connect } from './index';

const meta = {
  title: 'Views/Connect',
  component: Connect,
  parameters: {
    layout: 'centered',
  },
  args: { 
    recentConnections: [],
    onConnect: fn() 
  },
} satisfies Meta<typeof Connect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
