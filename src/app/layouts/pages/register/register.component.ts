import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, AbstractControl } from '@angular/forms';
import { RegisteredAccount } from '../../../interfaces/registered-account';
import { RegisterService } from '../../../register.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  emailExample: string = 'Kerolos@gmail.com'
  registeredAccount!: RegisteredAccount
  constructor(private _RegisterService: RegisterService) {

  }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{7,}$/)]),
    rePassword: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  }, { validators: this.confirmPasswordValidator })

  confirmPasswordValidator(g: AbstractControl) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null
    }
    else {
      g.get('rePassword')?.setErrors({ mismatch: true })
      return { mismatch: true }
    }
  }
  submitRegister() {
    this.registeredAccount = {
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      rePassword: this.registerForm.get('rePassword')?.value,
      phone: this.registerForm.get('phone')?.value,
    }
    console.log(this.registeredAccount);

    this._RegisterService.sendRegisteration(this.registeredAccount).subscribe((res) => {
      console.log(res);
    })
  }

}
