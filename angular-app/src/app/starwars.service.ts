import { Injectable } from '@angular/core';

@Injectable()
export class StarWarsService {
    private userArr = [
        {name: 'Satwik Das', id: 1234},
        {name: 'Neeta Rana', id: 1235}
    ];
    addUser(value) {
        console.log(value.name + " "+ value.id);  
        //const newUser = {name: value.name, id: value.id};
        //this.userArr.push(newUser);
    }
}