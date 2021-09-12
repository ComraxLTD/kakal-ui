import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'Table',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<any> = (args: any) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {

};
