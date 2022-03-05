import { EventEmitter } from '@angular/core';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { of } from 'rxjs';
import {
  KKLTableModule,
  TableComponent,
} from '../../projects/kakal-ui/src/public-api';

export default {
  title: 'Table/Table',
  decorators: [
    moduleMetadata({
      imports: [KKLTableModule],
    }),
  ],
  component: TableComponent,
  argTypes: {
    data$: {
      name: 'data$',
      defaultValue: '',
      description: 'A Data array',
      table: {
        type: { summary: '[]T' },
      },
    },
    columns$: {
      name: 'columns$',
      description: 'Handle the layout of the table',
      table: {
        type: { summary: 'Observable< TableColumnModel<T>[]>' },
      },
    },

    formTemplate: {
      name: 'formTemplate',
      defaultValue: '',
      description: 'An ng-template. render custom action at the start',
      table: {
        type: { summary: 'TemplateRef<any>' },
      },
    },
    cellTemplate: {
      name: 'cellTemplate',
      defaultValue: '',
      description: 'An ng-template. render custom action at the end',
      table: {
        type: { summary: 'TemplateRef<any>' },
      },
    },

    //  @Output() pageChange: EventEmitter<{
    //  @Output() filter: EventEmitter<ColumnFilterOption<
    //  @Output() filterAutocomplete: EventEmitter<ColumnFilterOption<
    //  @Output() selected: EventEmitter<Observable<
    //  @Output() expand: EventEmitter<any>
    //  @Output() rowClicked: EventEmitter<T>

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
    delete: {
      name: 'delete',
      description: 'Event that is emitted whenever a delete action clicked. ',
      table: {
        type: {
          summery: 'delete: EventEmitter<RowState>',
        },
      },
      control: EventEmitter,
    },
    cancel: {
      name: 'cancel',
      description: 'Event that is emitted whenever a cancel action clicked. ',
      table: {
        type: {
          summery: 'cancel: EventEmitter<RowState>',
        },
      },
    },
    save: {
      name: 'save',
      description: 'Event that is emitted whenever a save action clicked. ',
      table: {
        type: {
          summery: 'save: EventEmitter<RowState>',
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
