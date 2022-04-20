import { FormBuilder, FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { TableBase } from "../../kkl-table/models/table.model";
import { ControlBase } from '../../mei-form/models/control.model';
import { KklSelectOption } from "../../mei-form/models/kkl-select.model";

export function setControls(controles: ControlBase[] | TableBase[], form: FormGroup, fb: FormBuilder, localObservables: Map<string, BehaviorSubject<KklSelectOption[]>>) {
    controles.forEach(a => {
      if(!form?.contains(a.key)) {
        switch (a.controlType) {
          // case 'checkbox':
          case 'radio':
          case 'select':
          case 'autocomplete':
            form.addControl(a.key, fb.control(null));
            if(typeof a.options === 'string') {
              const subj = new BehaviorSubject(null);
              localObservables.set(a.options, subj);
              a.options = subj;
            }
            break;
          case 'dateRange':
          case 'range':
            form.addControl(a.key, fb.group({start: fb.control(a.value?.start), end: fb.control(a.value?.end)}));
            break;
          case 'currency':
            form.addControl(a.key, fb.group({sum: fb.control(a.value?.sum), currency: fb.control(null)}));
            if(typeof a.options === 'string') {
              const subj = new BehaviorSubject(null);
              localObservables.set(a.options, subj);
              a.options = subj;
            }
            break;
          case 'costum':
            break;
          default:
            form.addControl(a.key, fb.control(a.value));
            break;
        }
      }
      if(a.disabled) {
        form.get(a.key).disable();
      }
    });
  }
