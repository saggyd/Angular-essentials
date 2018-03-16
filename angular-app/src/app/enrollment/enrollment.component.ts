import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { StarWarsService } from '../starwars.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  constructor(private swService: StarWarsService) { }

  ngOnInit() {
  }

  onSubmit(e,submittedForm) {
    if (submittedForm.invalid) {
       return;
    }
    if(e) {
      e.preventDefault();
    }
    console.log(this.swService);
    this.swService.addUser(submittedForm.value);
  }

}
