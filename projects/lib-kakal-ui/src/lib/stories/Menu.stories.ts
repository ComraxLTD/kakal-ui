import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app/app-routing.module';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from '../app/components/menu/menu.component';
import { TypographyComponent } from '../app/components/typography/typography.component';
import { CardUserComponent } from '../app/components/cards/card-user/card-user.component';
import { MenuItemComponent } from '../app/components/menu-item/menu-item.component';
import { IconComponent } from '../app/components/icon/icon.component';

import { ClassesDirective } from '../app/utilities/directives/classes.directive';
import { ColorDirective } from '../app/utilities/directives/color.directive';
import { SizeDirective } from '../app/utilities/directives/size.directive';
import { ButtonDirective } from '../app/utilities/directives/button.directive';

export default {
  title: 'Menu',
  component: MenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [MenuItemComponent, CardUserComponent, TypographyComponent, IconComponent, SizeDirective, ColorDirective, ClassesDirective, ButtonDirective],
      providers: [],
      imports: [
        CommonModule,
        MaterialModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  menu: [
    {
      label: 'ראשי',
      prefix: 'assets',
      links: [],
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
