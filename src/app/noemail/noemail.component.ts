import { Component, OnInit } from '@angular/core';

export class EmailModel {
  constructor(
    public date?: string,
    public name?: string,
    public issue?: string
  ) {}
}

@Component({
  selector: 'app-noemail',
  templateUrl: './noemail.component.html',
  styleUrls: ['./noemail.component.css']
})
export class NoemailComponent implements OnInit {

  title = 'No E-mail';
  model = new EmailModel();

  reset() {
    this.model = new EmailModel();
  }

  constructor() { }

  ngOnInit() {
  }

}
