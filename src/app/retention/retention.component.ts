import { Component, OnInit } from '@angular/core';

export class RetentionModel {
  constructor(
    public agent?: string,
    public custName?: string,
    public accountNumber?: string,
    public reason?: string
  ) {}
}


@Component({
  selector: 'app-retention',
  templateUrl: './retention.component.html',
  styleUrls: ['./retention.component.css']
})
export class RetentionComponent implements OnInit {

  title = 'Retention';

  model = new RetentionModel();

  reset() {
    this.model = new RetentionModel();
  }

  constructor() { }

  ngOnInit() {
  }

}
