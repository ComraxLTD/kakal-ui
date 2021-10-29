import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { LoginExComponent } from '../../app/examples/login-ex/login-ex.component';
import { LoginDashboardComponent } from '../../app/screens/login/components/login-dashboard/login-dashboard.component';
import { IconComponent } from '../../app/components/icon/icon.component';
import { LoginFormComponent } from '../../app/screens/login/components/login-form/login-form.component';
import { SizeDirective } from '../../app/utilities/directives/size.directive';
import { MaterialModule } from '../../material/material.module';
import { TypographyComponent } from '../../app/components/typography/typography.component';
import { FormRadioComponent } from '../../app/components/form/form-radio/form-radio.component';
import { FormGroupComponent } from '../../app/components/form/form-group/form-group.component';
import { FormInputComponent } from '../../app/components/form/form-input/form-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../app/screens/login/login.service';
import { FormService } from '../../app/components/form/services/form.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionRadio } from '../../app/components/form/models/question-radio.model';


export default {
  title: 'Screen-Login',
  component: LoginExComponent,
  decorators: [
    moduleMetadata({
      declarations: [LoginDashboardComponent, IconComponent, LoginFormComponent, SizeDirective,
        TypographyComponent, FormRadioComponent, FormInputComponent, FormGroupComponent],
      providers: [FormService, LoginService],
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

const Template: Story<LoginExComponent> = (args: LoginExComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {


};


