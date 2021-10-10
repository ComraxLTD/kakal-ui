import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormComponent } from 'src/app/components/form/form/form.component';
import { MaterialModule } from 'src/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from 'src/app/components/form/form-input/form-input.component';
import { FormGroupComponent } from 'src/app/components/form/form-group/form-group.component';
import { FormRadioComponent } from 'src/app/components/form/form-radio/form-radio.component';
import { FormService } from 'src/app/components/form/services/form.service';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { SizeDirective } from 'src/app/utilities/directives/size.directive';
import { ColorDirective } from 'src/app/utilities/directives/color.directive';
import { MessageService } from 'src/app/components/form/services/message.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormExComponent } from 'src/app/exemples/form-ex/form-ex.component';

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

export const Default = Template.bind({});
Default.args = {
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
    },
  ],
};
