import { Component, OnInit } from '@angular/core';

export class Forwarding {
  constructor(
    public lan?: string,
  ) {}
}

@Component({
  selector: 'app-port-forwarding',
  templateUrl: './port-forwarding.component.html',
  styleUrls: ['./port-forwarding.component.css']
})
export class PortForwardingComponent implements OnInit {

  title = 'Port Forwarding';

  lans = ['LAN 2', 'LAN 3', 'LAN 4'];

  model = new Forwarding();

  reset() {
    this.model = new Forwarding();
  }

  constructor() { }

  ngOnInit() {
  }

}
