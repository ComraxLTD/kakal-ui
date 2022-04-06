import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kkl-drawer-document-item',
  templateUrl: './drawer-document-item.component.html',
  styleUrls: ['./drawer-document-item.component.scss'],
})
export class DrawerDocumentItemComponent<T> implements OnInit {
  @Input() item: T;

  itemLabel: string;

  @Output() delete: EventEmitter<T> = new EventEmitter();
  @Output() openPopup: EventEmitter<void> = new EventEmitter();
  @Output() download: EventEmitter<void> = new EventEmitter();
  @Output() showFile: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(item: T) {
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
