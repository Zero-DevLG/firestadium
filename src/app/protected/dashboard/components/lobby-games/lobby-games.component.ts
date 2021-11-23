import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby-games',
  templateUrl: './lobby-games.component.html',
  styleUrls: ['./lobby-games.component.css']
})
export class LobbyGamesComponent implements OnInit {
  public visible = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  mouseEnter(div : string){
    this.visible = true;
 }

 mouseLeave(div : string){
  this.visible = false;
}

goToLobbyGames(){
  this.router.navigateByUrl('/dashboard/games');
}

goToLobbyUser(){
  this.router.navigateByUrl('/dashboard/user');
}



}
