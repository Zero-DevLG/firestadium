import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError,map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import Swal from 'sweetalert2';
import { res, user, dataUser, userPlataformFavorites, userPlatformTags, userGameFavorites } from '../interfaces/login_interface';
import { Country } from '../shared/modal-sign-in/interfaces/country_interface';
import { Question } from '../shared/modal-sign-in/interfaces/secretQuestion_interface';
import { plataformGames, plataforms, score } from '../interfaces/usr-interfaces';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  private serviceUrl = 'https://assolutions.mx/WebApiFireStadium/api/Login/Login';
  private apitoken : string = 'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo=';
  public data: string ='';
  public user:string = '';
  public avatar:string = '';
  public img_default: string = '';
  public user_image!: SafeResourceUrl;
  public scoreUser!: score;
  public plataforms!: plataforms;
  public fPlataforms : userPlataformFavorites[] = [];
  public tagsP: userPlatformTags [] = [];
  public games: userGameFavorites[] = [];
  public password:string = '';
  public consolas: string [] = [];
  public userGames: string [] = [];
  public act2 = {
    FF: false,
    MADD: false,
    RL : false,
    For: false,
    LoL : false,
    COD_v: false,
    COD_MW: false,
    COD_CW: false,
    COD_WZ: false,
    CR: false
  };
  public tags: any;
  public bar: boolean = true;
  public paises : Country[] = [];
  public question: Question[] = [];
  public res1: res[] = [];
  private headers = { 'apitoken':'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo='}
  public dataUser: dataUser = {
    value : {
      avatar: '',
      balance : 0,
      birthDate : '',
      country :'',
      countryId : '',
      email : '',
      emailAuthenticatedDate : '',
      expirationDate : '',
      id : '',
      isEmailAuthenticated :  false,
      lastNames : '',
      names : '',
      password :'',
      refreshToken : '',
      registeredDate : '',
      secretAnswer : '',
      secretQuestion : '',
      secretQuestionId : '',
      userGameFavorites : [{
        id: '',
        gameId: '',
        game: {
            id: '',
            principalTittle: '',
            secondaryTittle: null,
            subtitle: null,
            link: '',
            image: '',
            order: 0,
            marginLeft: 0
        },
        userId: ''
      }],
      userName : '',
      userPlatformFavorites : [{
        id: '',
        platformId: '',
        platform: {
            id: '',
            name: '',
            enabled: false,
        },
        userId: ''
      }],
      userPlatformTags : [
        {
            
          id: '',
          tagName: '',
          platformId: '',
          platform: {
              id: '',
              name: '',
              enabled: false
          },
          userId: ''
      
        }
      ]
  },
  success : false,
  errors : []
  
   };

  //public dataUsr!: valUsr;
  constructor(public http: HttpClient, private router: Router,public DomSanitizer: DomSanitizer) { 

  
  }

  get dataUsers(){
    return { ...this.dataUser };
  }

  getGames(){
    const url = 'https://assolutions.mx/WebApiFireStadium/api/Operations/GetCarouseGameslItem';
    const headers = { 'apitoken':'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo='}
    return this.http.get<plataformGames>(`${ url }`,{ headers}).subscribe((resp)=>{
      console.log(resp);
      let p = Object.values(resp.value);
      let ps4 =           p[2];
      let pc =            p[3];
      let xbox =          p[4];
      let nintendo =      p[1];

      this.plataforms = { ps4, pc, xbox, nintendo };
      
    });
  }

  getUsrGames(games: string [] ){
    
    let act2 = {
      FF: false,
      MADD: false,
      RL : false,
      For: false,
      LoL : false,
      COD_v: false,
      COD_MW: false,
      COD_CW: false,
      COD_WZ: false,
      CR: false
    };
    games.forEach(function(o){
      switch(o){
        case('1c870bb7-fab7-4aa1-947e-47c2288d396d'):
        {
          act2.FF = true;
        }
        break;
        case('e373522c-994d-4ad0-be63-69004ecdcc4d'):
        {
          act2.MADD = true;
        }
        break;
        case('fb02b80a-41c9-4990-a312-2ca86fe4aac0'):
        {
          act2.RL = true;
        }
        break;
        case('9626ce4d-959f-4c19-8c08-75d5895687d3'):
        {
          act2.For = true;
        }
        break;
        case('f0b98578-ca8a-4a05-9f3b-ebd1bf446631'):
        {
          act2.LoL = true;
        }
        break;
        case('1b08709c-9a60-4ae8-b079-479c0bb82c8d'):
        {
          act2.COD_v = true;
        }
        break;
        case('0013e0e3-9493-4bb9-8324-83a71a87a87e'):
        {
          act2.COD_MW = true;
        }
        break;
        case('55bb0c5c-2aed-4595-854b-467f01e60ce9'):
        {
          act2.COD_CW = true;
        }
        break;
        case('d79dc168-4fa2-4924-8a7c-31bb088ac39b'):
        {
          act2.COD_WZ = true;
        }
        break;
        case('41ee7175-8d8f-428f-a75e-77e939908411'):
        {
          act2.CR = true;
        }
        break;
      }
    });

    console.log(act2);
    this.act2 = act2;

  }





  getPlataformGames(){
    const url = 'https://assolutions.mx/WebApiFireStadium/api/Operations/GetPlatformList';
    const headers = { 'apitoken':'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo=',
                       'Authorization': `Bearer ${ localStorage.getItem('token') }`}
    return this.http.get<plataformGames>(`${ url }`,{ headers}).subscribe((resp)=>{
      console.log(resp);
      let p = Object.values(resp.value);
      let ps4 =           p[2];
      let pc =            p[3];
      let xbox =          p[4];
      let nintendo =      p[1];

      this.plataforms = { ps4, pc, xbox, nintendo };
      
    });
  }


  getCountry(){
    const url = 'https://assolutions.mx/WebApiFireStadium/api/General/GetCountryList';
    const headers = this.headers;
    
    this.http.get(url, { headers } ).subscribe((resp) =>{
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

  getScore(){
    const url = 'https://assolutions.mx/WebApiFireStadium/api/Operations/GetUserRating';
    const headers = { 'apitoken':'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo=',
    'Authorization': `Bearer ${ localStorage.getItem('token') }`};
    
    return this.http.get<score>(`${url}`, { headers }).pipe(
      tap( resp =>{
        console.log(resp);
        
      }),
      catchError(err => of(err.error))
    );


  }


  getHistory(){
    let url = 'https://assolutions.mx/WebApiFireStadium/api/Security/GetUser';
    const headers = { 'apitoken':'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo=',
                       'Authorization': `Bearer ${ localStorage.getItem('token') }`}


  }



  getUserInfo(){
    let url = 'https://assolutions.mx/WebApiFireStadium/api/Security/GetUser';
    const headers = { 'apitoken':'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo=',
                       'Authorization': `Bearer ${ localStorage.getItem('token') }`}


    return this.http.get<dataUser>(`${url}`, { headers }).pipe(
      tap( resp =>{
        let element = 'platformId';
        //console.log(resp);
        //console.log(resp.success);
        this.dataUser = resp;
        this.fPlataforms = resp.value.userPlatformFavorites;
        //this.tagsP = resp.value.userPlatformTags;
        //console.log(this.dataUser);
        console.log(this.dataUser.value.userPlatformFavorites);
        console.log(this.fPlataforms);
        let p = Object.values(this.fPlataforms);
       // this.tags = Object.values(this.tagsP);
        console.log('Obteninedo plataformas favoritas');
        console.log(this.fPlataforms);
        var consolas2 : string [] = [];
        this.fPlataforms.forEach(function(w: userPlataformFavorites){
           consolas2.push(w.platformId);
        })

        this.consolas = consolas2;
        
        console.log("Adquieriendo consolas");
        console.log(this.consolas);
        console.log("Adquieriendo juegos");
        var games2: string [] = [];
         this.games= resp.value.userGameFavorites;
         this.games.forEach(function(g:userGameFavorites){
           games2.push(g.gameId);
         });
         this.userGames = games2;
         console.log(this.userGames);
         this.getUsrGames(this.userGames);
        //console.log(p);
        let k: userPlataformFavorites;
         k = p[0];
        // console.log(k.platformId);
        console.log('Imagen');

        console.log('Adquiriendo score');
        this.getScore().subscribe((resp)=>{
          console.log('Obteniendo Score');
          this.scoreUser = resp;
          console.log(this.scoreUser);
        });
        //console.log(resp.value.avatar);
        this.img_default = resp.value.avatar;
        this.avatar = resp.value.avatar;
        console.log(this.avatar);
        resp.value.avatar=`data:image/png;base64,${resp.value.avatar}`; 
        //console.log(resp.value.avatar);
        this.user_image = this.DomSanitizer.bypassSecurityTrustResourceUrl(resp.value.avatar)
        //console.log(this.user_image);
        
        this.bar = true;
        
      }),
      catchError(err => of(err.error))
    );

  }



  login(user: string, password:string){
    this.user = user;
    this.password = password;
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
         //console.log(resp.value.accessToken); 
         //console.log(resp.value.refreshToken);
          localStorage.setItem('token',resp.value.accessToken);
          localStorage.setItem('r-token',resp.value.refreshToken);
          this.getUserInfo().subscribe(resp=>{
            
            
          });
        }
      })
    )
    
  }

  logOut(){
    localStorage.clear();
    this.dataUser = {
      value : {
        avatar: '',
        balance : 0,
        birthDate : '',
        country :'',
        countryId : '',
        email : '',
        emailAuthenticatedDate : '',
        expirationDate : '',
        id : '',
        isEmailAuthenticated :  false,
        lastNames : '',
        names : '',
        password :'',
        refreshToken : '',
        registeredDate : '',
        secretAnswer : '',
        secretQuestion : '',
        secretQuestionId : '',
        userGameFavorites : [
          
            {
              id: '',
              gameId: '',
              game: {
                  id: '',
                  principalTittle: '',
                  secondaryTittle: null,
                  subtitle: null,
                  link: '',
                  image: '',
                  order: 0,
                  marginLeft: 0
              },
              userId: ''
            }
          
        ],
        userName : '',
        userPlatformFavorites : [
          {
            id: '',
            platformId: '',
            platform: {
                id: '',
                name: '',
                enabled: false,
            },
            userId: ''
          }
        ],
        userPlatformTags : [
          {
            
            id: '',
            tagName: '',
            platformId: '',
            platform: {
                id: '',
                name: '',
                enabled: false
            },
            userId: ''
        
          }
        ]
    },
    success : false,
    errors : []
    
     };

    this.router.navigateByUrl('');
  }


}
