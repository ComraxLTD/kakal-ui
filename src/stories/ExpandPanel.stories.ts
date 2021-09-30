import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ExpandPanelComponent} from '../app/components/expand-panel/expand-panel.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { ClassesDirective } from 'src/app/utilities/directives/classes.directive';

export default {
  title: 'Expanding Panel',
  component: ExpandPanelComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconComponent,TypographyComponent,ClassesDirective],
      imports: [CommonModule, MaterialModule, BrowserAnimationsModule],
    }),
  ],
} as Meta;

const Template: Story<ExpandPanelComponent> = (args: ExpandPanelComponent) => ({
  props: args,
  template: `<app-expand-panel>
  <app-typography bold="600" title>example</app-typography>
  <p content>example</p>
  </app-expand-panel>`
});

export const Default = Template.bind({});
Default.args = {
};

