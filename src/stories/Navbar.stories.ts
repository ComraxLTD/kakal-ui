import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {MaterialModule} from "../material/material.module";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app/app-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ToNavComponent} from "../app/components/navigation/to-nav/to-nav.component";
import {StatusCardComponent} from "../app/components/cards/status-card/status-card.component";
import {IconComponent} from "../app/components/icon/icon.component";

export default {
  title: 'Nav Bar',
  component: ToNavComponent,
  decorators: [
    moduleMetadata({
      declarations: [StatusCardComponent, IconComponent],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
      imports: [CommonModule, MaterialModule, MatToolbarModule, BrowserModule, AppRoutingModule],
    }),
  ],
} as Meta;

const Template: Story<ToNavComponent> = (args: ToNavComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  status: [
    {
      title: 'בתהליך',
      svgUrl: 'reload',
      badgeValue: 3,
      hasBadge: true
    },
    {
      title: 'מחכה לאישור',
      svgUrl: 'report',
      badgeValue: 1,
      hasBadge: true
    },
    {
      title: 'סגור',
      svgUrl: 'flag',
      badgeValue: 20,
      hasBadge: true
    },
  ],
};
