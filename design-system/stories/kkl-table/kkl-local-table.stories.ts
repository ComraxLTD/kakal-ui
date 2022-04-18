// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { LocalTableComponent } from '../../projects/kakal-ui/src/public-api';


export default {
  title: 'Local',
  decorators: [
    moduleMetadata({
      imports: [LocalTableComponent],
    }),
  ],
  component: LocalTableComponent,
  argTypes: {
    dataSource: {
      name: 'dataSource',
      type: { name: 'string', required: true },

      description: 'A Data array',
      table: {
        type: { summary: '[]T' },
      },
    },
    columns: {
      name: 'columns',
      type: { name: 'string', required: true },

      description: 'Handle the layout of the table',
      table: {
        type: { summary: 'QuestionTableModel[]' },
      },
    },
    rowActions: {
      name: 'rowActions',
      type: { name: 'string', required: false },

      description: 'Handle the column of actions',
      table: {
        type: { summary: 'TableActionsModel[]' },
      },
    },
    paging: {
      name: 'paging',
      type: { name: 'string', required: false },
      defaultValue: 'true',

      description: 'Specify if the table has paging ',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    newRowAction: {
      name: 'newRowAction',
      type: { name: 'string', required: false },
      defaultValue: '',

      description: 'Specify if the table has a new row button that addes a row inline ',
      table: {
        type: { summary: {label: 'string'} },
      },
    },
    colsTemplate: {
      name: 'colsTemplate',
      type: { name: 'string', required: false },
      defaultValue: '',

      description: 'Specify the columns templates ',
      table: {
        type: { summary: {cellTemplate: 'template'} },
      },
    },
    expandTemplate: {
      name: 'expandTemplate',
      type: { name: 'string', required: false },
      defaultValue: '',

      description: 'Specify the expand template ',
      table: {
        type: { summary: 'template' },
      },
    },


    actionClicked: {
      name: 'actionClicked',
      description: 'Event that is emitted whenever the user is presses a button if its not an inline action. ',
      table: {
        type: {
          summary: 'EventEmitter<{type: string, row: T}>',
        },
      },
    },
    deleteRow: {
      name: 'deleteRow',
      description:
        'Event that is emitted whenever an option from the list is selected. ',
      table: {
        type: {
          summary: 'EventEmitter<FormChangeEvent>',
        },
      },
    },
    editRow: {
      name: 'editRow',
      description:
        'Event that is emitted whenever an option from the list is selected. ',
      table: {
        type: {
          summary: 'EventEmitter<FormChangeEvent>',
        },
      },
    },
  },
} as Meta;

const Template: Story<LocalTableComponent> = (
  args: LocalTableComponent
) => ({
  component: LocalTableComponent,
  props: args,
});


