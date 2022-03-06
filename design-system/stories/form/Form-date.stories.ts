import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormDateComponent} from '../../projects/kakal-ui/src/lib/form/form-date/form-date.component';
import { KKLFormDateModule } from '../../projects/kakal-ui/src/lib/form/form-date/form-date.module';

export default {
  title: 'Form/Date',
  decorators: [
    moduleMetadata({
      imports: [KKLFormDateModule],
    }),
  ],
  component: FormDateComponent,
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
    key: {
      name: 'key',
      description: 'Name of input .',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'myDate' },
      },
      control: {
        type: 'text'
      }
    },
    range: {
      name: 'range',
      description: 'chose when use range date .',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean'
      }
    },
    placeholder: {
      name: 'placeholder',
      description: 'placeholder of input .',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'pick date' },
      },
      control: {
        type: 'text'
      }
    },
    minDate: {
      name: 'minDate',
      description: 'set minimum date to chose .',
      table: {
        type: { summary: 'date' },
      },
      control: {
        type: 'date'
      }
    },
    maxDate: {
      name: 'maxDate',
      description: 'set maximum date to chose .',
      table: {
        type: { summary: 'date'},        
      },
      control: {
        type: 'date'
      }
    },
    appearance: {
      name: 'appearance',
      description: 'The mat-form-field supports 4 different appearance variants',
      table: {
        type: { summary: 'string' ,detail:"'legacy' | 'standard' | 'fill' | 'outline'"},
        defaultValue: { summary: 'none' },
      },
      control: {
        type: 'text'
      }
    },
    dateEvent: {
      name: '@Output dateEvent',
      description: 'emit value of date .',
      table: {
        type: { summary: 'EventEmitter' },
      },
      control: {
        type: 'object'
      }
    },

  },
} as Meta;

const Template: Story<FormDateComponent> = (args: FormDateComponent) => ({
  component: FormDateComponent,
  props: args,
});

export const date = Template.bind({});
date.args = {
}

