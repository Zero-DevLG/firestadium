import { Component, OnInit } from '@angular/core';
import {  NgbModal  } from '@ng-bootstrap/ng-bootstrap'
import { ModalSignInComponent } from '../modal-sign-in/modal-sign-in.component';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent implements OnInit {

  signIn:ModalSignInComponent[] = [ ] ;

  constructor( public modal:NgbModal) { }

  ngOnInit(): void {

  }

}
