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

export default {
  title: 'FormInput',
  component: FormInputComponent,
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
      providers : [FormService, MessageService],
      imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
    }),
  ],
} as Meta;

const Template: Story<FormInputComponent> = (args: FormInputComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
