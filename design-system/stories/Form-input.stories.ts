import { moduleMetadata } from '@storybook/angular';
import { FormInputComponent } from '../projects/kakal-ui/src/lib/form/form-input/form-input.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { QuestionBaseModel } from 'projects/kakal-ui/src/lib/form/models/question.model';
import {
  Appearance,
  ControlType,
  GridProps,
} from '../projects/kakal-ui/src/lib/form/models/question.model';
import { QuestionBase } from '../projects/kakal-ui/src/lib/form/services/form.service';

export default {
  title: 'Form/Input',
  decorators: [
    moduleMetadata({
      imports: [FormControl, FormsModule, ReactiveFormsModule],
    }),
  ],
  component: FormInputComponent,
  argTypes: {},
} as Meta;

const Template: Story<FormInputComponent> = (args: FormInputComponent) => ({
  component: FormInputComponent,
  props: args,
});

export const TextInput = Template.bind({});
TextInput.args={
     
}
