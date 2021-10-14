import { NavbarService } from './../../app/components/navigation/navbar/navbar.service';
import { CardDashboardModel } from '../../app/components/cards/card-dashboard/card-dashboard.model';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

import { SizeDirective } from '../../app/utilities/directives/size.directive';
import { IconComponent } from '../../app/components/icon/icon.component';
import { ClassesDirective } from '../../app/utilities/directives/classes.directive';
import { VariantDirective } from '../../app/utilities/directives/variant.directive';
import { TypographyComponent } from '../../app/components/typography/typography.component';
import { ButtonDirective } from '../../app/utilities/directives/button.directive';
import { ColorDirective } from '../../app/utilities/directives/color.directive';
import { DashboardExComponent } from '../../app/examples/dashboard-ex/dashboard-ex.component';
import { BreakpointService } from '../../app/utilities/services/breakpoint.service';
import { LayoutComponent } from '../../app/screens/layout/layout.component';
import { CardWizardComponent } from '../../app/components/cards/card-wizard/card-wizard.component';
import { MenuItemComponent } from '../../app/components/menu-item/menu-item.component';
import { MenuComponent } from '../../app/components/menu/menu.component';
import { NavbarComponent } from '../../app/components/navigation/navbar/navbar.component';
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
        ClassesDirective,
        ButtonDirective,
        ColorDirective,
      ],

      providers: [LayoutService, NavbarService, MenuService, BreakpointService],
      imports: [CommonModule, MaterialModule, BrowserAnimationsModule],
    }),
  ],
} as Meta;

const Template: Story<LayoutExComponent> = (args: LayoutExComponent) => ({
  props: args,
});


//  titles: Map<string, string> = new Map([
//   ['lands', 'מקרקעין'],
//   ['neches', 'מנהלת ספר הכסים'],
// ]);

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
      label: 'פירוט הנכס',
      svgUrl: 'home',
      path: 'details',
      size: 2,
      variant: 'square',
      type: 'wizard'
    }),
    new CardStepModel({
      label: 'תנועות',
      svgUrl: 'list',
      path: 'movements',
      size: 2,
      isActive: true,
      variant: 'square',
      type: 'wizard'
    }),
    new CardStepModel({
      label: 'עסקאות',
      svgUrl: 'transactions',
      path: 'transactions',
      size: 2,
      variant: 'square',
      type: 'wizard'
    }),
    new CardStepModel({
      label: 'תתי חלקה',
      svgUrl: 'building',
      path: 'subdivision',
      size: 2,
      variant: 'square',
      type: 'wizard'
    }),
    new CardStepModel({
      label: 'פרצליציה',
      svgUrl: 'add',
      path: 'parcellation',
      size: 2,
      variant: 'square',
      type: 'wizard'
    }),
  ],

};

export const WithMenu = Template.bind({});

WithMenu.args = {
  openIcon: 'treegradientlands',
  logos: [new IconModel('logo', 7)],

  menu: [
    {
      label: 'ראשי',
      prefix: 'neches',
      links: [
        new MenuItemModel({ label: 'ספר נכסים', path: 'neches' }),
        new MenuItemModel({ label: 'חיפוש נכס', path: 'search' }),
        new MenuItemModel({ label: 'עסקאות', path: 'transactions' }),
        new MenuItemModel({ label: 'תבניות מייל', path: 'mail' }),
        new MenuItemModel({ label: 'רשימת עורכי דין', path: 'loyer' }),
      ],
    },
    {
      label: 'פיקוח',
      prefix: 'supervision',
      links: [],
    },
    {
      label: 'שומה',
      prefix: 'evaluation',
      links: [],
    },
    {
      label: 'עסקאות',
      prefix: 'transactions',
      links: [],
    },
    {
      label: 'מדידות',
      prefix: 'measurements',
      links: [],
    },
    {
      label: 'תכנון',
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
  ]
};

