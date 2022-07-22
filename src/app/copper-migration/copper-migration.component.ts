import { Component, OnInit } from '@angular/core';

export class CopperModel {
  constructor(
    public area?: string,
    public exchange?: string,
    public number?: string
  ) {}
}
@Component({
  selector: 'app-copper-migration',
  templateUrl: './copper-migration.component.html',
  styleUrls: ['./copper-migration.component.css']
})
export class CopperMigrationComponent implements OnInit {

  title = 'Copper to Fiber Migration';
  model = new CopperModel();

  reset() {
    this.model = new CopperModel();
  }

  constructor() { }

  ngOnInit() {
  }

}
