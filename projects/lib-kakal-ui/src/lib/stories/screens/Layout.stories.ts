import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

import { SizeDirective } from '../../app/utilities/directives/size.directive';
import { IconComponent } from '../../app/components/icon/icon.component';
import { VariantDirective } from '../../app/utilities/directives/variant.directive';
import { TypographyComponent } from '../../app/components/typography/typography.component';
import { ButtonDirective } from '../../app/utilities/directives/button.directive';
import { ColorDirective } from '../../app/utilities/directives/color.directive';
import { BreakpointService } from '../../app/utilities/services/breakpoint.service';
import { LayoutComponent } from '../../app/screens/layout/layout.component';
import { CardWizardComponent } from '../../app/components/cards/card-wizard/card-wizard.component';
import { MenuItemComponent } from '../../app/components/menu-item/menu-item.component';
import { MenuComponent } from '../../app/components/menu/menu.component';
import { StepperComponent } from '../../app/components/stepper/stepper.component';
import { MenuService } from '../../app/components/menu/menu.service';
import { LayoutService } from '../../app/screens/layout/layout.service';
import { LayoutExComponent } from '../../app/examples/layout-ex/layout-ex.component';
import { CardStatusComponent } from '../../app/components/cards/card-status/card-status.component';
import { CardStepComponent } from '../../app/components/cards/card-step/card-step.component';
import { CardUserComponent } from '../../app/components/cards/card-user/card-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardStepModel } from '../../app/components/cards/card-step/card-step.model';
import { MenuItemModel } from '../../app/components/menu-item/menu-item.model';
import { IconModel } from '../../app/components/icon/icon.model';
import { NavbarComponent } from '../../app/components/navbar/navbar.component';
import { NavbarService } from '../../app/components/navbar/navbar.service';
import { RouterService } from '../../app/utilities/services/route.service';
import { CoreModule } from '@angular/flex-layout';

export default {
  title: 'Screen - Layout',
  component: LayoutExComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        IconComponent,
        TypographyComponent,

        LayoutExComponent,

        LayoutComponent,

        NavbarComponent,
        CardStatusComponent,
        CardUserComponent,

        MenuComponent,
        MenuItemComponent,

        StepperComponent,
        CardWizardComponent,
        CardStepComponent,

        SizeDirective,
        VariantDirective,
        ButtonDirective,
        ColorDirective,
      ],

      providers: [
        LayoutService,
        NavbarService,
        MenuService,
        RouterService,
        BreakpointService,
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
      imports: [
        CommonModule,
        MaterialModule,
        BrowserAnimationsModule,
        CoreModule
      ],
    }),
  ],
} as Meta;

const Template: Story<LayoutExComponent> = (args: LayoutExComponent) => ({
  props: args,
});

export const Defualt = Template.bind({});

Defualt.args = {
  openIcon: 'treegradientlands',
  logos: [new IconModel('logo', 7)],
};

export const WithWizard = Template.bind({});

WithWizard.args = {
  openIcon: 'treegradientlands',

  logos: [new IconModel('logo', 7)],
  steps: [
    new CardStepModel({
      label: '?????????? ????????',
      svgUrl: 'home',
      path: 'details',
      size: 2,
      variant: 'square',
      type: 'wizard',
    }),
    new CardStepModel({
      label: '????????????',
      svgUrl: 'list',
      path: 'movements',
      size: 2,
      isActive: true,
      variant: 'square',
      type: 'wizard',
    }),
    new CardStepModel({
      label: '????????????',
      svgUrl: 'transactions',
      path: 'transactions',
      size: 2,
      variant: 'square',
      type: 'wizard',
    }),
    new CardStepModel({
      label: '?????? ????????',
      svgUrl: 'building',
      path: 'subdivision',
      size: 2,
      variant: 'square',
      type: 'wizard',
    }),
    new CardStepModel({
      label: '????????????????',
      svgUrl: 'add',
      path: 'parcellation',
      size: 2,
      variant: 'square',
      type: 'wizard',
    }),
  ],
};

export const WithMenu = Template.bind({});

WithMenu.args = {
  openIcon: 'treegradientlands',
  logos: [new IconModel('logo', 7)],

  menu: [
    {
      label: '????????',
      prefix: 'neches',
      links: [
        new MenuItemModel({ label: '?????? ??????????', path: 'neches' }),
        new MenuItemModel({ label: '?????????? ??????', path: 'search' }),
        new MenuItemModel({ label: '????????????', path: 'transactions' }),
        new MenuItemModel({ label: '???????????? ????????', path: 'mail' }),
        new MenuItemModel({ label: '?????????? ?????????? ??????', path: 'loyer' }),
      ],
    },
    {
      label: '??????????',
      prefix: 'supervision',
      links: [],
    },
    {
      label: '????????',
      prefix: 'evaluation',
      links: [],
    },
    {
      label: '????????????',
      prefix: 'transactions',
      links: [],
    },
    {
      label: '????????????',
      prefix: 'measurements',
      links: [],
    },
    {
      label: '??????????',
      prefix: 'design',
      links: [],
    },
  ],
};

export const WithStatus = Template.bind({});

WithStatus.args = {
  openIcon: 'treegradientlands',
  logos: [new IconModel('logo', 7)],
  status: [
    new CardStepModel({
      label: '?????????? ????????????',
      svgUrl: 'reload',
      value: 6,
      size: 6,
      type: 'status',
    }),
    new CardStepModel({
      label: '???????? ??????????',
      svgUrl: 'reload',
      value: 6,
      size: 6,
      type: 'status',
    }),
    new CardStepModel({
      label: '?????????? ?????????? ????????????',
      svgUrl: 'reload',
      value: 6,
      size: 6,
      type: 'status',
    }),
    new CardStepModel({
      label: '?????????? ????????',
      svgUrl: 'reload',
      value: 6,
      size: 6,
      type: 'status',
    }),
    new CardStepModel({
      label: '?????????? ??????????',
      svgUrl: 'reload',
      value: 6,
      size: 6,
      type: 'status',
    }),
    new CardStepModel({
      label: '?????????? ?????? ??????????',
      svgUrl: 'reload',
      value: 6,
      size: 6,
      type: 'status',
    }),
  ],
};
