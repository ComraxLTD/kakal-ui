import { Component, Input, OnInit, Type } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { QuestionSelectModel } from '../../form/form-select/question-select.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'kkl-drawer-document',
  templateUrl: './drawer-document.component.html',
  styleUrls: ['./drawer-document.component.scss'],
})
export class DrawerDocumentComponent<T> implements OnInit {

  @Input() documents$: Observable<T[]>;

  @Input() dialogComp! : Type<any>


  control: FormControl;
  question: QuestionSelectModel;

  constructor(
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {

  }

  onOpenPopUp() {
    this.dialog.open(this.dialogComp, {
      panelClass: ['kkl-outside-close', 'kkl-dialog-table'],
    });
  }

  onOpenPopupSign() {
    this.dialog.open(this.dialogComp, {
      panelClass: ['kkl-outside-close', 'kkl-dialog-table'],
    });
  }

  onDelete(item: T) {
  }

  onDownloadFile(id: number) {
  }

  onSelected(event: any) {
    // const value = event.option.value;
    // if (value == 0)
    //   this.documents$ = this.contractDocumentService.getAllDocuments();
    // else
    //   this.documents$ =
    //     this.contractDocumentService.getFilteredDocuments(value);
  }
  onShowFile() {}
}
