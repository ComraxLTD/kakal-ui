import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectOption } from '../../form/models/question-select.model';
import { QuestionAutocompleteModel } from '../../form/models/question-autocomplete';
import { FormDataSource,FormOption } from '../../form/models/form-data-source.model';
import { FormService} from '../../form/services/form.service';

@Component({
  selector: 'pl-form-autocomplete-ex',
  templateUrl: './form-autocomplete-ex.component.html',
  styleUrls: ['./form-autocomplete-ex.component.scss']
})
export class FormAutocompleteExComponent implements OnInit {
  options:SelectOption[]

  @Input() public question: QuestionAutocompleteModel;
  @Input() public control: FormControl;
  @Input() public formDataSource: FormDataSource;
  @Input() public optionsSlot: ElementRef;

  @Output() autocomplete: EventEmitter<FormOption> = new EventEmitter();
  @Output() optionSelected: EventEmitter<FormOption> = new EventEmitter();
  @Output() multiOptionsSelected: EventEmitter<FormOption> = new EventEmitter();


  constructor(private formService:FormService) { }

  ngOnInit(): void {
this.control=this.formService.getFieldControl(this.question)
this.options=[
  {value:'first',label:'first'},
  {value:'second',label:'second'},
  {value:'thierd',label:'thierd'},
  {value:'foruth',label:'foruth'},
  {value:'fifth',label:'fifth'},
  {value:'sixth',label:'sixth'},
]
  }

onAutoComplete(obj):void{
  console.log('asdasd');
   
  const options=this.options.filter(item=>item.value.includes(obj.value))
  this.question={...this.question,options:options}
}

}
