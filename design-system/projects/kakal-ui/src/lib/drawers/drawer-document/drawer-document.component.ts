import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Type,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SelectOption } from '../../form/form-select/question-select.model';
import { DocumentItem } from './drawer-document-item/drawer-document-item.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kkl-drawer-document',
  templateUrl: './drawer-document.component.html',
  styleUrls: ['./drawer-document.component.scss'],
})
export class DrawerDocumentComponent<T = any> implements OnInit {
  @Input() title: string;
  @Input() categories: SelectOption[];


  documents$: BehaviorSubject<DocumentItem[]> = new BehaviorSubject<DocumentItem[]>([]);

  @Input()
  set documents(value: DocumentItem[]) {
    this.documents$.next(value);
  }

  @Input() addDocumentDialog!: Type<any>;
  @Input() signDocumentDialog!: Type<any>;

  control: FormControl;

  @Output() addDocument: EventEmitter<void> = new EventEmitter();
  @Output() signDocument: EventEmitter<void> = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.control = new FormControl();
  }

  onAddDocument() {
    if (this.addDocumentDialog) {
      this.dialog.open(this.addDocumentDialog, {
        panelClass: ['kkl-outside-close', 'kkl-dialog-table'],
      });
    } else {
      this.addDocument.emit();
    }
  }

  onSignDialog() {
    if (this.signDocumentDialog) {
      this.dialog.open(this.signDocumentDialog, {
        panelClass: ['kkl-outside-close', 'kkl-dialog-table'],
      });
    } else {
      this.signDocument.emit();
    }
  }

  onDelete(item: T) {}

  onDownloadFile(id: number) {}

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
