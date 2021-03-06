import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent implements OnInit {

  @Input('title') titleName: string; 

  constructor() { }

  ngOnInit() {
  }

  feederMap(){
    window.open('https://www.google.com/maps/d/viewer?mid=1XII2dGmmObI_xvcXV2ARWTvPuaY', '_blank')
  }

  surepayMap(){
    window.open('https://www.google.com/maps/d/u/0/viewer?mid=1FjSB2T6KufyHo8q29pph27_B8jM&hl=en', '_blank') 
  }

  // openDialog() {
  //   let dialogRef = this.contactList.open(ContactListComponent, {
  //     // height: '90%',
  //     width: '40%',
  //   });
  // }

}
