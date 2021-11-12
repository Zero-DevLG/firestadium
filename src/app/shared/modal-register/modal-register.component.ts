import { Component, OnInit } from '@angular/core';
import {  NgbModal,NgbModalRef  } from '@ng-bootstrap/ng-bootstrap'
import { ModalSignInComponent } from '../modal-sign-in/modal-sign-in.component';
import Swal from 'sweetalert2';
import { AuthServicesService } from '../../services/auth-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent implements OnInit {
 
  signIn:ModalSignInComponent[] = [ ] ;
  public user:string = '';
  public password:string = '';
  modal!: NgbModalRef;



  constructor( public modalService:NgbModal, private authService : AuthServicesService, private router: Router) {
    
   }

  ngOnInit(): void {

  }


  logIn(user:string, password:string){
    this.user = user;
    this.password = password;
    /*
    this.authService.getUserInfo().subscribe(resp=>{
      console.log(resp);
    });
    */
    this.authService.login(this.user, this.password)!.subscribe(resp=>{
      if(resp.success === true){
        this.modalService.dismissAll();
        Swal.fire('Bienvenido usuario, se genero un token para tu sesión!','info');
        this.router.navigateByUrl('/dashboard');
        //this.authService.getUser();
      }
    });
    //
  }

}
