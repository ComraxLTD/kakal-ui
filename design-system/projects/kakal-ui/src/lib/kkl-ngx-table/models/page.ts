import { MatFormFieldAppearance } from '@angular/material/form-field';
import { MatPaginatorDefaultOptions } from '@angular/material/paginator';

/**
 * An object used to get page information from the server
 */
export class NgxPage implements MatPaginatorDefaultOptions {
  /** The current page index. */
  pageIndex: number;
  /** Number of items to display on a page. By default set to 50. */
  pageSize?: number;
  /** The set of provided page size options to display to the user. */
  pageSizeOptions?: number[];
  /** Whether to hide the page size selection UI from the user. */
  hidePageSize?: boolean;
  /** Whether to show the first/last buttons UI to the user. */
  showFirstLastButtons?: boolean;
  /** The default form-field appearance to apply to the page size options selector. */
  formFieldAppearance?: MatFormFieldAppearance;
}
