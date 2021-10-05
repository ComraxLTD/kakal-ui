import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/material/material.module';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassesDirective } from 'src/app/utilities/directives/classes.directive';
import { CardUserComponent } from 'src/app/components/cards/card-user/card-user.component';
import { MenuItemComponent } from 'src/app/components/menu-item/menu-item.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { ColorDirective } from 'src/app/utilities/directives/color.directive';

export default {
  title: 'Menu',
  component: MenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [MenuItemComponent, CardUserComponent, TypographyComponent, IconComponent, ColorDirective, ClassesDirective],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      imports: [
        CommonModule,
        AppRoutingModule,
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
