import { Component, OnInit } from '@angular/core';
import {  NgbModal,NgbModalRef  } from '@ng-bootstrap/ng-bootstrap'
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { plataforms } from 'src/app/interfaces/usr-interfaces';
import { userPlataformFavorites } from 'src/app/interfaces/login_interface';
import Swal from 'sweetalert2';
import { userGameFavorites, userPlatformTags } from '../../interfaces/login_interface';
import { score } from '../../interfaces/usr-interfaces';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-modal-edit-usr',
  templateUrl: './modal-edit-usr.component.html',
  styleUrls: ['./modal-edit-usr.component.css']
})
export class ModalEditUsrComponent implements OnInit {
  private headers = { 'apitoken':'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo='}
  public formUpdate = new FormGroup({});
  public plataforms!: plataforms;
 
  public usrPlataforms: string [] = [];
  public usrGames: string [] = [];
  public avatar : string = '';
  public games:string [] = [];
  public  tagUsr !:{ psnTag: string, xboxTag: string };
  public prueba = true;
  public s : string[] = [];
  public xboxTag: string = '';
  public psnTag: string = '';
 
  public act = {
    nintendo : false,
      ps4: false,
      xbox: false,
      pc: false
  };
 
  public xbox : boolean = false;
  public nintendo : boolean = false; 
  public pc: boolean = false;



  constructor(public authService : AuthServicesService, public formBuilder: FormBuilder,  
    private http: HttpClient, public DomSanitizer: DomSanitizer, public modalService:NgbModal) {
    this.authService.getPlataformGames();
  
    //console.log(this.plataforms);
   }

  ngOnInit(): void {
      /////FORMUARIO REACTIVO 
    
      console.log(this.authService.dataUser.value.birthDate);
      let b = this.authService.dataUser.value.birthDate.split('T');
      console.log(b[0]);
      this.formUpdate = this.formBuilder.group({

        Names:              [this.authService.dataUser.value.names,Validators.required],
        LastNames:          [this.authService.dataUser.value.lastNames,Validators.required],
        UserName:           [{ value: this.authService.dataUsers.value.userName,disabled: true}],
        Email:              [this.authService.dataUsers.value.email,Validators.required],
        Password:           ['',[Validators.required,Validators.minLength(8)]],
        SecretQuestionId:   [this.authService.dataUsers.value.secretQuestionId],
        SecretAnswer:       [''],
        BirthDate:          [b[0],Validators.required],
        CountryId:          [this.authService.dataUsers.value.countryId,Validators.required],
        
  
      });

      this.usrGames = this.authService.userGames;
  




    console.log(this.authService.act2);
    this.authService.getCountry();
    //this.authService.getQuestions();
    /*
    console.log(this.authService.games);
    var games: string [] = [];
    this.authService.games.forEach(function(g:userGameFavorites){
      console.log(g.gameId);
      games.push(g.gameId);
    });

    this.usrGames = games;

    // Tags
    
    var  r :{ psnTag: string, xboxTag: string };
    this.authService.tags.forEach(function(t:userPlatformTags){
      console.log(t.tagName);
      if(t.platformId === '92e0ddb1-4721-4948-aef2-37cf74142020'){
          r.psnTag = t.tagName;
      }
      if(t.platformId === 'b54e4440-0340-469e-9306-cf6e7a1b2187'){
          r.xboxTag = t.tagName
      }
    });

    //this.tagUsr.psnTag = r.psnTag;
    //this.tagUsr.xboxTag = r.xboxTag;  

      
   
    */

    
    //GAMES


   

  

    //
    let k: userPlataformFavorites;
    var d: string[] = [];
    console.log('Consolas:');
    console.log(this.authService.consolas);
    this.usrPlataforms = this.authService.consolas;
    let act = {
      nintendo : false,
      ps4: false,
      xbox: false,
      pc: false
    };
    console.log(this.usrPlataforms);
    this.usrPlataforms.forEach(function(w){

        switch(w)
        {
          case('eb2417df-e288-4843-ace9-09fbd144b75a'):
          {
            act.nintendo = true;
          }
          break;
          case('92e0ddb1-4721-4948-aef2-37cf74142020'):
          {
            act.ps4 = true;
          }
          break;
          case('dcd547cf-ab59-4d91-9f71-50904ec2ed28'):
          {
            act.pc = true;
          }
          break;
          case('b54e4440-0340-469e-9306-cf6e7a1b2187'):
          {
            act.xbox = true;
          }
          break;
          
        };

      //console.log(element);
      //element!.className += " activate";
    });

    this.act = act;


  }

        onFileChanged(e:any){
            console.log(e);
           // this.avatar  = e[0].base64;
            this.avatar = e[0].base64.slice(23);
            console.log(this.avatar);
        }


      getUsrPlatafomrs(plataform : string){
            if(this.usrPlataforms.includes(plataform)){
              let i = this.usrPlataforms.indexOf(plataform);
              this.usrPlataforms.splice(i,1);
              switch(plataform)
              {
                case('eb2417df-e288-4843-ace9-09fbd144b75a'):
                {
                  this.act.nintendo = false;
                }
                break;
                case('92e0ddb1-4721-4948-aef2-37cf74142020'):
                {
                  this.act.ps4 = false;
                }
                break;
                case('dcd547cf-ab59-4d91-9f71-50904ec2ed28'):
                {
                  this.act.pc = false;
                }
                break;
                case('b54e4440-0340-469e-9306-cf6e7a1b2187'):
                {
                  this.act.xbox = false;
                }
                break;
                
              } 
            }else{
              this.usrPlataforms.push(plataform);
              switch(plataform)
              {
                case('eb2417df-e288-4843-ace9-09fbd144b75a'):
                {
                  this.act.nintendo = true;
                }
                break;
                case('92e0ddb1-4721-4948-aef2-37cf74142020'):
                {
                  this.act.ps4 = true;
                }
                break;
                case('dcd547cf-ab59-4d91-9f71-50904ec2ed28'):
                {
                  this.act.pc = true;
                }
                break;
                case('b54e4440-0340-469e-9306-cf6e7a1b2187'):
                {
                  this.act.xbox = true;
                }
                break;
                
              } 
              
            }
            console.log(this.usrPlataforms);



      }

      addUserGame(id:string){
        console.log(id);
        
       
        if(this.usrGames.includes(id)){
          let i = this.usrGames.indexOf(id);
          this.usrGames.splice(i,1);
        }else{
          this.usrGames.push(id);
        }
        console.log(this.usrGames);
      }

     
      close(){
        this.modalService.dismissAll();
      }


    submit(){
      //console.log(this.formUpdate.value);
      let g = this.formUpdate.value;
      console.log(g.xbox);
      if(this.avatar == ''){
        this.avatar = this.authService.img_default;
      }
      var UserPlatformFavorites: { UserId: string; PlatformId: string; }[] = [];
      var UserGameFavorites : { UserId: string; GameId: string; }[] = [];
      let idUser = this.authService.dataUser.value.id;
      this.usrPlataforms.forEach(function(w){
        UserPlatformFavorites.push(
          {
          'UserId'           : idUser,
          'PlatformId'       : w
        })
      });

      this.usrGames.forEach(function(w){ 
        UserGameFavorites.push(
          {
          'UserId'           : idUser,
          'GameId'           : w
        })
      })

      const headers = { 'apitoken':'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo=',
      'Authorization': `Bearer ${ localStorage.getItem('token') }`}
        const url = 'https://assolutions.mx/WebApiFireStadium/api/Security/AccountUpdate';
        const body= {
          

          "UserId":                 this.authService.dataUser.value.id,
          "Names" :                 g.Names,
          "LastNames":              g.LastNames,
          "BirthDate":              g.BirthDate,
          
          "Password":               g.Password,
          "Email":                  g.Email,
          "CountryId":              g.CountryId,
          "SecretQuestionId":       this.authService.dataUsers.value.secretQuestionId,
          "SecretAnswer":           'prueba',
          "UserGameFavorites":      UserGameFavorites,
        "UserPlatformFavorites":    UserPlatformFavorites,
          "UserPlatformTags": [
            {
                "UserId":  this.authService.dataUser.value.id,
                "PlatformId": "92e0ddb1-4721-4948-aef2-37cf74142020",
                "TagName": ''
            },
        ],
        "Avatar": this.avatar

          
      }
  
      console.log(body);
      
      this.http.post(`${url}`,body, { headers }).subscribe( (resp) => {
        console.log(resp);
        Swal.fire('Update', `Datos actualizados correctamente` , 'success');
        this.authService.bar = false;
        this.authService.getUserInfo().subscribe(resp=>{
          console.log('reenviando!!!');
          this.modalService.dismissAll();
          console.log(resp);
        });
        setTimeout(()=>{
          this.authService.bar = true;
          console.log('paint');
        },3000)
       
      }, error =>{
        Swal.fire('Error', ` Respuesta: ${ error }`, 'error');
      });
  }

}
