import { Component } from '@angular/core';
import { QuestionAutocompleteModel } from '@ComraxLTD/kakal-ui';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormDataSource } from '@ComraxLTD/kakal-ui';
import { FormService } from '@ComraxLTD/kakal-ui/lib/form/services/form.service';

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
    options: [
      { value: 'first', label: 'first' },
      { value: 'second', label: 'second' },
      { value: 'thierd', label: 'thierd' },
      { value: 'foruth', label: 'foruth' },
    ],
  });

  public formDataSource = new FormDataSource();
  public control = new FormControl();
  

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
