import { Component } from '@angular/core';
import { FormChangeEvent, QuestionAutocompleteModel } from '../../../../../../../../../kakal-ui/src/public-api';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormDataSource } from '../../../../../../../../../kakal-ui/src/public-api';
import { FormService } from '@ComraxLTD/kakal-ui/lib/form/services/form.service';
import { mapTo } from 'rxjs';
import { SelectOption } from '@ComraxLTD/kakal-ui/lib/form/models/question-select.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'example-app';

  constructor(private http: HttpClient) {}

  public question = new QuestionAutocompleteModel({
    key: 'autocomplete',
    label: 'autocomplete',
    // options: [
    //   { value: 'first', label: 'first' },
    //   { value: 'second', label: 'second' },
    //   { value: 'thierd', label: 'thierd' },
    //   { value: 'foruth', label: 'foruth' },
    // ],
    validations: [],
  });

  public questionMulti = new QuestionAutocompleteModel({
    key: 'autocomplete',
    multi: true,
    // options: [
    //   { value: 'first', label: 'first' },
    //   { value: 'second', label: 'second' },
    //   { value: 'thierd', label: 'thierd' },
    //   { value: 'foruth', label: 'foruth' },
    // ],
  });

  public formDataSource = new FormDataSource();
  public control = new FormControl();

  ngOnInit() {
    this.http
      .get<SelectOption[]>(
        `https://virtserver.swaggerhub.com/Comrax/KKL-demo/1.0.0/autocomplete`
      )
      .pipe(
        mapTo([
          { value: 'first', label: 'first' },
          { value: 'second', label: 'second' },
          { value: 'thierd', label: 'thierd' },
          { value: 'foruth', label: 'foruth' },
        ])
      )
      .subscribe((data) => {
        this.question = { ...this.question, options: data };
      });
  }

  // Output of autocomplete event
  public onAutocomplete(FormChangeEvent: FormChangeEvent) {
    this.http
      .get<any>(
        `https://virtserver.swaggerhub.com/Comrax/KKL-demo/1.0.0/autocomplete`
      )
      .subscribe((data) => {
        this.question = { ...this.question, options: data };
      });
  }

  // Output of option select event
  public onOptionSelected(FormChangeEvent: FormChangeEvent) {
    alert('I have been selected' + FormChangeEvent);
    console.log(FormChangeEvent);
  }
}
