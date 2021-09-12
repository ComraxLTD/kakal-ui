import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {ExpendPanelComponent} from "../app/components/expend-panel/expend-panel.component";
import {MaterialModule} from "../material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'Expanding Panel',
  component: ExpendPanelComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, MaterialModule, BrowserAnimationsModule],
    }),
  ],
} as Meta;

const Template: Story<ExpendPanelComponent> = (args: ExpendPanelComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  content: 'This is the content'
};

export const CustomTitle =  (args: ExpendPanelComponent) => ({
  props: args,
  template: `<app-expend-panel ${Object.keys(args).reduce((acc, key) => `${acc} [${key}]="${args[key]}"`, '')}>
    <span title>My Amazing title</span>
</app-expend-panel>`
});
CustomTitle.args = {
};

export const CustomDescription =  (args: ExpendPanelComponent) => ({
  props: args,
  template: `<app-expend-panel ${Object.keys(args).reduce((acc, key) => `${acc} [${key}]="${args[key]}"`, '')}>
    <span title>My Amazing title</span>
    <span description>jnvkjsanvdjsnkj fnaskjdfndsajknf jksdnf kjnaskjfn jksadnf jknasd f</span>
</app-expend-panel>`
});
CustomDescription.args = {
};
