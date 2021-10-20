import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyPageLobbyComponent } from './components/body-page-lobby/body-page-lobby.component';
import { ModalNewGameComponent } from './components/modal-new-game/modal-new-game.component';






@NgModule({
  declarations: [BodyPageLobbyComponent,ModalNewGameComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BodyPageLobbyComponent,
    ModalNewGameComponent

    
   
  ]
})
export class LoobyPageModule { }
