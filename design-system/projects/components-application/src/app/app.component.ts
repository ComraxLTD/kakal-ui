import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OptionsModel, ControlBase, TableBase, GridProps} from '../../../kakal-ui/src/public-api'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

 formGroup!: FormGroup;

 ngOnInit(): void {

   this.formGroup = new FormGroup({})
 }

 // much like the kkl-form, gridProps are an optional input for adjusting the layout of the advanced search
 gridProps: GridProps = {
   // make sure you add buttonCols, to add a place for the button within the advanced search
   buttonCols: 1
 }

 // the text of the button within the advanced search
 buttonLabel: string = 'שמור'

 // to be deleted next version
 tableFilters: ControlBase[] = [];

 controls: ControlBase[] = [
   // the first input of the advanced search is always visible, so it does not add a chip, but it is still interacting with the table
   { key: 'occupation', label: 'Occupation', controlType: 'text'},
   { key: 'date', controlType: 'date', label: 'date' }
 ];

 options: OptionsModel[] = [
   {
     //this key should be the same
     key: 'firstQuestion',
     val: [
       { label: 'first select option1', value: 0, },
       { label: 'first select option2', value: 1, disabled: true },
       { label: 'first select option3', value: 2, },
       { label: 'first select option4', value: 3, },
     ],
   },
   {
     //this key should be the same
     key: 'secondQuestion',
     val: [
       { label: 'second select option1', value: 1 },
       { label: 'second select option2', value: 2 },
       { label: 'second select option3', value: 3 },
     ],
   },
   {
     //this key should be the same
     key: 'autocomplete',
     val: [
       { label: 'A first autocomplete option1', value: 1 },
       { label: 'B first autocomplete option2', value: 2 },
       { label: 'C first autocomplete option3', value: 3 },
     ],
   },
   {
     //this key should be the same
     key: 'secondAutocomplete',
     val: [
       { label: 'A second autocomplete option1', value: 1 },
       { label: 'B second autocomplete option2', value: 2 },
       { label: 'C second autocomplete option3', value: 3 },
     ],
   },
 ];

 onOpenChanged(event: any){
   console.log('onOpenChanged');
   console.log(event);
 }

 onQueryChanged(event: any){
   console.log("onQueryChanged");
   console.log(event);
 }

 onSelectChanged(event: any){
   console.log("onSelectChanged");
   console.log(event);
 }

 onValueChanged(event: any){
   console.log("onValueChanged");
   console.log(event);
 }

 onFocusChanged(event: any){
   console.log("onFocusChanged");
   console.log(event);
 }

 onSubmitEvent(event: any){
   console.log("onSubmitEvent");
   console.log(event);
 }
}
