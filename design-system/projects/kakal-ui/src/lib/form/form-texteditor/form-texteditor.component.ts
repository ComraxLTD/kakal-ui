import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { toDoc } from 'ngx-editor';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'kkl-form-texteditor',
  templateUrl: './form-texteditor.component.html',
  styleUrls: ['./form-texteditor.component.scss'],
})
export class FormTextEditorComponent implements OnInit, OnDestroy {
  @Input() public control!: FormControl | AbstractControl;
  @Input() public key!: string;
  @Input() public index!: number;
  @Input() public placeHolder: string = '';

  constructor() {}

  editor: Editor;

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline'],
    ['ordered_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['image'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  ngOnInit(): void {
    this.editor = new Editor();
    if (this.control.value) {
      this.editor.setContent(this.control.value);
    }
    this.editor.valueChanges.subscribe((res) => this.control?.setValue(res));
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
