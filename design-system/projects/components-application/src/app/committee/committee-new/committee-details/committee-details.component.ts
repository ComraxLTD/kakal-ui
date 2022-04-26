import { Component, OnInit } from '@angular/core';
import {
  FormDataSource,
  FormService,
  QuestionGroupModel,
  RowActionModel,
  TableBase,
} from '../../../../../../kakal-ui/src/public-api';

import {
  CommitteeDetails,
  CommitteeDetailsService,
} from './committee-details.service';

@Component({
  selector: 'app-committee-details',
  templateUrl: './committee-details.component.html',
  styleUrls: ['./committee-details.component.scss'],
  providers: [FormDataSource, FormService],
})
export class CommitteeDetailsComponent implements OnInit {
  dataSource: any[] = [
    {
      gush: '3',
      division: '4',
      estateDetails: 1,
      sum: 32,
      pricePerArea: 43,
      address: 'dsjkds',
      transaction: 32,
      subTransaction: 43,
      process: '3232',
      owners: 'dsds',
    },
    {
      gush: '3',
      division: '4',
      estateDetails: 1,
      sum: 32,
      pricePerArea: 43,
      address: 'dsjkds',
      transaction: 32,
      subTransaction: 43,
      process: '3232',
      owners: 'dsds',
    },
  ];
  columns: TableBase[] = [
    {
      key: 'gush',
      label: 'גוש',
    },
    {
      key: 'division',
      label: 'חלקה',
    },
    {
      key: 'divisionArea',
      label: 'שטח החלקה',
      button: { type: 'inlineExpand', icon: 'keyboard_arrow_down' },
    },
    {
      key: 'sum',
      label: 'סכום',
    },
    {
      key: 'pricePer',
      label: 'מחיר למ"ר',
    },
    {
      key: 'address',
      label: 'כתובת',
    },
    {
      key: 'dealType',
      label: 'סוג העסקה',
    },
    {
      key: 'subDealType',
      label: 'תת סוג העסקה',
    },
    {
      key: 'processor',
      label: 'מעבדים',
      button: { type: 'inlineExpand', icon: 'keyboard_arrow_down' },
    },
    {
      key: 'owners',
      label: 'בעלים',
      button: { type: 'inlineExpand', icon: 'keyboard_arrow_down' },
    },
  ];

  // every object in the rowActions array is a button that will appear on every row on the left side of the table
  rowActions: RowActionModel[] = [
    { type: 'inlineEdit', icon: 'edit', label: 'Edit' },
    { type: 'inlineDelete', icon: 'delete', label: 'Delete' },
    { type: 'visibility', icon: 'visibility', label: 'Show' },
  ];

  committeeGroup!: QuestionGroupModel<CommitteeDetails>;
  obsName!: string;
  date!: Date;

  constructor(
    private committeeDetailsService: CommitteeDetailsService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.committeeGroup = this.setCommitteeGroup();
    this.obsName = 'ישראל ישראלי';
    this.date = new Date();
  }

  private setCommitteeGroup(): QuestionGroupModel<CommitteeDetails> {
    const questions = this.committeeDetailsService.getFormQuestions();
    return this.formService.createQuestionGroup({
      questions,
      options: { gridProps: { cols: 4, gutter: 2 } },
    });
  }

  // changing the description above the table according to the action clicked
  onClicked(event: any) {}

  onEdit(event: any) {}

  onDelete(event: any) {}
}
