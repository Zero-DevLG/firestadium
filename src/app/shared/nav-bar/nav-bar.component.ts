import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  NgbModal,NgbModalRef  } from '@ng-bootstrap/ng-bootstrap'

import { ModalRegisterComponent } from 'src/app/shared/modal-register/modal-register.component';
import { dataUser, user } from '../../interfaces/login_interface';
import { AuthServicesService } from '../../services/auth-services.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {
  
   public usrInfo !: dataUser;
   modal!: NgbModalRef;

   
  get user(){
    return this.usrInfo = this.authService.dataUser;
  
  }

  
   constructor(private router:Router, public authService: AuthServicesService, public modalServices:NgbModal,) {} 

  logOut(){
    this.authService.logOut();
  }


}