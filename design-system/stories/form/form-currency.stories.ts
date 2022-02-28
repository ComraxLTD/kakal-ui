import { moduleMetadata } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { Story, Meta } from '@storybook/angular/types-6-0';
import { KKLFormCurrencyModule } from '../../projects/kakal-ui/src/lib/form/form-currency/form-currency.module';
import { FormCurrencyComponent } from '../../projects/kakal-ui/src/lib/form/form-currency/form-currency.component';
import { QuestionCurrencyModel } from '../../projects/kakal-ui/src/lib/form/form-currency/question-currency.model';

export default {
  title: 'Form',
  decorators: [
    moduleMetadata({
      imports: [KKLFormCurrencyModule],
    }),
  ],
  component: FormCurrencyComponent,
  argTypes: {

  },
} as Meta;

const Template: Story<FormCurrencyComponent> = (args: FormCurrencyComponent) => ({
  component: FormCurrencyComponent,
  props: args,
});

export const currency = Template.bind({});
currency.args = {
    question: new QuestionCurrencyModel({
        key:'currency',
    }),
  control:new FormControl(),
}

