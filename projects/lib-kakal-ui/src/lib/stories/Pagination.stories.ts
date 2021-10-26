import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from '../app/components/pagination/pagination.component';

export default {
  title: 'Pagination',
  component : PaginationComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, NgxPaginationModule],
    }),
  ],
} as Meta;

const Template: Story<any> = (args: any) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {

};
