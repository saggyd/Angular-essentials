import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../starwars.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public userArr = [];

  constructor(private swService: StarWarsService) { 
    this.userArr = this.swService.getUser();
  }

  ngOnInit() {
  }

  

}
