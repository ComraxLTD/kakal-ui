// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { QuestionAutocompleteModel } from '../../projects/kakal-ui/src/lib/form/models/question-autocomplete';

import { FormDataSource } from '../../projects/kakal-ui/src/lib/form/models/form-data-source.model';
import { KKLFormAutoCompleteExModule } from '../../projects/kakal-ui/src/lib/examples/form-autocomplete-ex/form-autocomplete-ex.module';
import { FormAutocompleteExComponent } from '../../projects/kakal-ui/src/lib/examples/form-autocomplete-ex/form-autocomplete-ex.component';
import { ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
export default {
  title: 'form',
  decorators: [
    moduleMetadata({
      imports: [KKLFormAutoCompleteExModule]
    }),
  ],
  component: FormAutocompleteExComponent,
  argTypes: {
    question: QuestionAutocompleteModel,
    formDataSource: FormDataSource,
    control: FormControl,
    optionsSlot: ElementRef,
    // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
  },
} as Meta;

const Template: Story<FormAutocompleteExComponent> = (
  args: FormAutocompleteExComponent
) => ({
  component: FormAutocompleteExComponent,
  props: args,
});

export const autoComplete = Template.bind({});
autoComplete.args = {
  question: new QuestionAutocompleteModel({
    key: 'autocomplete',
    options: [
      { value: 'first', label: 'first' },
      { value: 'second', label: 'second' },
      { value: 'thierd', label: 'thierd' },
      { value: 'foruth', label: 'foruth' },
    ],
  }),
  formDataSource:new FormDataSource(),
  control: new FormControl(),
};
