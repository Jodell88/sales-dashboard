import { Component } from '@angular/core';

export class Template {
  name: string;
  url: string;
}

const TEMPLATES: Template[] = [
  {name: 'Billing Issue', url: '/billing'},
  {name: 'Copper Migration', url: 'coppermigration'},
  {name: 'Mobile', url: '/mobile'},
  {name: 'No E-mail', url: '/noemail'},
  {name: 'Port Forwarding', url: '/portforwarding'},
  {name: 'Pricesmart', url: '/pricesmart'},
  {name: 'Referral Customer', url: '/referralcustomer'},
  {name: 'Referral Employee', url: '/referralemployee'},
  {name: 'Retention', url: '/retention'},
  {name: 'Security', url: '/security'},
  {name: 'Technical Issues', url: '/technical'},
  {name: 'TTARP', url: '/ttarp'},
  {name: 'Voice Upgrade/Downgrade', url: '/upgradedowngrade'},
  {name: 'Voice Features', url: '/voicefeatures'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  templates = TEMPLATES;
}
