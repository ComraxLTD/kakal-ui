import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarCardComponent } from "./calendar-card/calendar-card.component";
import { DynamicComponent } from "./dynamic/dynamic.component";
import { CalendarComponent } from "./full-calendar.component";

FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]);

@NgModule({
    imports:[FullCalendarModule,CommonModule],
    declarations:[DynamicComponent,CalendarCardComponent,CalendarComponent],
    exports:[DynamicComponent,CalendarCardComponent,CalendarComponent]
})

export class KKLFullCalendarModule {}