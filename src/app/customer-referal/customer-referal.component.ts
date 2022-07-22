import { Component, OnInit } from '@angular/core';

export class CustReferralModel {
  constructor(
    public date?: string,
    public refName?: string,
    public crm?: string,
    public contact?: string,
    public refBy?: string,
    public refCRM?: string
  ) {}
}

@Component({
  selector: 'app-customer-referal',
  templateUrl: './customer-referal.component.html',
  styleUrls: ['./customer-referal.component.css']
})
export class CustomerReferalComponent implements OnInit {

  title = 'Customer Referral';
  model = new CustReferralModel();

  reset() {
    this.model = new CustReferralModel();
  }

  constructor() { }

  ngOnInit() {
  }

}
