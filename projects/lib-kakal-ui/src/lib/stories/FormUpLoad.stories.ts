import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormUploadComponent } from '../app/components/form/form-upload/form-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormUploadExComponent } from '../app/examples/formupload-ex/formupload-ex.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'FormUpLoad',
  component: FormUploadExComponent,
  decorators: [
    moduleMetadata({
      declarations: [FormUploadComponent],
      imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<FormUploadExComponent> = (
  args: FormUploadExComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  questions: [
    {
      key: 'file',
      label: ' לחץ להעלאת קובץ',
      icon: 'home',
    },
  ],
};
