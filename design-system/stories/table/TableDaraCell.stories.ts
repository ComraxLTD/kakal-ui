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
    cell: {
      name: 'kkl-data-cell',
      description: 'name tag of the data-cell component',
    },
    kklDataCell: {
      name: 'kklDataCell',
      type: { name: 'string', required: true },
      description:
        'instance of the KKLDataCellDirective used by kkl-table to render a table cell. return a context object',
    },

    item: {
      type: { name: 'string', required: true },
      name: 'item',
      description: 'instance of the item data',
      table: { type: { summary: 'T' } },
    },
    column: {
      type: { name: 'string', required: true },
      name: 'column',
      description: 'instance of HeaderCellModel<T>',
      table: { type: { summary: 'HeaderCellModel<T>' } },
    },

    key: {
      type: { name: 'string', required: true },
      name: 'key',
      description: 'the unique item key',
      table: {
        type: {
          summary: 'keyof T',
        },
      },
    },

    tableState: {
      type: { name: 'string', required: true },
      name: 'tableState',
      description: 'instance of TableState interface',
      table: {
        type: {
          summary: 'TableState',
        },
      },
    },

    group: {
      type: { name: 'string', required: true },
      name: 'group',
      description:
        'instance QuestionGroupModel. unique per row. needed when working with kkl-form-cell',
      table: {
        type: {
          summary: 'QuestionGroupModel<T>',
        },
      },
    },

    columnDef: {
      type: { name: 'string' },
      name: 'columnDef',
      description: '',
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
