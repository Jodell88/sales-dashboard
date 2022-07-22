import { Component, OnInit } from '@angular/core';
import { BillingCycleService} from '../billing-cycle.service';
import { PackageDataService } from '../package-data.service';

export class Security{
  constructor(
    public date?: string,
    public account?: string,
    public name?: string,
    public address?: string,
    public id?: string,
    public contactname?: string,
    public primaryContact?: string,
    public secondaryContact?: string,
    public product?: string,
    public installDetails?: string,
    public coordinates?: string,
    public cycle?: string,
    public birthDate?: string,
    public issueDate?: string,
    public expiryDate?: string,
    public occupation?: string,
    public employer?: string
  ) {}
}

@Component({
  selector: 'app-security-form',
  templateUrl: './security-form.component.html',
  styleUrls: ['./security-form.component.css']
})
export class SecurityFormComponent implements OnInit {

  title = 'Security';
  cycles: any = [];
  products: any = [];
  model = new Security();

  reset() {
    this.model = new Security();
  }

  constructor(private packageService: PackageDataService, private billing: BillingCycleService) { }

  ngOnInit() {
    this.products = this.packageService.SECURE;
    this.cycles = this.billing.cycles;
  }

}
