import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { MenuItemModel } from 'src/app/components/menu/menu.model';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserCardComponent } from 'src/app/components/user-card/user-card.component';
import { MaterialModule } from 'src/material/material.module';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassesDirective } from 'src/app/utilities/directives/classes.directive';

export default {
  title: 'Menu',
  component: MenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [UserCardComponent,TypographyComponent,ClassesDirective],
      providers:[{provide: APP_BASE_HREF, useValue: '/'}],
      imports: [CommonModule,AppRoutingModule,MaterialModule,BrowserAnimationsModule],
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
      links: [
        new MenuItemModel({ label: 'ספר נכסים', path: 'assets' }),
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
  ]
};
