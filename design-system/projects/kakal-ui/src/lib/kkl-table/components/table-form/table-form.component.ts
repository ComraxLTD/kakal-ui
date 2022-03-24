import { Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, Self, SkipSelf, TemplateRef } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { QuestionBase } from '../../../form/models/question.model';

export const NOOP_VALUE_ACCESSOR: ControlValueAccessor = {
  writeValue(): void {},
  registerOnChange(): void {},
  registerOnTouched(): void {}
};

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss'],
})
export class TableFormComponent implements OnInit  {
  @Input() public question!: QuestionBase;


  constructor(public controlContainer: ControlContainer) {
  }
  ngOnInit(): void {
  }


}
