import { Component, OnInit } from '@angular/core';
import {
  RowActionModel,
  TableBase,
} from '../../../kakal-ui/src/public-api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CardAddComponent } from '../../../kakal-ui/src/lib/cards/card-add/card-add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dataSource!: any[]

  description: string = ''

  constructor(
    // private comraxTablesService: ComraxTablesService,
  ) { }

  ngOnInit(): void {
    // this.comraxTablesService.getTableObjects().subscribe(res => { this.dataSource = res })
    this.description = 'Actions Table'
    this.dataSource = [
      {
        key: 'key',
        label: 'label',
        controlType: 'text',
      }
    ]
  }

  columns: TableBase[] = [
    { key: 'id', label: 'Id', controlType: 'number', button: {type: 'visibility', icon: ''} },
    { key: 'name', label: 'Name', controlType: 'text', },
    { key: 'yearsOfExperience', label: 'YearsOfExperience', controlType: 'number', },
    { key: 'occupation', label: 'Occupation', controlType: 'text', },
    { key: 'city', label: 'עיר', controlType: 'select'},
    { key: 'dob', label: 'תאריך', controlType: 'date', colIcon:'tree'},
  ];

  rowActions: RowActionModel[] = [
    {
      type: 'inlineEdit',
      icon: 'edit',
      label: 'Edit'
    },
    {
      type: 'inlineDelete',
      icon: 'cancel',
      label: 'Delete'
    },
    {
      type: 'visibility',
      icon: 'visibility',
      label: 'Show'
    },
  ]

  onClicked(event: any) {
    this.description = `Actions Table: (ID: ${event.row.id}, ActionName: ${event.action}, City: ${event.row.city.label}, Date: ${event.row.dob}, Occupation: ${event.row.occupation}, YearsOfExperience: ${event.row.yearsOfExperience})`
  }

  onEdit(event:any){
    this.description = `Edit Action: (ID: ${event.id}, Name: ${event.name}, City: ${event.city.label}, Date: ${event.dob}, Occupation: ${event.occupation}, YearsOfExperience: ${event.yearsOfExperience})`
  }

  onDelete(event:any){
    this.description = `Delete Action: (ID: ${event.id}, Name: ${event.name}, City: ${event.city.label}, Date: ${event.dob}, Occupation: ${event.occupation}, YearsOfExperience: ${event.yearsOfExperience})`
  }
}
