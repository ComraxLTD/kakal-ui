import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from '../app/components/navigation/navbar/navbar.component';
import { CardStatusComponent } from '../app/components/cards/card-status/card-status.component';
import { IconComponent } from '../app/components/icon/icon.component';
import { TypographyComponent } from '../app/components/typography/typography.component';

import { StepModel } from '../app/components/step/step.model';

import { SizeDirective } from './../app/utilities/directives/size.directive';
import { ButtonDirective } from '../app/utilities/directives/button.directive';
import { ColorDirective } from '../app/utilities/directives/color.directive';
import { ClassesDirective } from '../app/utilities/directives/classes.directive';

export default {
  title: 'Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective, ColorDirective, ClassesDirective, ButtonDirective, CardStatusComponent, IconComponent, TypographyComponent],
      imports: [
        CommonModule,
        MaterialModule,
        BrowserModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  status: [
    new StepModel({
      label: 'בתהליך',
      svgUrl: 'reload',
      value: 6,
      size: 6,
    }),
  ],
};
