import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { HttpClient, HttpParams } from '@angular/common/http';


import { Country } from './interfaces/country_interface';
import { Question } from './interfaces/secretQuestion_interface';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { passwordValidation } from './validations/password-validation.directive';
import { r_passwordValidation } from './validations/re-password-validation.directive';


@Component({
  selector: 'app-modal-sign-in',
  templateUrl: './modal-sign-in.component.html',
  styleUrls: ['./modal-sign-in.component.css']
})
export class ModalSignInComponent implements OnInit {
  private serviceUrl = 'https://assolutions.mx/WebApiFireStadium/api/General/GetCountryList';
  public paises: Country[] = [];
  public date_m:number = 0;
  public question: Question[] = [];
  public formReg = new FormGroup({});
 
  private headers = { 'apitoken':'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo='}
 
  constructor( public modal:NgbModal, private http: HttpClient, public formBuilder: FormBuilder) { 

   
  }


  get password(){
    return this.formReg.get('password');
  }

  get r_password(){
    return this.formReg.get('r_password');
  }

  get date_b(){
    return this.formReg.get('date_b');
  }

  checkIfMatchingPasswords(password: string, r_password: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[password],
          passwordConfirmationInput = group.controls[r_password];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }


  

  checkIfDate(date_b: string){
    return(group: FormGroup) =>{
      let date_b2 = group.controls[date_b];
      var today = new Date();
      var birthday = new Date(date_b2.value);
      var edad = today.getFullYear() - birthday.getFullYear();
      var m = today.getMonth() - birthday.getMonth();

     /* if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        edad--;
    }*/

    if(edad > 18){
      return date_b2.setErrors(null);
    }else{
     
      return date_b2.setErrors({notEquivalent: true});
    }

    }
  }

  ngOnInit(): void {

    /////FORMUARIO REACTIVO
    

    this.formReg = this.formBuilder.group({

      name:       ['',Validators.required],
      lastName:   ['',Validators.required],
      userName:   ['',Validators.required],
      email:      ['',Validators.required],
      email_dns:  ['',Validators.required],
      password:   ['',[Validators.required,Validators.minLength(8), passwordValidation()]],
      r_password: ['',[Validators.required,r_passwordValidation()]],
      qstion:     ['0',Validators.required],
      r_qstion:   ['',Validators.required],
      date_b:     ['',Validators.required],
      country:    ['0',Validators.required]

    },{validator: [this.checkIfMatchingPasswords('password', 'r_password'),this.checkIfDate('date_b')]});


    ///APIS

    this.getCountry();
    this.getQuestions();
  }

  getCountry(){
    const url = this.serviceUrl;
    const headers = this.headers;
    
    this.http.get(url, { headers }).subscribe((resp) =>{
     let err = Object.values(resp);
     this.paises = Object.values(err[0]);
    });
  }


  getQuestions(){
    const url = 'https://assolutions.mx/WebApiFireStadium/api/Security/GetSecretQuestionList';
    const headers = this.headers;
    this.http.get(url,{ headers}).subscribe((resp2)=>{
      let err = Object.values(resp2);
      this.question = Object.values(err[0]);
      console.log(this.question);
      
    });
  }


  submit(){
    console.log(this.formReg.value);
    let g = this.formReg.value;
    let n_mail = `${g.email}@${g.email_dns}`;
      const headers = this.headers;
      const url = 'https://assolutions.mx/WebApiFireStadium/api/Security/RegisterUser';
      const body= {
        
        /*
          "Names" : "Jose Alberto",
          "LastNames" : "Sanchez Quintero",
          "BirthDate" : "1980-11-02",
          "UserName": "jhez2021",
          "Password": "Casa_123",
          "Email" : "emailsdsa@gmail.com",
          "CountryId":"1bfbad51-7b90-4b88-b9ac-16269e369d95",
          "SecretQuestionId": "3fdaa831-5e58-4ac9-aa6d-372dde586726",
          "SecretAnswer":"San Cristobal"
      
        */
        
        "Names" : g.name,
        "LastNames": g.lastName,
        "BirthDate": g.date_b,
        "UserName": g.userName,
        "Password":g.password,
        "Email":n_mail,
        "CountryId":g.country,
        "SecretQuestionId":g.qstion,
        "SecretAnswer":g.r_qstion
        
    }

    console.log(body);
    this.http.post(`${url}`,body, { headers }).subscribe( (resp) => {
      Swal.fire('Gracias...', 'Sus datos se registraron con exito! <br>Por favor activa tu cuenta desde el email que acabamos de enviarte', 'success');
    }, error =>{
      Swal.fire('Error', 'Error al enviar datos', 'error');
    });
     


    
/*
      this.formReg.patchValue({
      name:       '',
      lastName:   '',
      userName:   '',
      email:      '',
      email_dns:  '',
      password:   '',
      r_password: '',
      qstion:     '0',
      r_qstion:   '',
      date_b:     '',
      country:    '0'
      });

      */
  }


  simpleAlert(){
    Swal.fire(`
    <div style="position:relative; display:flex; border: black 1px solid;">
    <div style="position:relative; padding:10px; text-aling:center;background-color:#3F3F3F; color:white; width:60%; height:800px;">
    <h6 style="position:relative; top:40%;">T??rminos de Uso</h6>
    </div>
    <div  style="position:relative; top:0px; text-align:justify; font-size:12px; padding:5px; height:800px; overflow-y:auto;">
    Al u???lizar nuestros Servicios, ya sea como invitado, como usuario registrado o de otro modo,
    acepta que estos T??rminos de servicio regir??n su relaci??n con Fire Stadium. Si no est?? completamente
    de acuerdo con estos T??rminos de servicio, no debe u???lizar ninguno de nuestros Servicios.
    Fire Stadium no est?? respaldado, afiliado directamente, mantenido o patrocinado por Apple Inc,
    Electronic Arts, Ac???vision Blizzard, Take-Two Interac???ve, Microso???, Xbox, Sony, Playsta???on o Epic
    Games ni ning??n otro desarrollador. Todo el contenido, los ???tulos de los juegos, los nombres
    comerciales y / o la imagen comercial, las marcas comerciales, el material gr??fico y las im??genes
    asociadas son marcas comerciales y / o material protegido por derechos de autor de sus respec???vos
    propietarios.
    Acceso a la cuenta y asignaci??n permi???da
    a) Al u???lizar los Servicios, usted garan???za y declara que ???ene al menos 18 a??os de edad y que
    es legalmente competente para leer, comprender y aceptar las disposiciones de este
    acuerdo. Si es menor de 18 a??os, no debe u???lizar ninguna parte de los Servicios, crear una
    cuenta ni enviar ninguna informaci??n personal a la Fire Stadium a trav??s de los Servicios.
    b) Si anteriormente se le ha prohibido el uso de los Servicios de Fire Stadium, no podr?? usar
    nuestros Servicios.
    c) Solo puede tener una cuenta. Si se descubre que ha registrado varias Cuentas, est??
    compar???endo Cuentas con otra persona o est?? accediendo a los Servicios a trav??s de una
    cuenta que no es la suya, se cancelar??n todas las Cuentas afectadas por dicho uso y todas
    las ganancias del Par???do asociadas con eso. La cuenta puede ser incautada por Fire Stadium.
    d) Si usted es padre y cree que su hijo puede haber creado una cuenta, cont??ctenos con los
    detalles de esa cuenta en help@/////.co para eliminarla.
    Propiedad y licencia limitada
    a) Los Servicios son propiedad o est??n autorizados por Fire Stadium y est??n protegidos por
    Derechos de propiedad intelectual y otras leyes de derechos de propiedad. Fire Stadium se reserva
    todos los derechos, ???tulos e intereses en y para los Servicios, incluidos, entre otros, todos los Derechos
    de propiedad intelectual y otros derechos de propiedad que no se le otorgan expl??citamente en estos
    T??rminos. Su uso permi???do de los Servicios est?? limitado por los Derechos de Propiedad Intelectual de
    Fire Stadium.
    b) Sujeto a su acuerdo y al cumplimiento con???nuo de estos T??rminos de servicio y cualquier otra
    pol?????ca relevante de la Fire Stadium, la Fire Stadium le otorga una licencia no comercial, no exclusiva,
    intransferible, revocable y limitada, sujeta a las limitaciones. en estos T??rminos, para acceder y u???lizar
    los Servicios para sus propios fines de entretenimiento. Acepta que no u???lizar?? los Servicios para ning??n
    otro prop??sito. Usted reconoce que para que Fire Stadium pueda brindarle Servicios, es necesario que
    tambi??n brinde funciones relacionadas, como an??lisis, medici??n, personalizaci??n de anuncios,
    procesamiento de transacciones financieras, prevenci??n de fraude, verificaciones de iden???dad, medidas
    de seguridad, marke???ng y atenci??n al cliente. apoyo.
    </div>
    </div>
    `);
  }
   
  alertWithSuccess(){
    Swal.fire('Gracias...', 'Sus datos se registraron con exito! <br>Por favor activa tu cuenta desde el email que acabamos de enviarte', 'success');
  }
   /*
  confirmBox(){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result:any) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
*/
}
function controlsConfig(controlsConfig: any, arg1: {}): FormGroup {
  throw new Error('Function not implemented.');
}

