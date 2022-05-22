import { HostBinding } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[plContentAlignment]'
})
export class ContentAlignmentDirective implements OnInit {

  @Input() buttonJustifyContent: {isMobile: boolean, isNumber: boolean};
  @Input() justifyContent: {isMobile: boolean, isNumber: boolean};

  @HostBinding('style.justify-content') public justifyContentValue:string

  ngOnInit(): void {
    if(this.buttonJustifyContent){
      this.justifyContentValue = this.buttonAlignment() + ' !important'
    }
    if(this.justifyContent){
      this.justifyContentValue = this.alignment() + ' !important'
    }
  }

  buttonAlignment(){
    if(this.buttonJustifyContent.isMobile) return 'space-between'
    if(this.buttonJustifyContent.isNumber) return 'center'
    return 'start'
  }

  alignment(){
    if(!this.justifyContent.isNumber) return 'start'
    if(!this.justifyContent.isMobile) return 'center'
    return 'start'
  }

  constructor() { }

}
