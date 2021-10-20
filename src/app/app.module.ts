import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { ModalRegisterComponent } from './shared/modal-register/modal-register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ModalSignInComponent } from './shared/modal-sign-in/modal-sign-in.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserPageModule } from './user-page/user-page.module';
import { SidebarModule } from 'ng-sidebar';
import { LoobyPageComponent } from './looby-page/looby-page.component';
import { LoobyPageModule } from './looby-page/looby-page.module';

@NgModule({
  declarations: [
    AppComponent,
    ModalRegisterComponent,
    NavBarComponent,
    ModalSignInComponent,
    FooterComponent,
    UserPageComponent,
    LoobyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    UserPageModule,
    LoobyPageModule,
    NgbModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
