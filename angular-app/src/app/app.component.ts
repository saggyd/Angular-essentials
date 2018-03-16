import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public userArr = [
    {name: 'Satwik Das', id: 1234},
    {name: 'Neeta Rana', id: 1235}
  ];

  title = 'app works!';
}
