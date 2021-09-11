import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {NavbarComponent} from "../app/components/navigation/navbar/navbar.component";
import {MaterialModule} from "../material/material.module";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app/app-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";

export default {
  title: 'Nav Bar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
      imports: [CommonModule, MaterialModule, MatToolbarModule, BrowserModule, AppRoutingModule],
    }),
  ],
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
