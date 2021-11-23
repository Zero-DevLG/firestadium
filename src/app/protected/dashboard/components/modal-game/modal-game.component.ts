import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import {  NgbModal,NgbModalRef  } from '@ng-bootstrap/ng-bootstrap'
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { gameList, gameListA, modeList } from '../../../../interfaces/usr-interfaces';
import { NgModel } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modal-game',
  templateUrl: './modal-game.component.html',
  styleUrls: ['./modal-game.component.css']
})
export class ModalGameComponent implements OnInit {
  public platform: string = '';
  public gameList: any;
  public modeList:any;
  public elementsI: number = 0;
  public gameS: string = '';
  public monto = 50;
  
  public c3:any;
  
  modal!: NgbModalRef;

  constructor( public modalService:NgbModal, private authService : AuthServicesService, private router: Router,public http: HttpClient) { }

  ngOnInit(): void {

   
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  upMount(){
    this.monto = this.monto + 50;
  }

  downMount(){
    
    if(this.monto <= 50){
      this.monto = 50;
      Swal.fire('Error', `El monto minimo es de $50`, 'error');
    }else{
      this.monto = this.monto - 50;
    }
  }


  selectPlatform( p: string){
    this.platform = p;
    this.getGame(this.platform);
  }

  getGame(plat: string){
    const  params = plat ;
    const url = 'https://assolutions.mx/WebApiFireStadium/api/Operations/GetGameList?' + 'platformId=' + params ;
    console.log(url);
    const headers = { 'apitoken':'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo=',
                       'Authorization': `Bearer ${ localStorage.getItem('token') }`};
   

    return this.http.get<gameListA>(`${ url }`,{ headers}).subscribe((resp)=>{
      this.gameList = resp.value;
      let p = resp.value;
      console.log(resp);
      console.log(p);
      let idArray:string[] = [];

      p.forEach(function(w){
        idArray.push(w.id); 
      });
      console.log(idArray);

      let c2 : { 
        id : string;
        url: string;
      
      } [] = [];
      let count = 0;
      idArray.forEach(function(i){
         switch(i){
            case('1c870bb7-fab7-4aa1-947e-47c2288d396d'):
              c2.push({ 'id' : '1c870bb7-fab7-4aa1-947e-47c2288d396d' , 'url': ''  });
              count = count + 1;
            break;
            case('e373522c-994d-4ad0-be63-69004ecdcc4d'):
            c2.push({ 'id' : 'e373522c-994d-4ad0-be63-69004ecdcc4d' , 'url': '../../../../../assets/img/n-covers/7.png'  });
            count = count + 1;
            break;
            case('fb02b80a-41c9-4990-a312-2ca86fe4aac0'):
            c2.push({ 'id' : 'fb02b80a-41c9-4990-a312-2ca86fe4aac0' , 'url': '../../../../../assets/img/n-covers/8.png'  });
            count = count + 1;
            break;
            case('9626ce4d-959f-4c19-8c08-75d5895687d3'):
            c2.push({ 'id' : '9626ce4d-959f-4c19-8c08-75d5895687d3' , 'url': '../../../../../assets/img/n-covers/5.png'  });
            count = count + 1;
            break;
            case('f0b98578-ca8a-4a05-9f3b-ebd1bf446631'):
            c2.push({ 'id' : 'f0b98578-ca8a-4a05-9f3b-ebd1bf446631' , 'url': '../../../../../assets/img/n-covers/6.png'  });
            count = count + 1;
            break;
            case('1b08709c-9a60-4ae8-b079-479c0bb82c8d'):
            c2.push({ 'id' : '1b08709c-9a60-4ae8-b079-479c0bb82c8d' , 'url': '../../../../../assets/img/n-covers/4.png'  });
            count = count + 1;
            break;
            case('0013e0e3-9493-4bb9-8324-83a71a87a87e'):
            c2.push({ 'id' : '0013e0e3-9493-4bb9-8324-83a71a87a87e' , 'url': '../../../../../assets/img/n-covers/3.png'  });
            count = count + 1;
            break;
            case('55bb0c5c-2aed-4595-854b-467f01e60ce9'):
            c2.push({ 'id' : '55bb0c5c-2aed-4595-854b-467f01e60ce9' , 'url': '../../../../../assets/img/n-covers/2.png'  });
            count = count + 1;
            break;
            case('d79dc168-4fa2-4924-8a7c-31bb088ac39b'):
            c2.push({ 'id' : 'd79dc168-4fa2-4924-8a7c-31bb088ac39b' , 'url': '../../../../../assets/img/n-covers/10.png'  });
            count = count + 1;
            break;
            case('41ee7175-8d8f-428f-a75e-77e939908411'):
            c2.push({ 'id' : '41ee7175-8d8f-428f-a75e-77e939908411' , 'url': '../../../../../assets/img/n-covers/1.png'  });
            count = count + 1;
            break;
            case('5a9bc803-5216-4512-8024-2691f01169fc'):
            c2.push({ 'id' : '5a9bc803-5216-4512-8024-2691f01169fc' , 'url': '../../../../../assets/img/n-covers/9.png'  });
            count = count + 1;
            break;
          }

      })

      console.log(c2);
      this.c3 = c2;
     this.elementsI = count * 50; 
      


      
      let item:any = document.getElementsByClassName('img-c');
      for (let i = 0; i < item.length; i++) {
        let element = item[i];
        element.style.left = `1px`;
        console.log( element.style.left);
        
    }
      
    });
  }

  goToLobbyUser(){
    this.router.navigateByUrl('/dashboard/user');
  }


  selectGame(id:string){
    //let id2 = (id as HTMLInputElement).value;
    let id2 = id;
    this.gameS = id;
    const  params = id2 ;
    const url = 'https://assolutions.mx/WebApiFireStadium/api/Operations/GetModalityList?' + 'gameId=' + params ;
    const headers = { 'apitoken':'Uav1/CXzbG00TW7Id8q483Ov/nURpJ5ktsessA00wCo=',
                       'Authorization': `Bearer ${ localStorage.getItem('token') }`};
    return this.http.get<modeList>(`${ url }`,{ headers}).subscribe((resp)=>{
                        this.modeList = resp.value;
                        console.log(resp);
                        console.log(this.modeList);
                      });

    
  }

  selectMode(id:any){
    console.log('Juego seleccionado');
    console.log(id);
    let id2 = (id as HTMLInputElement).value;
    console.log('Modo de juego');
    console.log(id2);
  }

right(){
    let item:any = document.getElementsByClassName('img-c');
    console.log(item);
    let y = item.length;
    console.log(` nmero de items ${ y }`);
    let max = y * -70;
    console.log(`max ${max}`);
    
    for (let i = 0; i < item.length; i++) {
      let element = item[i];
     
       let left = parseInt( element.style.left);
      
       let left2 = left - 40; 
    
      if(element.style.left == ''){
        element.style.left = `30px`;
      }
     
     
      
  }

    for (let i = 0; i < item.length; i++) {
      let element = item[i];
     
       let left = parseInt( element.style.left);
     
       let left2 = left - 40; 
       console.log(left2);
        
       if(left2 <= max){
         console.log('tope');
        element.style.left = `0px`;
        console.log( element.style.left);
       }else{
        element.style.left = `${ left2 }px`;
        console.log( element.style.left);
       }
      
      
      
      
  }
}


left(){
  let item:any = document.getElementsByClassName('img-c');
  console.log(item);
   let y = item.length;
   console.log(` nmero de items ${ y }`);
   let max = y * 80;
   console.log(`max ${max}`);


  
  for (let i = 0; i < item.length; i++) {
    let element = item[i];
     let left = parseInt( element.style.left);
     let left2 = left + 20; 
     console.log(left2)
    if(element.style.left == ''){
      element.style.left = `-30px`;
    }
   
    console.log( element.style.left);
    
}

  for (let i = 0; i < item.length; i++) {
    let element = item[i];
     let left = parseInt( element.style.left);
     let left2 = left + 20; 
     this.elementsI = this.elementsI * -1;
     console.log(this.elementsI);
     if(left2 >= 0){
      console.log('tope');
      element.style.left = `0px`;
      console.log( element.style.left);
     }else{
      element.style.left = `${ left2 }px`;
      console.log( element.style.left);
     }
    
}
}


  getId(id: string){
    console.log(id);
  }


  


}
