import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../service/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  messageClass; 
  message;
  processing = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.createForm();
   }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }
    );
  }
  disableForm(){
    this.form.controls['email'].disable();
    this.form.controls['password'].disable();
  }
  enableForm(){
    this.form.controls['email'].enable();
    this.form.controls['password'].enable();
  }
  onLoginSubmit() {
    // alert(123);
    this.processing = true;
    this.disableForm();
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };
    
    this.authService.login(user).subscribe(data =>{
      if(!data.success){
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.processing = false;
        this.enableForm();
      }else{
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        this.authService.storeUserData(data.token, data.user);
        setTimeout(() =>{
          this.router.navigate(['/']);
        }, 2000);
      }
    });
  }

  ngOnInit() {
  }

}
