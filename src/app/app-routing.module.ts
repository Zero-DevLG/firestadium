import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalRegisterComponent } from './shared/modal-register/modal-register.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  
  {
    path:'',component:LandingPageComponent
  },
  {
    path: 'dashboard',
    loadChildren: ()=> import('./protected/protected.module').then(m => m.ProtectedModule)
  },
  {
    path:'**', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
