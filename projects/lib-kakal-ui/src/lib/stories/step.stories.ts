import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { StepComponent } from '../app/components/step/step.component';
import {
  StepModel,
} from '../app/components/step/step.model';
import { IconComponent } from '../app/components/icon/icon.component';
import { TypographyComponent } from '../app/components/typography/typography.component';
import { VariantDirective } from '../app/utilities/directives/variant.directive';
import { ClassesDirective } from '../app/utilities/directives/classes.directive';
import { ColorDirective } from '../app/utilities/directives/color.directive';

export default {
  title: 'Step',
  component: StepComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        IconComponent,
        TypographyComponent,
        VariantDirective,
        ColorDirective,
        ClassesDirective,
      ],
      imports: [CommonModule, MaterialModule],
    }),
  ],
} as Meta;

const Template: Story<StepComponent> = (args: StepComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  step: new StepModel({
    variant: 'square',
    type: 'wizard',
    isActive: false,
    path: 'assets',
    svgUrl: 'assets',
    label: 'ספר נכסים',
    value: null,
  }),
};
