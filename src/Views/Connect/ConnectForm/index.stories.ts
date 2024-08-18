import type { Meta, StoryObj } from '@storybook/react';
import { fn, within, expect } from '@storybook/test';
import { ConnectForm } from './index';

const meta = {
  title: 'Views/Connect/ConnectForm',
  component: ConnectForm,
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof ConnectForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { 
    onConnect: fn() 
  }
};
