import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from './services/auth-services.service';

import { ModalRegisterComponent } from './shared/modal-register/modal-register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  outImgUrl: string = "../assets/img/LandinPage/body/button_off.png";
  outImgStatD   = '../assets/img/LandinPage/body/button_off.png';
  outImgStatA   = '../assets/img/LandinPage/body/button_on.png';
  title = 'FireStadium';
  constructor(private router: Router, public authService: AuthServicesService) { }
  changeImg(mouseStatus:number){
    if(mouseStatus == 1){
      this.outImgUrl = this.outImgStatA;
    }else if(mouseStatus == 0){
      this.outImgUrl = this.outImgStatD;
    }
    
  }


}
