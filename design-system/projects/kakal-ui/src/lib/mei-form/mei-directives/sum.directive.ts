import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[sumInput]'
})
export class SumInputDirective {

    private check(value: string) {
        // if (this.decimals <= 0) {
        //     return String(value).match(new RegExp(/^\d+$/));
        // } else
        // if (this.minus) {
            var regExpString =
                "^\\s*((\\-?\\.?)|(\\-?\\d+(\\.\\d{0,3})?)|((\\-?\\d*(\\.\\d{1,3}))))\\s*$";
            return String(value).match(new RegExp(regExpString));
        // }
        // else {
        //     var regExpString =
        //         "^\\s*((\\.)|(\\d+(\\.\\d{0," +
        //         this.decimals +
        //         "})?)|((\\d*(\\.\\d{1," +
        //         this.decimals +
        //         "}))))\\s*$";
        //     return String(value).match(new RegExp(regExpString));
        // }
    }

    transform(value: string): string {
      if (!value) return "";
      // return Number(value).toLocaleString();
      if(value.startsWith('-')) {
        const last = value.lastIndexOf('.') == -1? value.length : value.lastIndexOf('.');
        return '-' + Number(value.substring(1, last)).toLocaleString() + value.substring(last);
      } else {
        const last = value.lastIndexOf('.') == -1? value.length : value.lastIndexOf('.');
        return Number(value.substring(0, last)).toLocaleString() + value.substring(last);
      }
    }

    private run(oldValue) {
        setTimeout(() => {
            let currentValue: string = this.el.nativeElement.value.replace(/\,/g, '');
            if (currentValue !== '' && !this.check(currentValue)) {
                this.el.nativeElement.value = oldValue;
                this.control.control.setValue(oldValue);
            }
            else {
              this.el.nativeElement.value = this.transform(currentValue);
              this.control.control.setValue(this.el.nativeElement.value);
            }
        });
    }

    constructor(private el: ElementRef, private control : NgControl) {}

    @HostListener("keydown", ["$event"])
    onKeyDown(event: KeyboardEvent) {
        this.run(this.el.nativeElement.value);
    }

    @HostListener("paste", ["$event"])
    onPaste(event: ClipboardEvent) {
        this.run(this.el.nativeElement.value);
    }

}
