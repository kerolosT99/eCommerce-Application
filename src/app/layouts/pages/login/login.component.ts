import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from '../../../login.service';
import { LoginAccount } from '../../../interfaces/login-account';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginAccount!: LoginAccount
  constructor(private _LoginService: LoginService) {

  }
  loginForm: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{7,}$/)]),
  })


  submitLogin() {
    this.loginAccount = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
    this._LoginService.sendLogin(this.loginAccount).subscribe((res) => {
      console.log(res);

    })

  }
}
