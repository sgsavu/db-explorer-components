import type { Meta, StoryObj } from '@storybook/react';
import { fn, within, expect } from '@storybook/test';
import { Input } from './index';

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    clickOnRender: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('textbox');
    await expect(loginButton).toBeInTheDocument();
  },
};
