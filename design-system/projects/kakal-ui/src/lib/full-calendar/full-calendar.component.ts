import { Component, EmbeddedViewRef, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventInput } from '@fullcalendar/angular';
import heLocale from '@fullcalendar/core/locales/he';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarCardComponent } from './calendar-card/calendar-card.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'kkl-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit {

  // _data: EventInput[];
  // @Input() set data(val: EventInput[]) {
  //   if(this._data) {
  //     this._data = val;
  //     this.myCalendarComponent.options.events = val;
  //   }
  // }
  @Input() data: EventInput[];
  @Input() validRange!: { start: string, end: string };
  @Input() scrollTime: string = "07:00";
  @Input() allDayEvent: boolean = true;


  public hideComponent: boolean = false;

  @ViewChild('calendar', { static: true }) myCalendarComponent: FullCalendarComponent;
  @ViewChild('dynamic', { read: DynamicComponent }) myDynamicComponent: DynamicComponent;

  @Output() eventClicked: EventEmitter<any> = new EventEmitter();
  @Output() eventDrop: EventEmitter<any> = new EventEmitter();
  @Output() eventResize: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin, interactionPlugin],
    initialView: 'timeGridDay',
    validRange: this.validRange,
    scrollTime: this.scrollTime,
    slotEventOverlap: false,
    allDaySlot: this.allDayEvent,
    locales: [heLocale],
    selectable: true,
    titleFormat: { year: 'numeric', month: 'long', day: 'numeric' },
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: false
    },
    slotLabelFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: false
    },
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridDay,timeGridWeek,dayGridMonth',
      // right: ''
    },
    events: [],
    // initialEvents: [
    //   { title: 'event 1', date: '2022-04-10' },
    //   { title: 'event 2', date: '2022-04-11' }
    // ],


    select: (info) => {
      this.eventClicked.emit(info);
      // this.facilitiesService.findObjectInCalendarArray(info.event.id);
    },
    eventChange: (info) => {
      this.eventClicked.emit(info);
      // this.facilitiesService.findObjectInCalendarArray(info.event.id);
    },
    eventClick: (info) => {
      this.eventClicked.emit(info);
      // this.facilitiesService.findObjectInCalendarArray(info.event.id);
    },
    eventDrop: (info) => {
      this.eventDrop.emit(info);
      // this.facilitiesService.updateTimesInArray(info.event.id, [this.arrangeDate(info.event.start), this.arrangeDate(info.event.end)]);
    },
    eventResize: (info) => {
      this.eventResize.emit(info);
      // this.facilitiesService.updateTimesInArray(info.event.id, [this.arrangeDate(info.event.start), this.arrangeDate(info.event.end)]);
    },
    eventContent: (props) => {
      this.myDynamicComponent.viewContainerRef.clear();
      const componentRef = this.myDynamicComponent.viewContainerRef.createComponent(CalendarCardComponent);
      componentRef.instance.props = props;
      componentRef.changeDetectorRef.detectChanges();
      const html = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      return { html: html.innerHTML };
    },
  }

  public arrangeDate(date: Date) {
    // 2021-10-15T08:00
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T${hours <= 9 ? '0' + hours : hours}:${minutes <= 9 ? '0' + minutes : minutes}`;
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.myCalendarComponent.options.events = this.data;
    // }, 100);

  }

  ngAfterViewInit(): void {
    this.myCalendarComponent.options.events = this.data;
  }

}
