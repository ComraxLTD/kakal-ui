import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "../../app/components/navigation/navbar/navbar.component";

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
