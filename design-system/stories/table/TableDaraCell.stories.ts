import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {
  KKLTableModule,
  TableDataCellComponent,
} from '../../projects/kakal-ui/src/public-api';

export default {
  title: 'Table/Table Data Cell',
  decorators: [
    moduleMetadata({
      imports: [KKLTableModule],
      providers: [],
    }),
  ],
  component: TableDataCellComponent,
  argTypes: {
    kklDataCell: {
      name: 'kklDataCell',
      type: { name: 'string', required: true },
      description:
        'instance of the KKLDataCellDirective used by kkl-table to render a table cell. return a context object',
    },

    tableState: {
      type: { name: 'string', required: true },
      name: 'tableState',
      description: 'instance of TableState interface',
    },
    item: {
      type: { name: 'string', required: true },
      name: 'item',
      description: 'instance of the item data',
    },
    column: {
      type: { name: 'string', required: true },
      name: 'column',
      description: '',
    },

    columnDef: {
      type: { name: 'string' },
      name: 'columnDef',
      description: '',
    },

    key: {
      type: { name: 'string', required: true },
      name: 'key',
      description: 'the unique item key',
    },

    group: {
      type: { name: 'string', required: true },
      name: 'group',
      description: 'instance QuestionGroupModel. unique per trow',
    },
  },
} as Meta;

const Template: Story<TableDataCellComponent> = (
  args: TableDataCellComponent
) => ({
  component: TableDataCellComponent,
  props: args,
});

export const tableDataCell = Template.bind({});

tableDataCell.args = {
  rowState: {},
};
