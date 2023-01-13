import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../rest_services/user.service";
import {Router} from "@angular/router";
import {User} from "../../rest_services/class/user";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private logRequest: any;loginRequest:any;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private userService:UserService, private router:Router) {
    this.loginForm = this.formBuilder.group({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(4)]),
      session:new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  login(event:any){
    let formValues = this.loginForm.value;
    // this.connexionLoad= true;
    if(this.loginForm.valid){
      this.logRequest = {
        email :formValues.email,
        password:formValues.password
      };
      this.userService.loginRequest = this.logRequest;
      this.userService.log_user();
      this.loginRequest=this.userService.loginSubject.subscribe(
        ( data: any ) => {
            // this.loaderCode=false;
          let token:string = data.message;
          console.log(token)
          let decodedJWT = JSON.parse(window.atob(token.split('.')[1]));
          console.log(decodedJWT)
          console.log("test")
            let role;
            if(decodedJWT.role == "USER_CLIENT"){role = "client"}else {role="admin"}
          if (formValues.session != true) {
            sessionStorage.setItem("logged", "signIn");
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("comp", decodedJWT.company);
          } else {
            localStorage.setItem("logged", "signIn");
            localStorage.setItem("role", role);
            localStorage.setItem("token", token);
            localStorage.setItem("comp", decodedJWT.company);
          }

          if(role=="admin") window.location.href ='/register';
            if(role=="client") window.location.href ='/hotels';
          });
    }

    }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}
