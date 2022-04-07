import { Component, EmbeddedViewRef, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventInput } from '@fullcalendar/angular';
import { Observable, Subscription } from 'rxjs';

import heLocale from '@fullcalendar/core/locales/he';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarCardComponent } from './calendar-card/calendar-card.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { Input } from '@angular/core';

@Component({
  selector: 'kkl-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() data: EventInput[];
  @Input() validRange!: { start: string, end: string };

  public calendarEventsArr$!: Observable<EventInput[]>;
  public value!: EventInput[];
  public valueSub: Subscription;
  public hideComponent: boolean = false;

  @ViewChild('calendar', { static: true }) myCalendarComponent: FullCalendarComponent;
  @ViewChild('dynamic', { read: DynamicComponent }) myDynamicComponent: DynamicComponent;

  constructor() { }

  public calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin, interactionPlugin],
    initialView: 'timeGridDay',
    validRange: this.validRange,
    scrollTime: '07:00',
    slotEventOverlap: false,
    allDaySlot: false,
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
      right: 'timeGridDay,timeGridWeek,dayGridMonth'
      // right: ''
    },
    initialEvents: [],
    eventClick: (info) => {
      // this.facilitiesService.findObjectInCalendarArray(info.event.id);
    },
    eventDrop: (info) => {
      // this.facilitiesService.updateTimesInArray(info.event.id, [this.arrangeDate(info.event.start), this.arrangeDate(info.event.end)]);
    },
    eventResize: (info) => {
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
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T${hours <= 9 ? '0' + hours : hours}:${minutes <= 9 ? '0' + minutes : minutes}`
  }

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.myCalendarComponent);
    console.log(this.myCalendarComponent.options);

    this.myCalendarComponent.options.events = this.data;
    // if (this.myCalendarComponent) {
    //   this.myCalendarComponent.options.events = this.data;
    // } else {
    //       setTimeout(() => {
    //         this.myCalendarComponent.options.events = this.data;
    //       }, 500);
    //     }
    // if (this.myCalendarComponent) {
    //       this.myCalendarComponent.options.events = this.data;
    //     } else {
    //       setTimeout(() => {
    //         this.myCalendarComponent.options.events = this.data;
    //       }, 500);
    //     }
    // this.valueSub = this.facilitiesService.getCalendarEventsArr().subscribe(value => {
    //   if (this.myCalendarComponent) {
    //     this.myCalendarComponent.options.events = value;
    //   } else {
    //     setTimeout(() => {
    //       this.myCalendarComponent.options.events = value;
    //     }, 500);
    //   }

    // });


  }

}
