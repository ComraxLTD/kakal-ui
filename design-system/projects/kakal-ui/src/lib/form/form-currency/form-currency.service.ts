import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectOption } from '../form-select/question-select.model';

@Injectable({
  providedIn: 'root',
})

export class CurrencyService {
  private currencies: SelectOption[];
  constructor() { }

  public setCurrencies(currencies: SelectOption[]): void {
    this.currencies = currencies;
  }
  public getCurrencies(): SelectOption[] {
    return this.currencies;
  }
}
