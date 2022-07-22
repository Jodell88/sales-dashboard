import { Component, OnInit } from '@angular/core';

export class PricesmartModel {
  constructor(
    public date?: string,
    public name?: string,
    public card?: string,
    public discount?: string
  ) {}
}

@Component({
  selector: 'app-pricesmart',
  templateUrl: './pricesmart.component.html',
  styleUrls: ['./pricesmart.component.css']
})
export class PricesmartComponent implements OnInit {

  title = 'Pricesmart';
  model = new PricesmartModel();

  reset() {
    this.model = new PricesmartModel();
  }

  constructor() { }

  ngOnInit() {
  }

}
