import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { toDoc } from 'ngx-editor';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'kkl-form-texteditor',
  templateUrl: './form-texteditor.component.html',
  styleUrls: ['./form-texteditor.component.scss']
})
export class FormTexteditorComponent implements OnInit , OnDestroy{
  @Input() public control: FormControl;
  @Input() public placeHolder:string = '';
  constructor() { }
  editor: Editor;

  public toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline'],
    ['ordered_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['image'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  ngOnInit(): void {
    this.editor = new Editor();
    this.editor.valueChanges.subscribe(res => this.control?.setValue(res));
  }
  ngOnDestroy(): void {
      this.editor.destroy();
  }

}
