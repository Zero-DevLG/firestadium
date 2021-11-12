import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError,map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import Swal from 'sweetalert2';
import { res, user, dataUser } from '../interfaces/login_interface';


@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  private serviceUrl = 'https://assolutions.mx/WebApiFireStadium/api/Login/Login';
  private apitoken : string = 'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo=';
  public data: string ='';
  public user:string = '';
  public password:string = '';
  public res1: res[] = [];
  public dataUser!: dataUser;
  //public dataUsr!: valUsr;
  constructor(public http: HttpClient, private router: Router) { }

  get dataUsers(){
    return { ...this.dataUser };
  }


  getUserInfo(){
    let url = 'https://assolutions.mx/WebApiFireStadium/api/Security/GetUser';
    const headers = { 'apitoken':'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo=',
                       'Authorization': `Bearer ${ localStorage.getItem('token') }`}


    return this.http.get<dataUser>(`${url}`, { headers }).pipe(
      tap( resp =>{
        //console.log(resp);
        //console.log(resp.success);
        this.dataUser = resp;
        console.log(this.dataUser);
        
      }),
      catchError(err => of(err.error))
    );

  }



  login(user: string, password:string){
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


    return this.http.post<user>(`${this.serviceUrl}`,body, { headers }).pipe(
      tap( resp =>{
        console.log(resp);
        console.log(resp.success);
        if(resp.success){
       
         //this.dataUsr =  resp.value;
         console.log(resp.value.accessToken); 
         console.log(resp.value.refreshToken);
          localStorage.setItem('token',resp.value.accessToken);
          localStorage.setItem('r-token',resp.value.refreshToken);
          this.getUserInfo().subscribe(resp=>{
            //console.log(resp);
          });
        }
      })
    )

    /*
   return this.http.post(`${this.serviceUrl}`,body, { headers }).pipe( (resp) => {

      console.log(this.user, this.password);  
      let err = Object.values(resp);
      console.log(err);

      
      //const [s,d,a] = this.data;
      //console.log(s,d,a);
     
      //alert(JSON.stringify(resp));
      
      if(err[1] === false){
        Swal.fire('Acceso denegado', `Correo electronico o contraseña incorrectos`, 'error');
      }else{
        Swal.fire('Bienvenido usuario, se genero un token para tu sesión!', ` Data: ${ this.data }`, 'info');
        this.router.navigateByUrl('/dashboard');
      }



      
      
    },error =>{
      //console.log(error);
      let error_data = error.status;
      console.log(this.user,this.password);
      if(error_data === 401){
        Swal.fire('Acceso denegado', `Correo electronico o contraseña incorrectos`, 'error');
      }
      
    })*/
    }
  }


}
