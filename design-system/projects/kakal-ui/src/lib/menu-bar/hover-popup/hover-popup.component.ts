import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output,
  ViewChild
} from '@angular/core';
import {CdkOverlayOrigin} from '@angular/cdk/overlay';
import {debounceTime, filter, Observable, share, startWith, switchMap, takeUntil} from 'rxjs';
import {Subject, fromEvent} from 'rxjs';

@Component({
  selector: 'hover-popup',
  templateUrl: './hover-popup.component.html',
  styleUrls: ['./hover-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoverPopupComponent implements OnDestroy, OnInit {
  @Input() CdkOverlayOrigin: CdkOverlayOrigin;
  @Output() close = new EventEmitter<any>();
  @Output() open = new EventEmitter<any>();

  @ViewChild('dialog') dialog: ElementRef;
  isOpened = false;
  destroy$ = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    const CdkOverlayOriginEl = this.CdkOverlayOrigin.elementRef.nativeElement;

    // open popup if mouse stopped in CdkOverlayOriginEl (for short time).
    // If user just quickly got over CdkOverlayOriginEl element - do not open
    const open$ = fromEvent(CdkOverlayOriginEl, 'mouseenter').pipe(
      filter(() => !this.isOpened),
      switchMap(enterEvent =>
        fromEvent(document, 'mousemove').pipe(
          startWith(enterEvent),
          debounceTime(300),
          filter(event => CdkOverlayOriginEl === event['target'])
      )),
      share()
      );
    open$.pipe(
      takeUntil(this.destroy$)
    )
      .subscribe(() => this.changeState(true));

    // close if mouse left the CdkOverlayOriginEl and dialog(after short delay)
    const close$ = fromEvent(document, 'mousemove').pipe(
      debounceTime(100),
      filter(() => this.isOpened),
      filter(event => this.isMovedOutside(CdkOverlayOriginEl, this.dialog, event)));

    open$.pipe(
      takeUntil(this.destroy$),
      switchMap(() => close$),
    )
      .subscribe(() => {
        this.changeState(false);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  connectedOverlayDetach() {
    this.changeState(false);
  }

  private changeState(isOpened: boolean) {
    this.isOpened = isOpened;
    isOpened ? this.open.emit() : this.close.emit();
    this.changeDetectorRef.markForCheck();
  }

  private isMovedOutside(CdkOverlayOriginEl, dialog, event): boolean {
    return !(CdkOverlayOriginEl.contains(event['target']) ||     dialog.nativeElement.contains(event['target']));
  }
}
