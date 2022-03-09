import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { table } from 'console';
import {
  KKLTableModule,
  QuestionGroupModel,
} from '../../projects/kakal-ui/src/public-api';

import { FilterHeaderCellComponent } from '../../projects/kakal-ui/src/lib/table/components/header-cells/components/filter-header-cell/filter-header-cell.component';

export default {
  title: 'Table/Table Form Cell',
  decorators: [
    moduleMetadata({
      imports: [KKLTableModule],
      providers: [],
    }),
  ],
  component: FilterHeaderCellComponent,
  argTypes: {},
} as Meta;

const Template: Story<FilterHeaderCellComponent> = (
  args: FilterHeaderCellComponent
) => ({
  component: FilterHeaderCellComponent,
  props: args,
});

export const filterHeaderCell = Template.bind({});

filterHeaderCell.args = {};
