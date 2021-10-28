import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormAutocompleteComponent } from '../app/components/form/form-autocomplete/form-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormautocompleteExComponent } from '../app/examples/formautocomplete-ex/formautocomplete-ex.component';


export default {
  title: 'FormAutoComplete',
  component: FormautocompleteExComponent,
  decorators: [
    moduleMetadata({
      declarations: [FormAutocompleteComponent],
      imports: [CommonModule,MaterialModule, FormsModule, ReactiveFormsModule],
    }),
  ],
} as Meta;

const Template: Story<FormautocompleteExComponent> = (args: FormautocompleteExComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  questions:[
    {
      controlType: 'text',
      key: 'block',
      label: 'חיפוש מהיר ',
      icon:'search'
    }
  ],
  options:[
    {
      value: 'michael',
      label:''
    },
    {
      value: 'yossi',
      label:''
    },
    {
      value: 'dan',
      label:''
    },
    {
      value: 'shir',
      label:''
    },
    {
      value: 'shon',
      label:''
    },
    {
      value: 'daniel',
      label:''
    },
  ]
};

