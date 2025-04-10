import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormValidationMessageComponent } from "../../../utility/form-validation-message/form-validation-message.component";

@Component({
  selector: 'app-side-login',
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule, FormValidationMessageComponent],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  constructor(private router: Router) { }
  showPassword = false;

  logInForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  submit() {
    localStorage.setItem('token','kiran');
    this.router.navigate(['/dashboard']);
  }




}
