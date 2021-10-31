import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { IconComponent } from '../app/components/icon/icon.component';
import { TypographyComponent } from '../app/components/typography/typography.component';
import { ColorDirective } from '../app/utilities/directives/color.directive';
import { SizeDirective } from '../app/utilities/directives/size.directive';
import { NavbarBottomComponent } from '../app/components/navbar-bottom/navbar-bottom.component';
import { NavbarBottomExComponent } from '../app/examples/navbar-bottom-ex/navbar-bottom-excomponent';

export default {
  title: 'NavbarBottom',
  component: NavbarBottomExComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        NavbarBottomComponent,
        IconComponent,
        TypographyComponent,
        ColorDirective,
        SizeDirective,
      ],
      imports: [CommonModule, MaterialModule],
    }),
  ],
} as Meta;

const Template: Story<NavbarBottomExComponent> = (
  args: NavbarBottomExComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  hasNext: true,
};

export const Save = Template.bind({});
Save.args = {
  hasNext: true,
  hasSave: true,
};
export const CustomButton = Template.bind({});
CustomButton.args = {
  custom: true,
  hasNext : true
};
