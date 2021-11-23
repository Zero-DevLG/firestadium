import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LobbyUserComponent } from './dashboard/components/lobby-user/lobby-user.component';
import { LobbyGamesComponent } from './dashboard/components/lobby-games/lobby-games.component';

const routes: Routes = [

  {path: 'user', component: LobbyUserComponent},
  {path: 'games', component: LobbyGamesComponent},
  {path: 'dashboard',
  loadChildren: ()=> import('./dashboard/components/components.module').then(c => c.ComponentsModule)},
  {path: '**', redirectTo:'user'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
