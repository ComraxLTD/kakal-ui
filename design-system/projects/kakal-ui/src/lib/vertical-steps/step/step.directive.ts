import { Directive, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Directive({ selector: 'kkl-step' })
export class StepDirective {
  @Input() id!: string;
  @Input() label: string;
  @Input() key: string;
  @Input() formGroup: FormGroup;
}
