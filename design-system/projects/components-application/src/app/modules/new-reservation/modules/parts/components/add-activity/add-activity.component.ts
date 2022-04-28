import { Component, Input, OnInit } from '@angular/core';
import { FilterLookups, FormChangeEvent, FormDataSource, Question, RowActionModel, TableBase } from '../../../../../../../../../kakal-ui/src/public-api';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss'],
  providers:[FormDataSource]

})
export class AddActivityComponent implements OnInit {

  @Input() questions!: Question[]
  @Input() dataSource!: any[]
  @Input() columns!: TableBase[]
  @Input() rowActions!: RowActionModel[]
  @Input() buttonLabel!: string

  constructor(private formDataSource:FormDataSource) { }

  ngOnInit(): void {
    this.buttonLabel = this.buttonLabel || 'הוסף חדש'
  }

  // DOM EVENTS SECTION
  onClick() {
    console.log('onClick');
  }

  //listen to form changes
  onFormChanged(event:FormChangeEvent){
    this.formDataSource.dispatch(event)
  }

}
