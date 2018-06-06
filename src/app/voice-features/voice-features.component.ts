import { Component, OnInit } from '@angular/core';

export class Features {
  constructor(
    public featureAdded?: string,
    public cost?: string,
    public crm?: string,
    public featureRemoved?: string,
    public verified?: string,
    public serviceNumber?: string
  ) {}
}

@Component({
  selector: 'app-voice-features',
  templateUrl: './voice-features.component.html',
  styleUrls: ['./voice-features.component.css']
})
export class VoiceFeaturesComponent implements OnInit {

  title = 'Voice Features';

  features: any = [];

  options = [
    {value: 'No'},
    {value: 'Yes'}
  ];

  model = new Features();

  reset(){
    this.model = new Features();
  }


  constructor() { }

  ngOnInit() {
  }

}
