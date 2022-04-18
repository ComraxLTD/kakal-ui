import { NgModule } from "@angular/core";
import { ArrIncludesPipe } from "./pipes/arr-includes.pipe";
import { ArrIndexPipe } from "./pipes/arr-index.pipe";
import { TableCellPipe } from "./pipes/table-cell-pipe.pipe";
import { TableGroupCellPipe } from "./pipes/table-group-cell.pipe";

@NgModule({
  declarations: [
    TableCellPipe,
    TableGroupCellPipe,
    ArrIncludesPipe,
    ArrIndexPipe,
 ],
  imports: [
  ],
  exports: [
    TableCellPipe,
    TableGroupCellPipe,
    ArrIncludesPipe,
    ArrIndexPipe,
  ],
})
export class MeiServiceModule { }
