import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/services/auth-services.service';

@Component({
  selector: 'app-lobby-user',
  templateUrl: './lobby-user.component.html',
  styleUrls: ['./lobby-user.component.css']
})
export class LobbyUserComponent implements OnInit {
  public visible = false;
  public wins: number = 0;
  public loses: number = 0;
  public matchs: number = 0;
 
  public h: any;
  constructor(private router: Router, public authService: AuthServicesService) { }

  

  ngOnInit(): void {

    console.log('Obteniendo historial');
let history = 
{
  value: [
    {
        userName: "gaara0983",
        game: "CALL OF DUTY",
        platform: "PS5",
        modality: "Gun Game",
        amount: 500.00,
        matchDate: "2021-10-14T20:16:35.267",
        result: "Ganada"
    },
    {
      userName: "gaara0983",
      game: "LEAGUE OF LEGENDS",
      platform: "PC",
      modality: "Gun Game",
      amount: 200.00,
      matchDate: "2021-10-14T20:16:35.267",
      result: "Perdida"
  },
  {
    userName: "gaara0983",
    game: "FORNITE",
    platform: "PC",
    modality: "Gun Game",
    amount: 250.00,
    matchDate: "2021-10-14T20:16:35.267",
    result: "Ganada"
},
]
}
this.h = history.value;
console.log(history);
console.log(this.h);

  }

  goToLobbyGames(){
    this.router.navigateByUrl('/dashboard/games');
  }

  goToLobbyUser(){
    this.router.navigateByUrl('/dashboard/user');
  }


  mouseEnter(div : string){
    this.visible = true;
 }

 mouseLeave(div : string){
  this.visible = false;
}





}
