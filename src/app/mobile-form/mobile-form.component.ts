import { Component, OnInit } from '@angular/core';

export class MobileModel {
  constructor(
    public date?: string,
    public agent?: string,
    public type?: string,
    public crm?: string,
    public custName?: string,
    public id?: string,
    public fu?: string,
    public mobileNumber?: string,
    public balance?: string,
    public mobilePlan?: string,
    public handset?: string,
    public handsetType?: string,
    public simSwap?: string,
    public accountLevel?: string,
    public subscriberLevel?: string,
    public subscriptionLevel?: string,
    public imei?: string,
    public imsi?: string,
    public contract?: string,
  ) {}
}

@Component({
  selector: 'app-mobile-form',
  templateUrl: './mobile-form.component.html',
  styleUrls: ['./mobile-form.component.css']
})
export class MobileFormComponent implements OnInit {

  title = 'Mobile';

  model = new MobileModel();

  reset() {
    this.model = new MobileModel();
  }

  constructor() { }

  ngOnInit() {
  }

}
