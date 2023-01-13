import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../rest_services/user.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private regRequest: any;registerRequest:any;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private userService:UserService) {
    this.registerForm = this.formBuilder.group({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      repeat_password:new FormControl('',[Validators.required]),
      fullName:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required,Validators.pattern("^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$")]),
    })
  }

  ngOnInit(): void {
  }
register(){
  let formValues = this.registerForm.value;
  if(this.registerForm.valid){
    this.regRequest = {
      email:formValues.email,
      password:formValues.password,
      fullName:formValues.fullName,
      phone:formValues.phone
    };
    this.userService.registerRequest = this.regRequest;
    this.userService.save_user();
    this.userService.log_user();
    this.registerRequest=this.userService.loginSubject.subscribe(
      ( data: any ) => {
        console.log(data);
        // this.loaderCode=false;
/*        let token:string = data.message;
        console.log(token)
        let decodedJWT = JSON.parse(window.atob(token.split('.')[1]));
        console.log(decodedJWT)
        console.log("test")*/
/*        if(decodedJWT.role == "USER_CLIENT"){role = "client"}else {role="admin"}
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
        if(role=="client") window.location.href ='/hotels';*/
      });
  }
}

  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get repeat_password() { return this.registerForm.get('repeat_password'); }
  get fullName() { return this.registerForm.get('fullName'); }
  get phone() { return this.registerForm.get('phone'); }

}
