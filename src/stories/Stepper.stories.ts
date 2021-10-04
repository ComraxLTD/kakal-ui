import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material/material.module';
import { StepperComponent } from 'src/app/components/stepper/stepper.component';
import { StepModel, StepperDirection, StepType, StepVariant } from 'src/app/components/step/step.model';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SizeDirective } from 'src/app/utilities/directives/size.directive';
import { StepComponent } from 'src/app/components/step/step.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { ClassesDirective } from 'src/app/utilities/directives/classes.directive';
import { VariantDirective } from 'src/app/utilities/directives/variant.directive';
import { TypographyComponent } from 'src/app/components/typography/typography.component';

export default {
  title: 'Stepper',
  decorators: [
    moduleMetadata({
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      declarations: [StepperComponent, SizeDirective, StepComponent, IconComponent,
         VariantDirective, ClassesDirective, TypographyComponent],
      imports: [CommonModule, MaterialModule, AppRoutingModule, BrowserModule],
    }),
  ],
} as Meta;

const Template: Story<StepperComponent> = (args: StepperComponent) => ({
  props: args,
  template: `<app-stepper ${Object.keys(args).reduce((acc, key) => `${acc} [${key}]='${typeof args[key] === 'object' ? JSON.stringify(args[key]) : args[key]}'`, '')}></app-stepper>`
});

export const Default = Template.bind({});
Default.args = {
  steps: [
    new StepModel({
      type: StepType.WIZARD,
      variant: StepVariant.SQUARE,
      label: 'פירוט הנכס',
      svgUrl: 'home',
      path: 'details',
      size: 80,
      scale: 1,
    }),
    new StepModel({
      type: StepType.WIZARD,
      variant: StepVariant.SQUARE,
      label: 'תנועות',
      svgUrl: 'list',
      path: 'movements',
      size: 80,
      scale: 1,
    }),
    new StepModel({
      type: StepType.WIZARD,
      variant: StepVariant.SQUARE,
      label: 'עסקאות',
      svgUrl: 'transactions',
      path: 'transactions',
      size: 80,
      scale: 1,
    }),
    new StepModel({
      type: StepType.WIZARD,
      variant: StepVariant.SQUARE,
      label: 'תתי חלקה',
      svgUrl: 'building',
      path: 'subdivision',
      size: 80,
      scale: 1,
    }),
    new StepModel({
      type: StepType.WIZARD,
      variant: StepVariant.SQUARE,
      label: 'פרצליציה',
      svgUrl: 'add',
      path: 'parcellation',
      size: 80,
      scale: 1,
    }),
  ],
  double: 2,
  direction: StepperDirection.ROW,
  routePrefix: 'lands/assets/book',

};
