import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {
  KKLTableActionsModule,
  TableActionsComponent,
} from '../../projects/kakal-ui/src/public-api';

export default {
  title: 'Table/Table-Actions',
  decorators: [
    moduleMetadata({
      imports: [KKLTableActionsModule],
    }),
  ],
  component: TableActionsComponent,
  argTyps: {},
} as Meta;

const Template: Story<TableActionsComponent> = (
  args: TableActionsComponent
) => ({
  component: TableActionsComponent,
  props: args,
});

export  const tableActions = Template.bind({});
