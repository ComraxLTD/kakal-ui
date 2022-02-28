import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TableRowModel } from '../../projects/kakal-ui/src/lib/table/models/table-row.model';
import {
  KKLTableActionsModule,
  TableActionsComponent,
  TableColumnModel,
} from '../../projects/kakal-ui/src/public-api';

export default {
  title: 'Table/Table-Actions',
  decorators: [
    moduleMetadata({
      imports: [KKLTableActionsModule],
    }),
  ],
  component: TableActionsComponent,
  argTyps: {
    row: {
      name: 'row',
      type: { name: 'object', required: true },
      defaultValue: '',
      description: 'A TableRowModel instance',
      table: {
        type: { summary: 'TableRowModel<T>' },
      },
      control: {
        type: TableRowModel,
      },
    },
    column: {
      name: 'column',
      type: { name: 'object', required: true },
      defaultValue: '',
      description: 'A TableColumnModel instance',
      table: {
        type: { summary: 'TableColumnModel<T>' },
      },
      control: {
        type: TableColumnModel,
      },
    },
    hasDelete: {
      name: 'hasDelete',
      type: { name: 'boolean', required: false },
      defaultValue: '',
      description: 'Whether the action-table has a delete action.',
      table: {
        type: { summary: 'boolean' },
      },
      control: {
        type: TableRowModel,
      },
    },
  },
} as Meta;

const Template: Story<TableActionsComponent> = (
  args: TableActionsComponent
) => ({
  component: TableActionsComponent,
  props: args,
});

export const tableActions = Template.bind({});

tableActions.args = {
  row: new TableRowModel({}),
  hasDelete: true,
};
