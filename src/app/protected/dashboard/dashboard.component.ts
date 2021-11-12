import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private authService: AuthServicesService) { }

  ngOnInit(): void {
  }

}
