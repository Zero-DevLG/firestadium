import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalRegisterComponent } from './shared/modal-register/modal-register.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { UserPageComponent } from './user-page/user-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoobyPageComponent } from './looby-page/looby-page.component';

const routes: Routes = [
  
  {path:'',component:LandingPageComponent},
  {path:'users',component:UserPageComponent},
  {path:'lobby',component:LoobyPageComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
