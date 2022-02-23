import { moduleMetadata } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormDateComponent} from '../../projects/kakal-ui/src/lib/form/form-date/form-date.component';
import { FormDateModule } from '../../projects/kakal-ui/src/lib/form/form-date/form-date.module';
import { QuestionDateModel } from '../../projects/kakal-ui/src/lib/form/form-date/question-date.model';

export default {
  title: 'form/Date',
  decorators: [
    moduleMetadata({
      imports: [FormDateModule],
    }),
  ],
  component: FormDateComponent,
  argTypes: {

  },
} as Meta;

const Template: Story<FormDateComponent> = (args: FormDateComponent) => ({
  component: FormDateComponent,
  props: args,
});

export const date = Template.bind({});
date.args = {
    question: new QuestionDateModel({
        key:'date',
    }),
  control:new FormControl(),
}

export const rangeDate = Template.bind({});

rangeDate.args = {
    question: new QuestionDateModel({
        key:'date',
        range:true
    }),
  control:new FormControl(),
}