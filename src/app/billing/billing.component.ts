import { Component, OnInit } from '@angular/core';
import { BillingCycleService} from '../billing-cycle.service';

export class BillModel {
  constructor(
    public invoice?: string,
    public cycle?: string,
    public comments?: string
  ) {}
}

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  title = 'Billing Query';

  model = new BillModel();

  cycles: any = [];

  reset() {
    this.model = new BillModel();
  }

  constructor( private cycleService: BillingCycleService) { }

  ngOnInit() {
    this.cycles = this.cycleService.cycles;
  }

}
