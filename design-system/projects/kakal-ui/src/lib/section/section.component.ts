import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kkl-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  
  @Input() label: string;
  @Input() subLabel: string;

  constructor() {}

  ngOnInit(): void {}
}