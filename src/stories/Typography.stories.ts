import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from "../app/components/typography/typography.component";
import { MaterialModule } from "../material/material.module";

export default {
  title: 'Typography',
  component: TypographyComponent,

  decorators: [
    moduleMetadata({
      declarations: [TypographyComponent],
      imports: [CommonModule, MaterialModule],
    }),
  ],
} as Meta;

const Template: Story<TypographyComponent> = (args: TypographyComponent) => ({
  props: args,
  template: `<app-typography ${Object.keys(args).reduce((acc, key) => `${acc} [${key}]="${args[key]}"`, '')}> Hello World </app-typography>`,

});

export const Default = Template.bind({});
Default.args = {
};

export const Title = Template.bind({});
Title.args = {
  size: '16',
  bold: 600
};

export const Underline = Template.bind({});
Underline.args = {
  underline: true
};
