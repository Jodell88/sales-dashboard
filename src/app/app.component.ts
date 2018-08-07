import { Component } from '@angular/core';

export class Template {
  name: string;
  url: string;
}

const TEMPLATES: Template[] = [
  {name: 'Billing Issue', url: '/billing'},
  {name: 'Mobile', url: '/mobile'},
  {name: 'Port Forwarding', url: '/portforwarding'},
  {name: 'Retention', url: '/retention'},
  {name: 'Security', url: '/security'},
  {name: 'Technical Issues', url: '/technical'},
  {name: 'Upgrade/Downgrade', url: '/upgradedowngrade'},
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
