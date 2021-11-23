import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { LobbyUserComponent } from './dashboard/components/lobby-user/lobby-user.component';
import { LobbyGamesComponent } from './dashboard/components/lobby-games/lobby-games.component';
import { ModalGameComponent } from './dashboard/components/modal-game/modal-game.component';






@NgModule({
  declarations: [LobbyUserComponent, LobbyGamesComponent,ModalGameComponent],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ],
  exports:[
   
  ]
})
export class ProtectedModule { }
