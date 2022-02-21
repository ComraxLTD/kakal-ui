import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuestionAutocompleteModel, FormDataSource, BreakpointService } from '@ComraxLTD/kakal-ui';
import { FormService } from '@ComraxLTD/kakal-ui/lib/form/services/form.service';

@Component({
  selector: 'app-autocomplete-ex',
  templateUrl: './autocomplete-ex.component.html',
  styleUrls: ['./autocomplete-ex.component.scss'],
})
export class AutocompleteExComponent implements OnInit {
  constructor(private http: HttpClient, private brea : BreakpointService) {}

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

  ngOnInit(): void {}

  onAutocomplete(query: any) {
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
