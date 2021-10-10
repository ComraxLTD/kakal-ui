import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material/material.module';
import { StepperComponent } from 'src/app/components/stepper/stepper.component';
import { StepModel } from 'src/app/components/step/step.model';

import { SizeDirective } from 'src/app/utilities/directives/size.directive';
import { StepComponent } from 'src/app/components/step/step.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { ClassesDirective } from 'src/app/utilities/directives/classes.directive';
import { VariantDirective } from 'src/app/utilities/directives/variant.directive';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonDirective } from 'src/app/utilities/directives/button.directive';
import { ColorDirective } from 'src/app/utilities/directives/color.directive';
import { WizardExComponent } from 'src/app/exemples/wizard-ex/wizard-ex.component';

export default {
  title: 'Wizard',
  decorators: [
    moduleMetadata({
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      declarations: [
        StepperComponent,
        SizeDirective,
        StepComponent,
        IconComponent,
        VariantDirective,
        ClassesDirective,
        ButtonDirective,
        ColorDirective,
        TypographyComponent,
        WizardExComponent
      ],
      
      imports: [CommonModule, MaterialModule, FlexLayoutModule],
    }),
  ],
} as Meta;

const Template: Story<WizardExComponent> = (args: WizardExComponent) => ({
  props: args,
  template : '<app-wizard-ex></app-wizard-ex>'
});

export const Stepper = Template.bind({});

Stepper.args = {

};
