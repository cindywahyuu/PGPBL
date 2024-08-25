import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;  // Declare 'form' property

  constructor(private router: Router, private formBuilder: FormBuilder) {  // Inject FormBuilder
    this.form = this.formBuilder.group({  // Initialize 'form' in the constructor
     
      username: [''],
      password: ['']
    });
  }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  login(){
    this.router.navigate(['home'])
  }

  register(){
    this.router.navigate(['register'])
  }

}
