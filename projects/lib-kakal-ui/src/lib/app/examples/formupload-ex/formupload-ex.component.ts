import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormService, Question } from '../../components/form/services/form.service';

@Component({
  selector: 'kkl-formupload-ex',
  templateUrl: './formupload-ex.component.html',
  styleUrls: ['./formupload-ex.component.scss']
})
export class FormUploadExComponent implements OnInit {

  public file: File | null = null;
  public question: Question;
  public control: FormControl;

  @Input() multi: boolean;
  @Input() questions: Question[]
  @Output() fileChange = new EventEmitter<File | string>();

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    this.file = event && event.item(0);
    this.fileChange.emit(this.file);
  }


  constructor(private formService: FormService) { }

  ngOnInit(): void {
    const questions = this.formService.setQuestionList(this.questions);
    this.question = questions[0];
    this.control = this.formService.getFieldControl(this.question);
  }


}
