import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Question, QuestionBase } from '../services/form.service';
import { FormService } from '../services/form.service';


@Component({
  selector: 'app-form-upload',
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

  // private uploadQuestion: Question = {
  //   key: 'upload',
  //   label: '',
  //   icon:'search'
  // };

  @Input() multi: boolean;

  @Output() fileChange = new EventEmitter<File | string>();

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    this.file = event && event.item(0);
    this.fileChange.emit(this.file);
  }

  constructor(private formService: FormService) { }

  ngOnInit(): void {

    this.label= this.question?.label || '';
    this.icon = this.question?.icon || '';

    console.log(this.question);

    this.subscribeToControl();
  }


  private subscribeToControl() {
    if (this.control.disabled) {
      this.color = 'disable';
    }

    this.control.valueChanges.subscribe((value) => {
      if (this.control.disabled) {
        this.color = 'disable';
      } else if (this.control.errors) {
        this.color = 'warn';
      } else {
        this.color = '';
      }
    });
  }
}
