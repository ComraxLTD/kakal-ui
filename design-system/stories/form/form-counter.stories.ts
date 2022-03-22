import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { KKLFormCounterModule } from '../../projects/kakal-ui/src/lib/form/form-counter/form-counter.module';
import { FormCounterComponent } from '../../projects/kakal-ui/src/lib/form/form-counter/form-counter.component';

export default {
  title: 'Form/Counter',
  decorators: [
    moduleMetadata({
      imports: [KKLFormCounterModule],
    }),
  ],
  component: FormCounterComponent,
  argTypes: {
    control: {
      name: 'control',
      description: 'Angular FormControl .',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: 'new FormControl()' },
      },
      control: {
        type: 'object'
      }
    },
    icon: {
      name:'icon',
      description: 'Chose icon to display .',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'string'
      }
    },
    title: {
        name:'title',
        description: 'Chose title to display .',
        table: {
          type: { summary: 'string' },
        },
        control: {
          type: 'string'
        }
      },
},
} as Meta;

const Template: Story<FormCounterComponent> = (args: FormCounterComponent) => ({
  component: FormCounterComponent,
  props: args,
});

export const counter = Template.bind({});
counter.args = {
}

