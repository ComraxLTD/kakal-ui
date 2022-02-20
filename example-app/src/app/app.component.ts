import { Component } from '@angular/core';
import { QuestionAutocompleteModel } from '@ComraxLTD/kakal-ui';
import { FormControl } from '@angular/forms';
import { FormDataSource } from '@ComraxLTD/kakal-ui';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'example-app';

  constructor(private http: HttpClient) {}
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

  onAutocomplete(query: any) {
    console.log(query.value);
    this.http
      .get<any>(
        `https://virtserver.swaggerhub.com/Comrax/KKL-demo/1.0.0/autocomplete`
      )
      .subscribe((data) => {
        console.log(data);
        this.question = { ...this.question, options: data };
      });
  }
}
