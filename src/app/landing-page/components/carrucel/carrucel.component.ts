import { Component, Input, OnInit } from '@angular/core';
import { IcarouselItem } from './icaroucel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from '../../../data/constant/carousel_constant';

@Component({
  selector: 'app-carrucel',
  templateUrl: './carrucel.component.html',
  styleUrls: ['./carrucel.component.scss']
})
export class CarrucelComponent implements OnInit {
  /*
    Custom Properties


  */
  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items: IcarouselItem[] = [];

  /*
    Final Properties

  */
  public finalHeight: string | number = 0;
  public currentPosition = 0;
  
  constructor() {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
   }

  ngOnInit(): void {
    this.items.map((  i, index) =>{
      i.id = index;
      i.marginLeft = 0;

    })
  }
  
  setCurrentPosition(position:number){
    this.currentPosition = position;
    let w = this.items.find(i => i.id === 0); 
    if(w){
      w.marginLeft = -100 * position;
    } 
      
      
  }
    setNext(){
      let finalPercentage = 0;
      let nextPosition = this.currentPosition + 1;
      if(nextPosition <= this.items.length - 1){
        finalPercentage = -100 * nextPosition;
      }else{
        nextPosition = 0;
      }
      let w = this.items.find(i => i.id === 0);
      if(w){
        w .marginLeft = finalPercentage;
      }  
      this.currentPosition = nextPosition;
    }

    setBack(){
      let finalPercentage = 0;
      let backPosition = this.currentPosition - 1;
      if(backPosition >= 0){
        finalPercentage = -100 * backPosition;     
      }else{
        backPosition = this.items.length - 1;
        finalPercentage =  -100 * backPosition;
      }
      let w = this.items.find(i => i.id === 0);
      if(w){
        w.marginLeft = finalPercentage;
      } 
      this.currentPosition = backPosition;
    }

}
