import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import {DashboardComponent} from "./front_office/dashboard/dashboard.component";
import {HotelDetailsComponent} from "./front_office/hotel-details/hotel-details.component";
import {ListUsersComponent} from "./back_office/admin/list-users/list-users.component";
import {ListHotelComponent} from "./back_office/admin/list-hotel/list-hotel.component";
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
      path: 'hotels',
    component: DashboardComponent
  },
  {
    path: 'hotel/:id',
    component: HotelDetailsComponent
  },
  {
    path: 'manager/users',
    component: ListUsersComponent
  },
  {
    path: 'manager/hotels',
    component: ListHotelComponent
  },
  { path: '**', redirectTo: '404'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
