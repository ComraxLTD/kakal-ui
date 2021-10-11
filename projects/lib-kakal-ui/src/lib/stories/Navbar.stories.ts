import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app/app-routing.module';
import { IconComponent } from '../app/components/icon/icon.component';
import { CardStatusComponent } from '../app/components/cards/card-status/card-status.component';
import { TypographyComponent } from '../app/components/typography/typography.component';
import { NavbarComponent } from '../app/components/navigation/navbar/navbar.component';
import { StepModel } from '../app/components/step/step.model';

export default {
  title: 'Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardStatusComponent, IconComponent, TypographyComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      imports: [
        CommonModule,
        MaterialModule,
        BrowserModule,
        AppRoutingModule,
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
