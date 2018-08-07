import { Component, OnInit } from '@angular/core';

export class Mobile {
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
  ) {}
}

@Component({
  selector: 'app-mobile-form',
  templateUrl: './mobile-form.component.html',
  styleUrls: ['./mobile-form.component.css']
})
export class MobileFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
