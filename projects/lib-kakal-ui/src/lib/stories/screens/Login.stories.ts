import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'Screen - Login',
  component: () => {},
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<() => {}> = (args: () => {}) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {

};
