import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../app/components/form/form/form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from '../app/components/form/form-input/form-input.component';
import { FormGroupComponent } from '../app/components/form/form-group/form-group.component';
import { FormRadioComponent } from '../app/components/form/form-radio/form-radio.component';
import {
  FormService,
  Question,
} from '../app/components/form/services/form.service';
import { IconComponent } from '../app/components/icon/icon.component';
import { SizeDirective } from '../app/utilities/directives/size.directive';
import { ColorDirective } from '../app/utilities/directives/color.directive';
import { MessageService } from '../app/components/form/services/message.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormExComponent } from '../app/examples/form-ex/form-ex.component';

export default {
  title: 'Form',
  component: FormExComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        FormComponent,
        FormInputComponent,
        FormGroupComponent,
        FormRadioComponent,
        FormRadioComponent,
        IconComponent,
        SizeDirective,
        ColorDirective,
      ],
      providers: [FormService, MessageService],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<FormExComponent> = (args: FormExComponent) => ({
  props: args,
});

const questions: Question[] = [
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
    gridProps: {
      cols: 1,
    },
  },
  {
    controlType: 'text',
    key: 'block',
    label: 'גוש',
  },
  {
    controlType: 'text',
    key: 'section',
    label: 'חלקה',
  },
  {
    controlType: 'text',
    key: 'subSection',
    label: 'תת חלקה',
    gridProps: {
      fullWidth: true,
    },
  },
];

export const Default = Template.bind({});
Default.args = {
  questions,
};
export const Grid = Template.bind({});
Grid.args = {
  questions,
  options: {
    gridProps: {
      cols: 2,
    },
  },
};
