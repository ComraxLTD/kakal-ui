import { PaginationInstance } from "ngx-pagination";

export class PaginationModel {
  constructor(
    public paginate: boolean,
    public paginator: PaginationInstance,
  ) {

  }
}
