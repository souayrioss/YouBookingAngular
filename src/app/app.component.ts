import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'YouBooking';
  authPage:boolean=false;
  errorPage:boolean=false;
  ngOnInit(): void {
    if(window.location.href.includes("login") || window.location.href.includes("register") ){
      this.authPage= true;
    }
    if(window.location.href.includes("404") || window.location.href.includes("403") ){
      this.errorPage= true;
    }
  }
}
