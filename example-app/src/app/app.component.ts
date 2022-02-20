import { Component } from '@angular/core';
import { QuestionAutocompleteModel } from '@ComraxLTD/kakal-ui/lib/form/models/question-autocomplete';
import { FormControl } from '@angular/forms';
import { FormDataSource } from '@ComraxLTD/kakal-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-app';

  question = new QuestionAutocompleteModel({
    key: 'autocomplete',
    options: [
      { value: 'first', label: 'first' },
      { value: 'second', label: 'second' },
      { value: 'thierd', label: 'thierd' },
      { value: 'foruth', label: 'foruth' },
    ],
  });
  formDataSource = new FormDataSource();
  control = new FormControl();
}
