import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TableList } from './index';

const meta = {
  title: 'TableList',
  component: TableList,
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof TableList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { 
    onTableAction: fn(),
    tables: ['Table1', 'Table2', 'Table3']
  }
};
