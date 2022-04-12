import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { KKLIconModule } from "../icon/icon.module";
import { CalendarCardComponent } from "./calendar-card/calendar-card.component";
import { DynamicComponent } from "./dynamic/dynamic.component";
import { CalendarComponent } from "./full-calendar.component";
import { FlexLayoutModule } from "@angular/flex-layout";

FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]);

@NgModule({
    imports:[FullCalendarModule,CommonModule,KKLIconModule,FlexLayoutModule],
    declarations:[DynamicComponent,CalendarCardComponent,CalendarComponent],
    exports:[DynamicComponent,CalendarCardComponent,CalendarComponent]
})

export class KKLFullCalendarModule {}
