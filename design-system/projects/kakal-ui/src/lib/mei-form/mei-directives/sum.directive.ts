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
      return Number(value).toLocaleString();
      // if(value.startsWith('-')) {
      //   let trimLocation = value.indexOf('.'); // Remove non-digits and trim
      //   return '-' + value.substring(1, trimLocation) + value.substring(trimLocation);
      // } else {
      //   let trimLocation = value.indexOf('.'); // Remove non-digits and trim
      //   return value.substring(0, trimLocation) + value.substring(trimLocation)
      // }
    }

    private run(oldValue) {
        setTimeout(() => {
            let currentValue: string = this.el.nativeElement.value;
            if (currentValue !== '' && !this.check(currentValue)) {
                this.el.nativeElement.value = oldValue;
                this.control.control.setValue(oldValue);
            }
            // else {
            //   console.log('kjkj');

            //   this.el.nativeElement.value = this.transform(currentValue);
            //   this.control.control.setValue(this.el.nativeElement.value);
            // }
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
