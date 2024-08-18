import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Table } from './index';

const meta = {
  title: 'Table',
  component: Table,
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { 
    onRecordAction: fn(),
    onTitleChange: fn(),
    tableName: "Table1",
    tablePrimaryKeys: ['id'],
    tableRecords: [{
      id: '123',
      name: 'john',
      dob: '02/02/1900'
    }]
  }
};
