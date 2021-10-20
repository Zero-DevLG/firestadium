import { Component, OnInit } from '@angular/core';
import { BodyComponent } from './components/body/body.component';
import { CarrucelComponent } from './components/carrucel/carrucel.component';
import { CarrucelGamesComponent } from './components/carrucel-games/carrucel-games.component';
import { IcarouseGameslItem } from './components/carrucel-games/icarrucel-games-item.metadata';
import { IcarouselItem } from './components/carrucel/icaroucel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from '../data/constant/carousel_constant';
import { CAROUSELGAMES_DATA_ITEMS } from '../data/constant/carouselGames_constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public carouselData: IcarouselItem[] = CAROUSEL_DATA_ITEMS;
  public carouselGamesData: IcarouseGameslItem[] = CAROUSELGAMES_DATA_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
