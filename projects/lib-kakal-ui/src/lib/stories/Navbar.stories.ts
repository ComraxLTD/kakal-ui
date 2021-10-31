import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';

import { CardStatusComponent } from '../app/components/cards/card-status/card-status.component';
import { IconComponent } from '../app/components/icon/icon.component';
import { TypographyComponent } from '../app/components/typography/typography.component';

import { SizeDirective } from './../app/utilities/directives/size.directive';
import { ButtonDirective } from '../app/utilities/directives/button.directive';
import { ColorDirective } from '../app/utilities/directives/color.directive';
import { IconModel } from '../app/components/icon/icon.model';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { NavbarService } from '../app/components/navbar/navbar.service';
import { StepperComponent } from '../app/components/stepper/stepper.component';
import { UnderlineDirective } from '../app/utilities/directives/underline.directive';
import { CardStepComponent } from '../app/components/cards/card-step/card-step.component';
import { CardWizardComponent } from '../app/components/cards/card-wizard/card-wizard.component';
import { VariantDirective } from '../app/utilities/directives/variant.directive';
import { NavbarExComponent } from '../app/examples/navbar-ex/navbar-ex.component';

export default {
  title: 'Navbar',
  component: NavbarExComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        NavbarExComponent,
        NavbarComponent,
        IconComponent,
        TypographyComponent,
        StepperComponent,
        CardStatusComponent,
        CardStepComponent,
        CardWizardComponent,

        SizeDirective,
        ColorDirective,
        ButtonDirective,
        VariantDirective,
        UnderlineDirective
      ],
      providers: [NavbarService],
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
  openIcon: 'treegradientlands',
  logos: [new IconModel('logo', 7)],
};
