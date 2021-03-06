import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ColorDirective } from '../app/utilities/directives/color.directive';
import { SizeDirective } from '../app/utilities/directives/size.directive';
import { IconComponent } from "../app/components/icon/icon.component";
import { MaterialModule } from "../material/material.module";
import { MatIconModule } from "@angular/material/icon";

export default {
  title: 'Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      declarations: [ColorDirective, SizeDirective],
      imports: [CommonModule, MatIconModule, MaterialModule],
    }),
  ],
} as Meta;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args,
});

export const HOME_SVG = Template.bind({});
HOME_SVG.args = {
  key: 'home',
  color: 'primary',
};

export const HOME_MAT = Template.bind({});
HOME_MAT.args = {
  key: 'home',
  type: 'mat',
  size : 1,
  color: 'warn',
};
