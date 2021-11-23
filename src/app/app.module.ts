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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './protected/dashboard/dashboard.component';
import { ModalEditUsrComponent } from './shared/modal-edit-usr/modal-edit-usr.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64'






@NgModule({
  declarations: [
    AppComponent,
    ModalRegisterComponent,
    NavBarComponent,
    ModalSignInComponent,
    FooterComponent,
    DashboardComponent,
    ModalEditUsrComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LandingPageModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AlifeFileToBase64Module
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
