import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormAutocompleteComponent } from '../app/components/form/form-autocomplete/form-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormautocompleteExComponent } from '../app/examples/formautocomplete-ex/formautocomplete-ex.component';
import { IconComponent } from '../app/components/icon/icon.component';
import { TypographyComponent } from '../app/components/typography/typography.component';
import { SizeDirective } from '../app/utilities/directives/size.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'FormAutoComplete',
  component: FormautocompleteExComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        FormAutocompleteComponent,
        IconComponent,
        TypographyComponent,
        SizeDirective,
      ],
      imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<FormautocompleteExComponent> = (
  args: FormautocompleteExComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  question: {
    controlType: 'autocomplete',
    key: 'block',
    label: 'חיפוש מהיר ',
    icon: 'search',
  },

  options: [
    {
      value: 'michael',
      label: 'michael',
    },
    {
      value: 'yossi',
      label: 'yossi',
    },
    {
      value: 'dan',
      label: 'dan',
    },
  ],
};
