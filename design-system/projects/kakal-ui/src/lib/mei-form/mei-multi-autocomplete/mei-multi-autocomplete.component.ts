import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-mei-multi-autocomplete',
  templateUrl: './mei-multi-autocomplete.component.html',
  styleUrls: ['./mei-multi-autocomplete.component.scss']
})
export class MeiMultiAutocompleteComponent {

  // filteredOptions: Observable<MeiSelectOption[]>;

  // separatorKeysCodes: number[] = [ENTER, COMMA];

  // @Input() control!: FormControl;
  // @Input() question!: QuestionBase;


  // @Output() openChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  // @Output() queryChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  // @Output() selectChanged: EventEmitter<FormChangeEvent> = new EventEmitter();

  // error$: BehaviorSubject<string>;

  // isArray: boolean = false;
  // constructor(private messageService: MessageService) { }

  // ngOnInit(): void {
  //   if(Array.isArray(this.question.options)) {
  //     this.isArray = true;
  //     this.filteredOptions = this.control.valueChanges.pipe(
  //       startWith(''),
  //       map(value => (typeof value === 'string' ? value : value.label)),
  //       map(label => (label ? this._filter(label) : (this.question.options as Array<MeiSelectOption>).slice())),
  //     );
  //   }
  //   this.error$ = new BehaviorSubject<string>('');
  // }

  // displayFn(mei: MeiSelectOption): string {
  //   return mei?.label;
  // }

  // private _filter(label: string): MeiSelectOption[] {
  //   const filterValue = label.toLowerCase();
  //   return (this.question.options as Array<MeiSelectOption>).filter(option => option.label.toLowerCase().includes(filterValue));
  // }

  // deselectAll() {
  //   this.control.patchValue([]);
  // }

  // setErrorMessage() {
  //   const error = this.messageService.getErrorMessage(
  //     this.control as FormControl,
  //     this.question.placeHolder
  //   );

  //   this.error$.next(error);
  //   if (error && this.control.touched) {
  //     this.control.updateValueAndValidity();
  //   }
  // }


  // onSelectionChange(): void {
  //   this.selectChanged.emit({
  //     key: this.question.key,
  //     value: this.control.value,
  //     action: this.question.multi? FormActions.MULTI_OPTION_SELECTED : FormActions.OPTION_SELECTED
  //   });
  // }

  // buttonSearch(val: string) {
  //   if(this.question.withButton) {
  //     this.search(val);
  //   }
  // }
  // search(val: string) {
  //   this.queryChanged.emit({
  //     key: this.question.key,
  //     value: this.control.value,
  //     action: FormActions.QUERY_CHANGED,
  //     query: val
  //   });
  // }

  // onOpenChanged() {
  //   this.openChanged.emit({
  //     key: this.question.key,
  //     value: this.control.value,
  //     action: FormActions.OPEN_CHANGED
  //   });
  // }

  // add(event: MatChipInputEvent): void {
  //   // const value = (event.value || '').trim();

  //   // // Add our fruit
  //   // if (value) {
  //   //   this.fruits.push(value);
  //   // }

  //   // // Clear the input value
  //   // event.chipInput!.clear();

  //   // this.fruitCtrl.setValue(null);
  // }

  // remove(fruit: string): void {
  //   // const index = this.fruits.indexOf(fruit);

  //   // if (index >= 0) {
  //   //   this.fruits.splice(index, 1);
  //   // }
  // }


}




