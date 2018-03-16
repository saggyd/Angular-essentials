import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { StarWarsService } from '../starwars.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  employeeName:string = "Sagnik Das";
  employeeId:number = 290692;
  public user:any = [];

  swService: StarWarsService;

  constructor() { }

  ngOnInit() {
  }

  setValue = (event) => {
    let userObj = {name:'',id:null};
    userObj.name = this.employeeName;
    userObj.id = this.employeeId;
    this.employeeName = '';
    this.employeeId = null;
    //console.log(userObj);
  }

  onSubmit(e,submittedForm) {
    // if (submittedForm.invalid) {
    //   return;
    // }
    if(e) {
      e.preventDefault();
    }
    console.log(submittedForm.value);
    this.swService.addUser(submittedForm.value)
  }

}
