import { EventEmitter } from '@angular/core';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Observable, of } from 'rxjs';
import { TableDataSource } from '../../projects/kakal-ui/src/lib/table/models/table-datasource';
import { TableEvent } from '../../projects/kakal-ui/src/lib/table/models/table-event';
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
  argTypes: {
    row: {
      name: 'row',
      defaultValue: '',
      description: 'A TableRowModel instance',
      table: {
        type: { summary: 'TableRowModel<T>' },
      },
    },
    column: {
      name: 'column',
      description: 'A TableColumnModel instance',
      table: {
        type: { summary: 'TableColumnModel<T>' },
      },
    },

    startSlot: {
      name: 'startSlot',
      defaultValue: '',
      description: 'An ng-template. render custom action at the start',
      table: {
        type: { summary: 'TemplateRef<any>' },
      },
    },
    endSlot: {
      name: 'endSlot',
      defaultValue: '',
      description: 'An ng-template. render custom action at the end',
      table: {
        type: { summary: 'TemplateRef<any>' },
      },
    },
    edit: {
      name: 'edit',
      description:
      'Event that is emitted whenever an edit action clicked. ',
      table: {
        type: {
          summery: 'edit: EventEmitter<RowsState>',
        },
      },
    },
    delete: {
      name: 'delete',
      description:
      'Event that is emitted whenever a delete action clicked. ',
      table: {
        type: {
          summery: 'delete: EventEmitter<RowsState>',
        },
      },
      control : EventEmitter
    },
    cancel: {
      name: 'cancel',
      description:
      'Event that is emitted whenever a cancel action clicked. ',
      table: {
        type: {
          summery: 'cancel: EventEmitter<RowsState>',
        },
      },
    },
    save: {
      name: 'save',
      description:
      'Event that is emitted whenever a save action clicked. ',
      table: {
        type: {
          summery: 'save: EventEmitter<RowsState>',
        },
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

const tableDataSource: TableDataSource<Object> = new TableDataSource();

const events$: Observable<TableEvent> = tableDataSource.getEvents$();


tableActions.args = {
  row: new TableRowModel({}),
  column: new TableColumnModel({}),
};
