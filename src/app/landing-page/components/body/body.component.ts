import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  outImgUrl: string = "../assets/img/LandinPage/body/button_off.png";
  outImgStatD   = '../assets/img/LandinPage/body/button_off.png';
  outImgStatA   = '../assets/img/LandinPage/body/button_on.png';
  title = 'FireStadium';

  changeImg(mouseStatus:number){
    if(mouseStatus == 1){
      this.outImgUrl = this.outImgStatA;
    }else if(mouseStatus == 0){
      this.outImgUrl = this.outImgStatD;
    }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
