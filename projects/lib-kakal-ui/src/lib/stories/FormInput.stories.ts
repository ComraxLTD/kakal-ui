import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../app/components/form/form/form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputComponent } from '../app/components/form/form-input/form-input.component';
import { FormGroupComponent } from '../app/components/form/form-group/form-group.component';
import { FormRadioComponent } from '../app/components/form/form-radio/form-radio.component';
import { FormService } from '../app/components/form/services/form.service';
import { IconComponent } from '../app/components/icon/icon.component';
import { SizeDirective } from '../app/utilities/directives/size.directive';
import { ColorDirective } from '../app/utilities/directives/color.directive';
import { MessageService } from '../app/components/form/services/message.service';
import { InputExComponent } from '../app/examples/input-ex/input-ex.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormAutocompleteComponent } from '../app/components/form/form-autocomplete/form-autocomplete.component';

export default {
  title: 'FormInput',
  component: InputExComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        FormComponent,
        FormInputComponent,
        FormGroupComponent,
        FormRadioComponent,
        FormAutocompleteComponent,
        IconComponent,
        SizeDirective,
        ColorDirective,
      ],
      providers: [FormService, MessageService],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<InputExComponent> = (args: InputExComponent) => ({
  props: args,
});

export const Select = Template.bind({});
Select.args = {
  questions: [
    {
      controlType: 'select',
      key: 'record',
      label: 'סוג רישום',
      options: [
        { label: 'גוש חלקה', value: 'שם נוסף' },
        { label: 'דף ספר', value: 'עוד לקוח' },
        { label: 'מגרש', value: 'לקוח מספר שלוש' },
        { label: 'גוש שומא', value: 'לקוח מספר ארבע' },
      ],
      onSelectChange: () => {},
    },
  ],
};

export const SelectMulti = Template.bind({});
SelectMulti.args = {
  questions: [
    {
      controlType: 'select',
      multi: true,
      key: 'record',
      label: 'סוג רישום',
      options: [
        { label: 'גוש חלקה', value: 'שם נוסף' },
        { label: 'דף ספר', value: 'עוד לקוח' },
        { label: 'מגרש', value: 'לקוח מספר שלוש' },
        { label: 'גוש שומא', value: 'לקוח מספר ארבע' },
      ],
      onSelectChange: () => {},
    },
  ],
};

export const Text = Template.bind({});
Text.args = {
  questions: [
    {
      controlType: 'text',
      key: 'value',
      label: 'הכנס טקסט',
      validations: [Validators.required],
    },
  ],
};
export const Textarea = Template.bind({});
Textarea.args = {
  questions: [
    {
      controlType: 'textarea',
      key: 'value',
      label: 'הכנס טקסט',
      validations: [Validators.required],
      gridProps: {
        rows: 5,
      },
    },
  ],
};
