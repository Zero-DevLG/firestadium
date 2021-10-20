import { NgModule } from '@angular/core';
import { SwiperModule } from "swiper/angular";
import { CommonModule } from '@angular/common';
import { CarrucelComponent } from './components/carrucel/carrucel.component';
import { CarrucelGamesComponent } from './components/carrucel-games/carrucel-games.component';
import { ModalRegisterComponent } from '../shared/modal-register/modal-register.component';
import { BodyComponent } from './components/body/body.component';
import { LandingPageComponent } from './landing-page.component';
//import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';





@NgModule({
  declarations: [ CarrucelComponent, CarrucelGamesComponent, BodyComponent, LandingPageComponent],
  imports: [
    SwiperModule,
    CommonModule,
    
    //NgxUsefulSwiperModule
  ],
  exports:[
    CarrucelComponent,
    CarrucelGamesComponent,
    BodyComponent
 
  ]
})
export class LandingPageModule { }
