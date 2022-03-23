import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectOption } from '../form-select/question-select.model';
import { FormService, QuestionGroup } from '../services/form.service';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private currencies$: BehaviorSubject<SelectOption[]> = new BehaviorSubject(
    []
  );
  constructor(private formService: FormService) {}


  public setCurrencyGroup(config: QuestionGroup) {
    return this.formService.createQuestionGroup(config);
  }

  public setCurrencies$(currencies: SelectOption[]) {
    this.currencies$.next(currencies);
  }
  public getCurrencies$(): Observable<SelectOption[]> {
    return this.currencies$.asObservable();
  }
}
