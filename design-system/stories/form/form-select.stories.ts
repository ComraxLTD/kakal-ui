import { moduleMetadata } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { Story, Meta } from '@storybook/angular/types-6-0';
import { QuestionCurrencyModel } from '../../projects/kakal-ui/src/lib/form/form-currency/question-currency.model';
import { FormSelectModule } from '../../projects/kakal-ui/src/lib/form/form-select/form-select.module';
import { FormSelectComponent } from '../../projects/kakal-ui/src/lib/form/form-select/form-select.component';

export default {
  title: 'form',
  decorators: [
    moduleMetadata({
      imports: [FormSelectModule],
    }),
  ],
  component: FormSelectComponent,
  argTypes: {

  },
} as Meta;

const Template: Story<FormSelectComponent> = (args: FormSelectComponent) => ({
  component: FormSelectComponent,
  props: args,
});

export const select = Template.bind({});
select.args = {
}

