import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormChangeEvent, FormDataSource, Question, RowActionModel, TableBase } from '../../../../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss'],

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
