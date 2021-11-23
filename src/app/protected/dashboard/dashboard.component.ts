import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { history } from 'src/app/interfaces/usr-interfaces';
import { AuthServicesService } from '../../services/auth-services.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
 
get user(){
  return this.authService.dataUsers;
}



  constructor(private router: Router, public authService: AuthServicesService) {

    
   }

  

  ngOnInit(): void {

    
   

/*
    this.wins = this.authService.scoreUser.value.wins;
    this.loses = this.authService.scoreUser.value.loses;
    this.matchs = this.wins + this.loses;
*/


  }

}
