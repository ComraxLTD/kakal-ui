import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { KKLFormCurrencyModule } from '../../projects/kakal-ui/src/lib/form/form-currency/form-currency.module';
import { FormCurrencyComponent } from '../../projects/kakal-ui/src/lib/form/form-currency/form-currency.component';
import { FormControl } from '@angular/forms';

export default {
  title: 'Form/Currency',
  decorators: [
    moduleMetadata({
      imports: [KKLFormCurrencyModule],
    }),
  ],
  component: FormCurrencyComponent,
  argTypes: {
    control: {
      name: 'control',
      desmcription: 'Angular FormControl .',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: 'new FormControl()' },
      },
      control: {
        type: 'object'
      }
    },
    validations: {
      name: 'validations',
      description: 'A validator is a function that processes a FormControl or collection of controls and returns an error map or null. A null map means that validation has passed.',
      table: {
        type: { summary: 'ValidatorFn[]' },
      },
      control: {
        type: 'array'
      }
    }  },
} as Meta;

const Template: Story<FormCurrencyComponent> = (args: FormCurrencyComponent) => ({
  component: FormCurrencyComponent,
  props: args,
});

export const currency = Template.bind({});
currency.args = {
  control :new FormControl()
}

