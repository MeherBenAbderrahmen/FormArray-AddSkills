import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MustMatch } from '../custom-validators/mustMatch';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route :Router) { }
  submitted = false;



  registerForm = new FormGroup({
    title: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required)

  }, {
    validators: [MustMatch]
    //validator: MustMatch('password', 'confirmPassword') 
  });
  get f() { return this.registerForm.controls; }
  ngOnInit(): void {

  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      //this.route.navigate(['/listUser'])
      return
    };
   // const registartions = JSON.parse(localStorage.getItem('registration') || '[]');
   // registartions.push(this.registerForm.value);
   // localStorage.setItem('registration', JSON.stringify(registartions));
    this.route.navigate(['/addSkills'])
    //console.log('users=', registartions)
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}


