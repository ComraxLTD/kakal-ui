import { CardStatusComponent } from './../app/components/cards/card-status/card-status.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CardStepModel } from '../app/components/cards/card-step/card-step.model';

import { StepperExComponent } from '../app/examples/stepper-ex/stepper-ex.component';

import { StepperComponent } from '../app/components/stepper/stepper.component';
import { IconComponent } from '../app/components/icon/icon.component';
import { TypographyComponent } from '../app/components/typography/typography.component';
import { CardStepComponent } from '../app/components/cards/card-step/card-step.component';
import { CardWizardComponent } from '../app/components/cards/card-wizard/card-wizard.component';

import { ButtonDirective } from '../app/utilities/directives/button.directive';
import { VariantDirective } from '../app/utilities/directives/variant.directive';
import { ColorDirective } from '../app/utilities/directives/color.directive';
import { SizeDirective } from '../app/utilities/directives/size.directive';

export default {
  title: 'Stepper',
  component: StepperExComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        IconComponent,
        TypographyComponent,

        StepperExComponent,

        StepperComponent,
        CardStepComponent,
        CardWizardComponent,
        CardStatusComponent,

        SizeDirective,
        VariantDirective,
        ButtonDirective,
        ColorDirective,
      ],

      imports: [CommonModule, MaterialModule],
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

export const Navigation = Template.bind({});

Navigation.args = {
  steps: [
    new CardStepModel({
      label: 'פירוט הנכס',
      svgUrl: 'home',
      path: 'details',
      isActive: true,
      size: 3,
      value: 4,
      variant: 'square',
      type: 'step',
    }),
    new CardStepModel({
      label: 'תנועות',
      svgUrl: 'list',
      path: 'movements',
      size: 3,
      value: 4,
      variant: 'square',
      type: 'step',
    }),
    new CardStepModel({
      label: 'עסקאות',
      svgUrl: 'transactions',
      path: 'transactions',
      size: 3,
      value: 4,
      variant: 'square',
      type: 'step',
    }),
    new CardStepModel({
      label: 'תתי חלקה',
      svgUrl: 'building',
      path: 'subdivision',
      size: 3,
      value: 4,
      variant: 'square',
      type: 'step',
    }),
    new CardStepModel({
      label: 'פרצליציה',
      svgUrl: 'add',
      path: 'parcellation',
      size: 3,
      value: 4,
      variant: 'square',
      type: 'step',
    }),
  ],

  direction: 'row',
};
export const Status = Template.bind({});

Status.args = {
  steps: [
    new CardStepModel({
      label: 'איזור תנועות',
      svgUrl: 'reload',
      value: 6,
      size: 6,
      type: 'status',
    }),
    new CardStepModel({
      label: 'הערת אזהרה',
      svgUrl: 'reload',
      value: 6,
      size: 6,
      type: 'status',
    }),
    new CardStepModel({
      label: 'דיווח לרשות המיסים',
      svgUrl: 'reload',
      value: 6,
      size: 6,
      type: 'status',
    }),
    new CardStepModel({
      label: 'העברת חזקה',
      svgUrl: 'reload',
      value: 6,
      size: 6,
      type: 'status',
    }),
    new CardStepModel({
      label: 'רישום בטאבו',
      svgUrl: 'reload',
      value: 6,
      size: 6,
      type: 'status',
    }),
    new CardStepModel({
      label: 'עדכון ספר נכסים',
      svgUrl: 'reload',
      value: 6,
      size: 6,
      type: 'status',
    }),
  ],
  direction: 'row',
  stepWidth: 3,
};

export const Wizard = Template.bind({});

Wizard.args = {
  steps: [
    new CardStepModel({
      label: 'פירוט הנכס',
      svgUrl: 'home',
      path: 'details',
      size: 3,
      variant: 'square',
      type: 'wizard',
    }),
    new CardStepModel({
      label: 'תנועות',
      svgUrl: 'list',
      path: 'movements',
      size: 3,
      isActive: true,
      variant: 'square',
      type: 'wizard',
    }),
    new CardStepModel({
      label: 'עסקאות',
      svgUrl: 'transactions',
      path: 'transactions',
      size: 3,
      variant: 'square',
      type: 'wizard',
    }),
    new CardStepModel({
      label: 'תתי חלקה',
      svgUrl: 'building',
      path: 'subdivision',
      size: 3,
      variant: 'square',
      type: 'wizard',
    }),
    new CardStepModel({
      label: 'פרצליציה',
      svgUrl: 'add',
      path: 'parcellation',
      size: 3,
      variant: 'square',
      type: 'wizard',
    }),
  ],

  direction: 'column',
};
