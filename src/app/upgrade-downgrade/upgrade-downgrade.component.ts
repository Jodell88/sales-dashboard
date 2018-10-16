import { Component, OnInit } from '@angular/core';

export class UpgradeDowngrade {
  constructor(
    public oldPackage?: string,
    public newPackage?: string,
    public crm?: string
  ) {}
}

@Component({
  selector: 'app-upgrade-downgrade',
  templateUrl: './upgrade-downgrade.component.html',
  styleUrls: ['./upgrade-downgrade.component.css']
})
export class UpgradeDowngradeComponent implements OnInit {

  title = 'Voice Upgrade / Downgrade';

    options = [
    {value: 'No'},
    {value: 'Yes'}
  ];

  model = new UpgradeDowngrade();

  reset(){
    this.model = new UpgradeDowngrade();
  }

  constructor() { }

  ngOnInit() {
  }

}
