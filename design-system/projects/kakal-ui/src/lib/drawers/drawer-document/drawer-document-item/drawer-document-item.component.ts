import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface DocumentItem {
  label : string;
  dateCreated : Date
  userCreated : string
}

@Component({
  selector: 'kkl-drawer-document-item',
  templateUrl: './drawer-document-item.component.html',
  styleUrls: ['./drawer-document-item.component.scss'],
})
export class DrawerDocumentItemComponent implements OnInit {
  @Input() item: DocumentItem;

  @Output() delete: EventEmitter<DocumentItem> = new EventEmitter();
  @Output() openPopup: EventEmitter<void> = new EventEmitter();
  @Output() download: EventEmitter<void> = new EventEmitter();
  @Output() showFile: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(item: DocumentItem) {
    this.delete.emit(item);
  }

  public openPopupSign() {
    this.openPopup.emit();
  }

  public onDownloadFile() {
    this.download.emit();
  }

  public onShowFile() {
    this.showFile.emit();
  }
}
