import { Component } from '@angular/core';
import { FormDataSource } from '../models/form-datasource';

@Component({
  selector: 'kkl-form-wrapper',
  templateUrl: './form-grid.component.html',
  providers: [FormDataSource],
})
export class FormWrapperComponent {
  constructor() {}
}
