import { Component, OnInit } from '@angular/core';

export class TtarpModel {
  constructor(
    public date?: string,
    public agent?: string,
    public card?: string,
    public expiration?: string,
    public discount?: string,
  ) {}
}

@Component({
  selector: 'app-ttarp',
  templateUrl: './ttarp.component.html',
  styleUrls: ['./ttarp.component.css']
})
export class TtarpComponent implements OnInit {

  title = 'TTARP';

  model = new TtarpModel();

  reset() {
    this.model = new TtarpModel();
  }

  constructor() { }

  ngOnInit() {
  }

}
