import type { Meta, StoryObj } from '@storybook/react';
import { fn, within, expect } from '@storybook/test';
import { RecentConnections } from './index';

const meta = {
  title: 'Views/Connect/RecentConnections',
  component: RecentConnections,
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof RecentConnections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { 
    recentConnections: [],
    onConnect: fn() 
  }
};
