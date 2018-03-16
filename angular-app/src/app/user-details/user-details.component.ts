import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public userArr = [
    {name: 'Satwik Das', id: 1234},
    {name: 'Neeta Rana', id: 1235}
  ];

  constructor() { }

  ngOnInit() {
  }

}
