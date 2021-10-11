import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { StepperComponent } from '../app/components/stepper/stepper.component';

import { SizeDirective } from '../app/utilities/directives/size.directive';
import { StepComponent } from '../app/components/step/step.component';
import { IconComponent } from '../app/components/icon/icon.component';
import { ClassesDirective } from '../app/utilities/directives/classes.directive';
import { VariantDirective } from '../app/utilities/directives/variant.directive';
import { TypographyComponent } from '../app/components/typography/typography.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonDirective } from '../app/utilities/directives/button.directive';
import { ColorDirective } from '../app/utilities/directives/color.directive';
import { StepperExComponent } from '../app/exemples/stepper-ex/stepper-ex.component';
import { CardStepComponent } from '../app/components/cards/card-step/card-step.component';
import { CardStepModel } from '../app/components/cards/card-step/card-step.model';
import { CardWizardComponent } from '../app/components/cards/card-wizard/card-wizard.component';

export default {
  title: 'Stepper',
  component: StepperExComponent,
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
        CardStepComponent,
        CardWizardComponent,
        StepperExComponent,
      ],

      imports: [CommonModule, MaterialModule, FlexLayoutModule],
    }),
  ],
} as Meta;

const Template: Story<StepperExComponent> = (args: StepperExComponent) => ({
  props: args,
});

export const Stepper = Template.bind({});

Stepper.args = {
  steps: [
    new CardStepModel({
      label: 'פירוט הנכס',
      svgUrl: 'home',
      path: 'details',
      isActive: true,
      size: 3,
      divider: 5,
    }),
    new CardStepModel({
      label: 'תנועות',
      svgUrl: 'list',
      path: 'movements',
      size: 3,
      divider: 5,
    }),
    new CardStepModel({
      label: 'עסקאות',
      svgUrl: 'transactions',
      path: 'transactions',
      size: 3,
      divider: 5,
    }),
    new CardStepModel({
      label: 'תתי חלקה',
      svgUrl: 'building',
      path: 'subdivision',
      size: 3,
      divider: 5,
    }),
    new CardStepModel({
      label: 'פרצליציה',
      svgUrl: 'add',
      path: 'parcellation',
      size: 3,
    }),
  ],

  direction: 'row',
};

export const Wizard = Template.bind({});

Wizard.args = {
  steps: [
    new CardStepModel({
      label: 'פירוט הנכס',
      svgUrl: 'home',
      path: 'details',
      size: 3,
      variant : 'square',
      type : 'wizard'
    }),
    new CardStepModel({
      label: 'תנועות',
      svgUrl: 'list',
      path: 'movements',
      size: 3,
      isActive: true,
      variant : 'square',
      type : 'wizard'
    }),
    new CardStepModel({
      label: 'עסקאות',
      svgUrl: 'transactions',
      path: 'transactions',
      size: 3,
      variant : 'square',
      type : 'wizard'
    }),
    new CardStepModel({
      label: 'תתי חלקה',
      svgUrl: 'building',
      path: 'subdivision',
      size: 3,
      variant : 'square',
      type : 'wizard'
    }),
    new CardStepModel({
      label: 'פרצליציה',
      svgUrl: 'add',
      path: 'parcellation',
      size: 3,
      variant : 'square',
      type : 'wizard'
    }),
  ],

  direction: 'column',
};
