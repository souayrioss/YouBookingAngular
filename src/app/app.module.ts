import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { DashboardComponent } from './front_office/dashboard/dashboard.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { HotelDetailsComponent } from './front_office/hotel-details/hotel-details.component';
import { ListUsersComponent } from './back_office/admin/list-users/list-users.component';
import { ListHotelComponent } from './back_office/admin/list-hotel/list-hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    DashboardComponent,
    HotelDetailsComponent,
    ListUsersComponent,
    ListHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
