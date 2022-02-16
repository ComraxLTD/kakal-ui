// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { QuestionFileModel } from '../projects/kakal-ui/src/lib/form/models/question-file.model';
import { QuestionAutocompleteModel } from '../projects/kakal-ui/src/lib/form/models/question-autocomplete';
import { QuestionSelectModel } from '../projects/kakal-ui/src/lib/form/models/question-select.model';
import { TypographyComponent } from '../projects/kakal-ui/src/lib/typography/typography.component';
import { IconComponent } from '../projects/kakal-ui/src/lib/icon/icon.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormAutocompleteExComponent } from '../../design-system/projects/kakal-ui/src/lib/examples/form-autocomplete-ex/form-autocomplete-ex.component';
import { Observable, of } from 'rxjs';
import { FormDataSource } from 'projects/kakal-ui/src/lib/form/models/form-data-source.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ElementRef } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormAutocompleteComponent}from '../../design-system/projects/kakal-ui/src/lib/form/form-autocomplete/form-autocomplete.component'
export default {
  title: 'autocomplete/autocomplete',
  decorators: [
    
    moduleMetadata({
      imports: [
        MatMenuModule,
        MatListModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatAutocompleteModule,
        ReactiveFormsModule
      ],
      declarations: [TypographyComponent, IconComponent,FormAutocompleteComponent],
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
