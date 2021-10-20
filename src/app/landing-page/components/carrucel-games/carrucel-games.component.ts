import { Component, OnInit , Input } from '@angular/core';
import { IcarouseGameslItem } from './icarrucel-games-item.metadata';
//import { SwiperOptions } from 'swiper/core';
//import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Virtual } from "swiper/core";
SwiperCore.use([Virtual]);

@Component({
  selector: 'app-carrucel-games',
  templateUrl: './carrucel-games.component.html',
  styleUrls: ['./carrucel-games.component.scss']
})


export class CarrucelGamesComponent implements OnInit {
  @Input() items2: IcarouseGameslItem[] = [];
  // Create array with 1000 slides
  slides = Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`);
  ngOnInit() {}

  
  
  
    
  


  
}
