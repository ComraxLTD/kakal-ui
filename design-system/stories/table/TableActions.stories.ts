import { EventEmitter } from '@angular/core';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Observable, of } from 'rxjs';
import { TableDataSource } from '../../projects/kakal-ui/src/lib/table/models/table-datasource';
import { TableEvent } from '../../projects/kakal-ui/src/lib/table/models/table-events';
import { TableRowModel } from '../../projects/kakal-ui/src/lib/table/models/table-row.model';
import { ActionStateModel } from '../../projects/kakal-ui/src/lib/table/table-actions/table-actions.model';
import {
  ButtonActionState,
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

    hasDelete: {
      name: 'hasDelete',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Whether the action-table has a delete action.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    hasEdit: {
      name: 'hasEdit',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description:
        'Whether the action-table has an edit action. Automatically get save and cancel action.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    events$: {
      name: 'events$',
      defaultValue: '',
      description:
        'An Observable of TableEvents array. follow the current TableEvent. Get from TableDataSource instance from getEvents$() method',
      table: {
        type: { summary: 'Observable<TableEvents>' },
      },
    },
    buttonsActionState: {
      name: 'buttonsActionState',
      defaultValue: '',
      description:
        'An Object to handle complicated button logic of disable and show state',
      table: {
        type: { summary: 'ButtonActionState' },
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
          summery: 'edit: EventEmitter<void>',
        },
      },
    },
    delete: {
      name: 'delete',
      description:
      'Event that is emitted whenever a delete action clicked. ',
      table: {
        type: {
          summery: 'delete: EventEmitter<void>',
        },
      },
    },
    cancel: {
      name: 'cancel',
      description:
      'Event that is emitted whenever a cancel action clicked. ',
      table: {
        type: {
          summery: 'cancel: EventEmitter<TableEvent>',
        },
      },
    },
    save: {
      name: 'save',
      description:
      'Event that is emitted whenever a save action clicked. ',
      table: {
        type: {
          summery: 'save: EventEmitter<TableEvent>',
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

const delete$ = new ActionStateModel({ event: 'delete' });
const buttonsActionState: ButtonActionState = { delete$: delete$.getState$() };

tableActions.args = {
  row: new TableRowModel({}),
  column: new TableColumnModel({}),
  hasDelete: true,
  hasEdit: true,
  events$: events$,
  buttonsActionState: buttonsActionState,
};
