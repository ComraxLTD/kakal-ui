import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { IconComponent } from '../app/components/icon/icon.component';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { NavbarBottomComponent } from 'src/app/components/navigation/navbar-bottom/navbar-bottom.component';
import { ColorDirective } from 'src/app/utilities/directives/color.directive';
import { SizeDirective } from 'src/app/utilities/directives/size.directive';
import { ClassesDirective } from 'src/app/utilities/directives/classes.directive';

export default {
  title: 'NavbarBottom',
  component: NavbarBottomComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconComponent, TypographyComponent, ColorDirective, ClassesDirective, SizeDirective],
      imports: [CommonModule, MaterialModule],
    }),
  ],
} as Meta;

const Template: Story<NavbarBottomComponent> = (
  args: NavbarBottomComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  buttonText: 'המשך',
  hasNext: true,
};

export const Save = Template.bind({});
Save.args = {
  buttonText: 'המשך',
  hasNext: true,
  hasSave : true
};
