import { Injectable } from '@angular/core';
import { RowActionModel, TableBase } from '../../../../../../../../../kakal-ui/src/public-api';

@Injectable({
  providedIn: 'root',
})
export class ReservationSummaryService {
  dataSource: any[] = [
    {
      type: 'פעילות',
      amount: 1,
      price: 1,
      chargedProvider: 123,
      chargedCustomer: 12,
    },
    {
      type: 'פעילות',
      amount: 1,
      price: 1,
      chargedProvider: 123,
      chargedCustomer: 12,
    },
    {
      type: 'פעילות',
      amount: 1,
      price: 1,
      chargedProvider: 123,
      chargedCustomer: 12,
    },
    {
      type: 'פעילות',
      amount: 1,
      price: 1,
      chargedProvider: 123,
      chargedCustomer: 12,
    },
    {
      type: 'פעילות',
      amount: 1,
      price: 1,
      chargedProvider: 123,
      chargedCustomer: 12,
    },
    {
      type: 'פעילות',
      amount: 1,
      price: 1,
      chargedProvider: 123,
      chargedCustomer: 12,
    },
  ];

  expandDatasource: any[] = [
    {
      date: new Date(),
      activity: 'פעילונ',
      fromTime: '11:30',
      untilTime: '11:30',
      comments: 'העורת',
      count: 56,
      price: 1,
      chargedProvider: 123,
      chargedCustomer: 12,
    },
  ];

  columns: TableBase[] = [
    {
      key: 'type',
      label: 'סוג',
      button: { type: 'inlineExpand', icon: '' },
    },
    {
      controlType: 'toggle',
      key: 'amount',
      label: 'כמות',
      button: { type: 'inlineExpand', icon: '' },
    },
    { key: 'price', label: 'מחיר', colIcon: 'add' },
    { key: 'chargedProvider', label: 'חיוב ספק' },
    { key: 'chargedCustomer', label: 'חיוב לקוח' },
  ];

  expandColumns: TableBase[] = [
    { key: 'date', label: 'תאריך', controlType: 'date' },
    { key: 'activity', label: 'פעילות', controlType: 'text' },
    { key: 'fromTime', label: 'משעה', controlType: 'text' },
    { key: 'untilTime', label: 'פעד שעה', controlType: 'text' },
    { key: 'comments', label: 'הערות', controlType: 'text' },
    { key: 'count', label: 'כמות', controlType: 'text' },
    { key: 'price', label: 'מחיר', controlType: 'text' },
    { key: 'chargedProvider', label: 'חיוב ספק', controlType: 'number' },
    { key: 'chargedCustomer', label: 'חיוב לקוח', controlType: 'number' },
  ];

  rowActions: RowActionModel[] = [
    {
      type: 'inlineEdit',
      icon: 'edit',
      label: 'Edit',
    },
    {
      type: 'inlineDelete',
      icon: 'cancel',
      label: 'Delete',
    },
  ];

  canceldExpandColumns: TableBase[] = [
    { key: 'date', label: 'תאריך', controlType: 'date' },
    { key: 'provider', label: 'ספק', controlType: 'text' },
    { key: 'item', label: 'פריט', controlType: 'text' },
    { key: 'sleepingCount', label: 'מס לנים', controlType: 'text' },
    { key: 'comments', label: 'הערות', controlType: 'text' },
    { key: 'count', label: 'כמות', controlType: 'text' },
    { key: 'price', label: 'מחיר', controlType: 'text' },
    { key: 'chargedProvider', label: 'חיוב ספק', controlType: 'number' },
    { key: 'chargedCustomer', label: 'חיוב לקוח', controlType: 'number' },
  ];
  canceldExpandDatasource: any[] = [
    {
      date: new Date(),
      provider: 'יוני',
      item: 'לינה',
      sleepingCount: '130',
      comments: 'העורת',
      count: 56,
      price: 1,
      chargedProvider: 123,
      chargedCustomer: 12,
    },
  ];

  constructor() {}
}
