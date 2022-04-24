import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { DisplayData } from '../../../../../../kakal-ui/src/public-api';
import {
  RecordCaseDetailsService,
  RecordCateDetails,
} from '../record-case-details.service';

@Component({
  selector: 'app-case-details-data',
  templateUrl: './case-details-data.component.html',
  styleUrls: ['./case-details-data.component.scss'],
})
export class CaseDetailsDataComponent implements OnInit {
  displayData!: DisplayData<RecordCateDetails>[];

  recordCaseDetailsSource$!: BehaviorSubject<RecordCateDetails>;
  recordCaseDetails$!: Observable<RecordCateDetails>;

  constructor(private recordCaseDetailsService: RecordCaseDetailsService) {}

  async ngOnInit(): Promise<void> {
    const recordCaseDetails = await this.getRecordCaseDetails();

    this.recordCaseDetailsSource$ = new BehaviorSubject<RecordCateDetails>(
      recordCaseDetails
    );

    this.recordCaseDetails$ = this.recordCaseDetailsSource$.asObservable();

    this.displayData = this.getDisplayData();
  }

  private getRecordCaseDetails(): Promise<RecordCateDetails> {
    return firstValueFrom(
      this.recordCaseDetailsService.getRecordCaseDetailsInfo()
    );
  }

  private getDisplayData() {
    return this.recordCaseDetailsService.getInfoRecordTemplate();
  }
}
