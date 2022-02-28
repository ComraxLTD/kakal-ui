// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../../projects/kakal-ui/src/lib/button/button.component';
import { KKLButtonModule } from '../../projects/kakal-ui/src/lib/button/button.module';

export default {
  title: 'Assets/Buttons',
  component: ButtonComponent,
  argTypes: {
    label: { control: 'text' },
    // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [KKLButtonModule]
    })
  ]
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: 'secondary'
};
