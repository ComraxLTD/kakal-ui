import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { of, map, firstValueFrom } from 'rxjs';
import { DialogService, Question, OptionMap, SelectOption } from '../../../../../kakal-ui/src/public-api';

@Injectable({
  providedIn: 'root',
})
export class RecordsRegistrationService {
  constructor(public dialog: MatDialog, private dialogService: DialogService) {}

  private questions: Question[] = [
    {
      key: 'upload',
      controlType: 'upload',
      label: 'לחץ להעלאת קובץ',
    },
    {
      key: 'registerType',
      controlType: 'select',
      label: 'סוג רישום',
    },
    {
      key: 'registerDate',
      controlType: 'date',
      label: 'תאריך רישום',
    },
    {
      key: 'billNumber',
      controlType: 'number',
      label: 'מספר שטר',
    },
    {
      key: 'asmacta',
      label: 'אסמכתא בטאבו',
    },
    {
      key: 'topic',
      label: 'אסמכתא רישום בטאבו',
    },
    {
      key: 'content',
      controlType: 'texteditor',
      gridProps: { cols: 4, rows: 3 },
    },
  ];

  getQuestions(): Question[] {
    return [...this.questions];
  }

  getOptionsMap(): Promise<OptionMap> {
    // imitate http request
    const optionMap$ = of([
      { label: 'הערה אזהרה', value: 'warnings' },
      { label: 'רישום בטאבו', value: 'taboo' },
    ] as SelectOption[]).pipe(
      map((options: SelectOption[]) => {
        return {
          ['registerType']: options,
        };
      })
    );

    return firstValueFrom(optionMap$);
  }

  openDialog(data?: any) {
    const config: MatDialogConfig = {
      data: {
        title: 'אסמכתא רישום בטאבו',
        message: '! אסמכתא נשלחה בהצלחה למנהל ספר נכסים',
        ...data,
      },
      panelClass: ['kkl-success-dialog'],
    };

    // this.dialog.open(DialogSuccessComponent, config);
  }
}
