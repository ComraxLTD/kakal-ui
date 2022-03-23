import { EventEmitter } from '@angular/core';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HeaderCellModel } from '../../projects/kakal-ui/src/lib/table/components/header-cells/models/header-cell.model';
import {
  KKLTableActionsCellModule,
  TableActionCellComponent,
} from '../../projects/kakal-ui/src/public-api';

export default {
  title: 'Table/Table-Actions',
  decorators: [
    moduleMetadata({
      imports: [KKLTableActionsCellModule],
    }),
  ],
  component: TableActionCellComponent,
  argTypes: {
    cell: {
      name: 'kkl-action-cell',
      description: 'name tag of the action-cell component',
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
      description: 'Event that is emitted whenever an edit action clicked. ',
      table: {
        type: {
          summary: 'edit: EventEmitter<RowState>',
        },
      },
    },
    delete: {
      name: 'delete',
      description: 'Event that is emitted whenever a delete action clicked. ',
      table: {
        type: {
          summary: 'delete: EventEmitter<RowState>',
        },
      },
      control: EventEmitter,
    },
    cancel: {
      name: 'cancel',
      description: 'Event that is emitted whenever a cancel action clicked. ',
      table: {
        type: {
          summary: 'cancel: EventEmitter<RowState>',
        },
      },
    },
    save: {
      name: 'submit',
      description: 'Event that is emitted whenever a save action clicked. ',
      table: {
        type: { summary: 'submit: EventEmitter<RowState>' },
      },
    },
  },
} as Meta;

const Template: Story<TableActionCellComponent> = (
  args: TableActionCellComponent
) => ({
  component: TableActionCellComponent,
  props: args,
});

export const tableActions = Template.bind({});

tableActions.args = {
  column: new HeaderCellModel({ columnDef: 'actions' }),
};
