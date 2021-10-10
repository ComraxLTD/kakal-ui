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
import { StepperExComponent } from 'src/app/exemples/stepper-ex/stepper-ex.component';

export default {
  title: 'Stepper',
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
        StepperExComponent
      ],
      
      imports: [CommonModule, MaterialModule, FlexLayoutModule],
    }),
  ],
} as Meta;

const Template: Story<StepperExComponent> = (args: StepperExComponent) => ({
  props: args,
  template: `<app-stepper-ex></app-stepper-ex>`,
});

export const Stepper = Template.bind({});

Stepper.args = {

};

export const Wizard = Template.bind({});

Wizard.args = {
  steps: [
    new StepModel({
      label: 'פירוט הנכס',
      svgUrl: 'home',
      path: 'details',
      size: 3,
      divider: 5,
    }),
    new StepModel({
      label: 'תנועות',
      svgUrl: 'list',
      path: 'movements',
      size: 3,
      divider: 5,
    }),
    new StepModel({
      label: 'עסקאות',
      svgUrl: 'transactions',
      path: 'transactions',
      size: 3,
      divider: 5,
    }),
    new StepModel({
      label: 'תתי חלקה',
      svgUrl: 'building',
      path: 'subdivision',
      size: 3,
      divider: 5,
    }),
    new StepModel({
      label: 'פרצליציה',
      svgUrl: 'add',
      path: 'parcellation',
      size: 3,
    }),
  ],
  direction : 'column'
};
