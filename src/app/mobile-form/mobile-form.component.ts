import { Component, OnInit } from '@angular/core';

export class MobileModel {
  constructor(
    public schedule?: string,
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
    public cycle?: string,
    public imei?: string,
    public sim?: string,
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

  transaction = [
    { value: 'Post to Post' },
    { value: 'Pre to Post' },
    { value: 'Port In' },
    { value: 'New Post' }
  ];

  mobilePlans = [
    { value: 'Everything LTE 199' },
    { value: 'Unlimited 349' },
    { value: 'Everything LTE PRE. 599' }
  ];

  installUpgrade = [
    { value: 'New Sale' },
    { value: 'Opt In' },
    { value: 'IPTV/Mobile' },
    { value: 'Voice/Mobile' },
    { value: 'STB/Mobile' },
    { value: 'Secure/Mobile' },
  ];

  reset() {
    this.model = new MobileModel();
  }

  constructor() { }

  ngOnInit() {
  }

}
