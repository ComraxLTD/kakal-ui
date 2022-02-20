import { moduleMetadata } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormInputModule } from '../../projects/kakal-ui/src/lib/form/form-input/form-input.module';
import { FormInputComponent } from '../../projects/kakal-ui/src/lib/form/form-input/form-input.component';
import { QuestionTextModel } from '../../projects/kakal-ui/src/lib/form/models/question-text.model';
import { QuestionNumberModel } from '../../projects/kakal-ui/src/lib/form/models/question-number.model';
import { QuestionSumModel } from '../../projects/kakal-ui/src/lib/form/models/question-sum.model';
import { QuestionTextareaModel } from '../../projects/kakal-ui/src/lib/form/models/question-textarea.model';

export default {
  title: 'form/Input',
  decorators: [
    moduleMetadata({
      imports: [FormInputModule],
    }),
  ],
  component: FormInputComponent,
  argTypes: {

  },
} as Meta;

const Template: Story<FormInputComponent> = (args: FormInputComponent) => ({
  component: FormInputComponent,
  props: args,
});

export const TextInput = Template.bind({});
TextInput.args = {
  question: new QuestionTextModel({
    key:'text',
    label:'enter text here'
  }),
  control:new FormControl(),
}

export const Number = Template.bind({});
Number.args = {
  question: new QuestionNumberModel({
    key:'number',
  }),
  control:new FormControl(),
}

export const Sum = Template.bind({});
Sum.args = {
  question: new QuestionSumModel({
    key:'number',
  }),
  control:new FormControl(),
}

export const TextArea = Template.bind({});
TextArea.args = {
  question : new QuestionTextareaModel({
    key:'textArea',
  }),
  control:new FormControl(),
}