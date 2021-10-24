import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ExpandPanelComponent} from '../app/components/expand-panel/expand-panel.component';
import { IconComponent } from '../app/components/icon/icon.component';
import { TypographyComponent } from '../app/components/typography/typography.component';

export default {
  title: 'Expanding Panel',
  component: ExpandPanelComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconComponent,TypographyComponent],
      imports: [CommonModule, MaterialModule, BrowserAnimationsModule],
    }),
  ],
} as Meta;

const Template: Story<ExpandPanelComponent> = (args: ExpandPanelComponent) => ({
  props: args,
  template: `<app-expand-panel>
  <kkl-typography bold="600" title>example</kkl-typography>
  <p content>example</p>
  </app-expand-panel>`
});

export const Default = Template.bind({});
Default.args = {
};

