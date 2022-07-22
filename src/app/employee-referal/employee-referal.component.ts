import { Component, OnInit } from '@angular/core';

export class EmpReferralModel {
  constructor(
    public date?: string,
    public refName?: string,
    public crm?: string,
    public contact?: string,
    public refBy?: string,
    public refContact?: string
  ) {}
}

@Component({
  selector: 'app-employee-referal',
  templateUrl: './employee-referal.component.html',
  styleUrls: ['./employee-referal.component.css']
})
export class EmployeeReferalComponent implements OnInit {

  title = 'Customer Referral';
  model = new EmpReferralModel();

  reset() {
    this.model = new EmpReferralModel();
  }

  constructor() { }

  ngOnInit() {
  }

}
