import { EventEmitter } from '@angular/core';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { of } from 'rxjs';
import {
  KKLTableModule,
  TableComponent,
  TableDataSource,
  TableStateService,
} from '../../projects/kakal-ui/src/public-api';

export default {
  title: 'Table/Table',
  decorators: [
    moduleMetadata({
      imports: [KKLTableModule],
      providers: [TableStateService, TableDataSource],
    }),
  ],
  component: TableComponent,
  argTypes: {
    data$: {
      name: 'data$',
      type: { name: 'string', required: true },

      defaultValue: '',
      description: 'A Data array',
      table: {
        type: { summary: '[]T' },
      },
    },
    columns$: {
      name: 'columns$',
      type: { name: 'string', required: true },

      description: 'Handle the layout of the table',
      table: {
        type: { summary: 'Observable< HeaderCellModel<T>[]>' },
      },
    },

    kklTable: {
      name: 'kkl-table',
      type: { name: 'string', required: true },
      description:
        'instance of the KKLTableDirective used by kkl-table to validate inputs',
    },
    kklPagination: {
      name: 'kklPagination',
      description:
        'instance of the KKLPaginationDirective used by kkl-table to able pagination',
    },

    hasActions: {
      name: 'hasActions',
      description: 'if the table has actions',
      table: {
        type: { summary: 'boolean' },
      },
    },

    // @Output
    sortChange: {
      name: 'sortChange',
      description: 'Event that is emitted whenever an sort button is clicked. ',
      table: {
        type: {
          summery: 'sortChange: EventEmitter<ColumnSortOption<T>',
        },
      },
    },
  },
} as Meta;

const Template: Story<TableComponent> = (args: TableComponent) => ({
  component: TableComponent,
  props: args,
});

export const table = Template.bind({});

table.args = {
  data$: of([]),
  columns$: of([]),
};
