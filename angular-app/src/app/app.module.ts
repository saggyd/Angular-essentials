import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { StarWarsService } from './starwars.service';

const route = [
  {path:'', component:EnrollmentComponent},
  {path:'user', component:UserDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EnrollmentComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(route)
  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
