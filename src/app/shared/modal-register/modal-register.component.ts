import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {  NgbModal  } from '@ng-bootstrap/ng-bootstrap'
import { ModalSignInComponent } from '../modal-sign-in/modal-sign-in.component';
import Swal from 'sweetalert2';


import { res } from './login_interface';


@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent implements OnInit {
  private serviceUrl = 'https://assolutions.mx/WebApiFireStadium/api/Login/Login';
  private apitoken : string = 'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo=';
  public data: string ='';
  signIn:ModalSignInComponent[] = [ ] ;
  public user:string = '';
  public password:string = '';
  public res1: res[] = [];


  constructor( public modal:NgbModal , public http: HttpClient) {
    
   }

  ngOnInit(): void {

  }


  logIn(user:string, password:string){
    this.user = user;
    this.password = password;
    if(this.user === '' || this.password === ''){
      Swal.fire('Error', `Favor de llenar ambos campos`, 'error');
    }else{
      
    const headers = { 'apitoken':'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo='}
    const body= {
        "UserName" : user,
        "Email": user,
        "Password": password
    }
    const params = new HttpParams()
    .set('apitoken',this.apitoken);

  this.http.post(`${this.serviceUrl}`,body, { headers }).subscribe( (resp) => {

      console.log(this.user, this.password);  
      let err = Object.entries(resp);

      
      //const [s,d,a] = this.data;
      //console.log(s,d,a);
     
      //alert(JSON.stringify(resp));
      /*
      if(status === 'Crendeciales invalidas.'){
        Swal.fire('Acceso denegado', `Correo electronico o contraseña incorrectos`, 'error');
      }else{
        Swal.fire('Bienvenido usuario, se genero un token para tu sesión!', ` Data: ${ this.data }`, 'info');
      }
*/


      
      
    },error =>{
      //console.log(error);
      let error_data = error.status;
      console.log(this.user,this.password);
      if(error_data === 401){
        Swal.fire('Acceso denegado', `Correo electronico o contraseña incorrectos`, 'error');
      }
      
    })
    }

  }

}
