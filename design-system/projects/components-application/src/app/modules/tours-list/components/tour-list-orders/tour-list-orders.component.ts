import { Component, OnInit } from '@angular/core';
import { TableBase }from '../../../../../../../kakal-ui/src/public-api';


@Component({
  selector: 'app-tour-list-orders',
  templateUrl: './tour-list-orders.component.html',
  styleUrls: ['./tour-list-orders.component.scss']
})
export class TourListOrdersComponent implements OnInit {

dataSource:any[]=[]

columns:TableBase[]=[
  {key:'tourId', label:'מס טיול', button:{icon:'',type:'tourId'}},
  {key:'tourName',label:'שם הטיול',},
  {key:'leavingDate',label:'תאריך יציאה',},
  {key:'destenation',label:'יעד',},
  {key:'tourAuth',label:'אישור הטיול',},
  {key:'providerOrder',label:'הזמנת ספקים',},
  {key:'status',label:'סטטוס',},
]

  constructor() { }

  ngOnInit(): void {
  }

}
