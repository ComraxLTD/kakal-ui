import {Directive, ElementRef, HostListener} from '@angular/core';
const twoDigits: string[] = ['02', '03', '04', '08', '09'];
const threeDigits: string[] = ['05', '07'];
@Directive({
  selector: '[phoneInput]'
})
export class PhoneInputDirective {
  constructor(
      private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.value = this.transform(this.elementRef.nativeElement.value);
  }

  transform(value: string) {
    if (!value) return "";
    if(twoDigits.includes(value.substring(0, 2))) {
      let trim = value.replace(/\D/g, '').substring(0,9); // Remove non-digits and trim
      if(trim.length > 2) {
        if(trim.length > 5) {
          return trim.substring(0, 2) + '-' + trim.substring(2, 5) + '-' + trim.substring(5);
        } else {
          return trim.substring(0, 2) + '-' + trim.substring(2);
        }
      } else {
        return trim;
      }
    } else if(threeDigits.includes(value.substring(0, 2))) {
      let trim = value.replace(/\D/g, '').substring(0,10); // Remove non-digits and trim
      if(trim.length > 3) {
        if(trim.length > 6) {
          return trim.substring(0, 3) + '-' + trim.substring(3, 6) + '-' + trim.substring(6);
        } else {
          return trim.substring(0, 3) + '-' + trim.substring(3);
        }
      } else {
        return trim;
      }
    } else {
      if(value.charAt(0) === 'x' || value.charAt(0) === '+') {
        return value.charAt(0) + value.substring(1).replace(/\D/g, '');
      } else {
        return value.replace(/\D/g, '');
      }
    }
  }

  @HostListener("keyup", ["$event.target.value"])
  change() {
    this.elementRef.nativeElement.value = this.transform(this.elementRef.nativeElement.value);
  }


  @HostListener("paste", ["$event"])
  onPaste(event: ClipboardEvent) {
    this.elementRef.nativeElement.value = this.transform(this.elementRef.nativeElement.value);
  }

}
