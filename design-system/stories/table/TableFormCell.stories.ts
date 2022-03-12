import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { table } from 'console';
import {
  KKLTableModule,
  QuestionGroupModel,
  FormCellComponent,
} from '../../projects/kakal-ui/src/public-api';

export default {
  title: 'Table/Table Form Cell',
  decorators: [
    moduleMetadata({
      imports: [KKLTableModule],
      providers: [],
    }),
  ],
  component: FormCellComponent,
  argTypes: {
    cell: {
      name: 'kkl-form-cell',
      type: { name: 'string', required: true },
      description: 'name tag of the form-cell component',
    },
    group: {
      name: 'group',
      type: { name: 'symbol', required: true },
      table: {
        type: {
          summary: 'QuestionGroupModel<T>',
        },
      },
      control : QuestionGroupModel
    },
    columnDef: {
      name: 'columnDef',
      table: {
        summery: 'string',
      },
    },
    template: {
      name: 'template',
      description: 'name tag of the form-cell component',
      table: {
        type: { summary: 'TemplateRef<any>' },
      },
    },
  },
} as Meta;

const Template: Story<FormCellComponent> = (
  args: FormCellComponent
) => ({
  component: TableFormCellComponent,
  props: args,
});

export const tableFormCell = Template.bind({});

tableFormCell.args = {};
