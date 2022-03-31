import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpandPanelComponent } from '../app/components/expand-panel/expand-panel.component';
import { IconComponent } from '../app/components/icon/icon.component';
import { TypographyComponent } from '../app/components/typography/typography.component';
import { ExpandPanelExComponent } from '../app/examples/expand-panel-ex/expand-panel-ex.component';
import { TitleComponent } from '../app/components/title/title.component';
import { UnderlineDirective } from '../app/utilities/directives/underline.directive';
import { FormComponent } from '../app/components/form/form/form.component';
import { FormInputComponent } from '../app/components/form/form-input/form-input.component';
import { FormGroupComponent } from '../app/components/form/form-group/form-group.component';
import { FormRadioComponent } from '../app/components/form/form-radio/form-radio.component';
import { ColorDirective } from '../app/utilities/directives/color.directive';
import { SizeDirective } from '../app/utilities/directives/size.directive';
import { FormService } from '../app/components/form/services/form.service';
import { MessageService } from '../app/components/form/services/message.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'Expanding Panel',
  component: ExpandPanelExComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        IconComponent,
        TypographyComponent,
        ExpandPanelComponent,
        TitleComponent,

        FormComponent,
        FormInputComponent,
        FormGroupComponent,
        FormRadioComponent,
        FormRadioComponent,

        SizeDirective,
        ColorDirective,
        UnderlineDirective,
      ],
      providers: [FormService, MessageService],

      imports: [
        CommonModule,
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<ExpandPanelExComponent> = (
  args: ExpandPanelExComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const WithForm = Template.bind({});
WithForm.args = {
  hasForm: true,
  hideToggle : true
};
