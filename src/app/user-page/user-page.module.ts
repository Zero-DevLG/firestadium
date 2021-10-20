import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyPageUserComponent } from './components/body-page-user/body-page-user.component';
import { UsrProfileComponent } from './components/usr-profile/usr-profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';



@NgModule({
  declarations: [BodyPageUserComponent, UsrProfileComponent, SidebarComponent],
  imports: [
    CommonModule,
    SidebarModule.forRoot()
  ],
  exports:
  [
    BodyPageUserComponent,
    SidebarComponent
  ]
})
export class UserPageModule { }
