import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from "../app/components/typography/typography.component";
import { MaterialModule } from "../material/material.module";
import { ClassesDirective } from '../app/utilities/directives/classes.directive';

export default {
  title: 'Typography',
  component: TypographyComponent,

  decorators: [
    moduleMetadata({
      declarations: [TypographyComponent, ClassesDirective],
      imports: [CommonModule, MaterialModule],
    }),
  ],
} as Meta;

const Template: Story<TypographyComponent> = (args: TypographyComponent) => ({
  props: args,
  template: `<app-typography ${Object.keys(args).reduce((acc, key) => `${acc} [${key}]='${typeof args[key] === 'object' ? JSON.stringify(args[key]) : args[key]}'`, '')} > Hello World </app-typography>`
});

export const Default = Template.bind({});
Default.args = {
};

export const Title = Template.bind({});
Title.args = {
  size: 16,
  bold: 600,
  classes: {
    fontSize: 16,
    fontWeight: 600,
    color: 'primary',
  }
};
