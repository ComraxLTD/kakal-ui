import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { Question, QuestionBase } from '../services/form.service';


@Component({
  selector: 'kkl-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.scss']
})
export class FormUploadComponent implements OnInit {

  @Input() public question: QuestionBase;
  @Input() public control: FormControl;
  @Input() public questions: Question[];

  public icon: string;
  public label: string;
  public disabled: boolean
  public color: string;

  public preview: string;
  public file: File | null = null;


  @Input() multi: boolean = true;

  @Output() fileChange = new EventEmitter<File | string>();

  @HostListener('input', ['$event.target.files']) emitFiles(event: FileList) {
    this.file = event && event.item(0);
    this.fileChange.emit(this.file);
  }

  constructor() { }

  ngOnInit(): void {

    this.label = this.question?.label || '';
    this.icon = this.question?.icon || '';

  }
}

